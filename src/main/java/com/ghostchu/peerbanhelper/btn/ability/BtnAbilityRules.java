package com.ghostchu.peerbanhelper.btn.ability;

import com.ghostchu.peerbanhelper.Main;
import com.ghostchu.peerbanhelper.btn.BtnNetwork;
import com.ghostchu.peerbanhelper.btn.BtnRule;
import com.ghostchu.peerbanhelper.btn.BtnRuleParsed;
import com.ghostchu.peerbanhelper.event.BtnRuleUpdateEvent;
import com.ghostchu.peerbanhelper.text.Lang;
import com.ghostchu.peerbanhelper.util.HTTPUtil;
import com.ghostchu.peerbanhelper.util.URLUtil;
import com.ghostchu.peerbanhelper.util.json.JsonUtil;
import com.github.mizosoft.methanol.MutableRequest;
import com.google.gson.JsonObject;
import com.google.gson.JsonSyntaxException;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

import java.io.File;
import java.io.IOException;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import static com.ghostchu.peerbanhelper.text.TextManager.tlUI;

@Slf4j
public class BtnAbilityRules extends AbstractBtnAbility {
    private final BtnNetwork btnNetwork;
    private final long interval;
    private final String endpoint;
    private final long randomInitialDelay;
    private final File btnCacheFile = new File(Main.getDataDirectory(), "btn.cache");
    @Getter
    private BtnRuleParsed btnRule;


    public BtnAbilityRules(BtnNetwork btnNetwork, JsonObject ability) {
        this.btnNetwork = btnNetwork;
        this.interval = ability.get("interval").getAsLong();
        this.endpoint = ability.get("endpoint").getAsString();
        this.randomInitialDelay = ability.get("random_initial_delay").getAsLong();
        setLastStatus(true, "Stand by");
    }

    private void loadCacheFile() throws IOException {
        if (!btnCacheFile.exists()) {
            if (!btnCacheFile.getParentFile().exists()) {
                btnCacheFile.getParentFile().mkdirs();
            }
            btnCacheFile.createNewFile();
        } else {
            try {
                BtnRule btnRule = JsonUtil.getGson().fromJson(Files.readString(btnCacheFile.toPath()), BtnRule.class);
                this.btnRule = new BtnRuleParsed(btnRule);
            } catch (Throwable ignored) {
            }
        }
    }

    @Override
    public void load() {
        try {
            loadCacheFile();
            setLastStatus(true, "Loaded from disk cache");
        } catch (Exception e) {
            log.error("Unable to load cached BTN rules into memory");
            setLastStatus(false, e.getClass().getName() + ": " + e.getMessage());
        }
        btnNetwork.getExecuteService().scheduleWithFixedDelay(this::updateRule, new Random().nextLong(randomInitialDelay), interval, TimeUnit.MILLISECONDS);
    }

    private void updateRule() {
        String version;
        if (btnRule == null || btnRule.getVersion() == null) {
            version = "initial";
        } else {
            version = btnRule.getVersion();
        }
        HTTPUtil.retryableSend(
                        btnNetwork.getHttpClient(),
                        MutableRequest.GET(URLUtil.appendUrl(endpoint, Map.of("rev", version))),
                        HttpResponse.BodyHandlers.ofString())
                .thenAccept(r -> {
                    if (r.statusCode() == 204) {
                        setLastStatus(true, "Not modified");
                        return;
                    }
                    if (r.statusCode() != 200) {
                        log.error(tlUI(Lang.BTN_REQUEST_FAILS, r.statusCode() + " - " + r.body()));
                        setLastStatus(false, "HTTP Error: " + r.statusCode() + " - " + r.body());
                    } else {
                        try {
                            BtnRule btr = JsonUtil.getGson().fromJson(r.body(), BtnRule.class);
                            this.btnRule = new BtnRuleParsed(btr);
                            Main.getEventBus().post(new BtnRuleUpdateEvent());
                            try {
                                Files.writeString(btnCacheFile.toPath(), r.body(), StandardCharsets.UTF_8);
                            } catch (IOException ignored) {
                            }
                            log.info(tlUI(Lang.BTN_UPDATE_RULES_SUCCESSES, this.btnRule.getVersion()));
                            setLastStatus(true, "Loaded from remote, version: " + this.btnRule.getVersion());
                            btnNetwork.getModuleMatchCache().invalidateAll();
                        } catch (JsonSyntaxException e) {
                            setLastStatus(false, "Unable parse remote JSON response: " + r.statusCode() + " - " + r.body());
                            log.error("Unable to parse BtnRule as a valid Json object: {}-{}", r.statusCode(), r.body(), e);
                        }
                    }
                })
                .exceptionally((e) -> {
                    log.error(tlUI(Lang.BTN_REQUEST_FAILS), e);
                    setLastStatus(false, "Unknown Error: " + e.getClass().getName() + ": " + e.getMessage());
                    return null;
                });
    }

    @Override
    public void unload() {

    }
}
