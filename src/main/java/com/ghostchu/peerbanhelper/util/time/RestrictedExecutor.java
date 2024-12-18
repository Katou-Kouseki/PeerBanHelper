package com.ghostchu.peerbanhelper.util.time;

import com.ghostchu.peerbanhelper.text.Lang;
import lombok.extern.slf4j.Slf4j;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
import java.util.function.Supplier;

import static com.ghostchu.peerbanhelper.text.TextManager.tlUI;

@Slf4j
public class RestrictedExecutor {
    public static <T> RestrictedExecResult<T> execute(long timeout, Supplier<T> target) {
        CompletableFuture<T> sandbox = CompletableFuture.supplyAsync(target);
        try {
            return new RestrictedExecResult<>(false, sandbox.get(timeout, TimeUnit.MILLISECONDS));
        } catch (TimeoutException e) {
            return new RestrictedExecResult<>(true, null);
        } catch (InterruptedException e) {
            log.warn(tlUI(Lang.THREAD_INTERRUPTED), e);
            Thread.currentThread().interrupt();
            return new RestrictedExecResult<>(false, null);
        } catch (ExecutionException e) {
            throw new RuntimeException(e);
        }
    }
}
