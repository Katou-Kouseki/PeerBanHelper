import"./index-BkMUYSie.js";import{f as B,a6 as U,ao as x,r as A,j as _,k as y,y as a,t as d,a2 as n,v as r,x as f,s as S,u as k,p as T,F as R}from"./libs-Bgy1OBX3.js";import{p as P,F as q,at as C,au as F,R as H,o as I,X as L}from"./arcoDesign-DflKMaDz.js";const N=["innerHTML"],E=B({__name:"qbittorrentee",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(g){var b,V;const{t}=U(),l=x(g,"modelValue"),h={type:"string",required:!0,validator:(s,e)=>{if(!s)return e("Please input URL");!s.startsWith("http://")&&!s.startsWith("https://")&&e(t("page.dashboard.editModal.label.endpoint.error.invalidSchema"));try{new URL(s),e()}catch{e(t("page.dashboard.editModal.label.endpoint.error.invalidUrl"))}}},i=A(!1);return((b=l.value)!=null&&b.basicAuth.pass||(V=l.value)!=null&&V.basicAuth.pass)&&(i.value=!0),(s,e)=>{const p=P,u=q,c=C,w=F,v=H,M=I,m=L;return _(),y(R,null,[a(u,{field:"config.endpoint",label:n(t)("page.dashboard.editModal.label.endpoint"),"validate-trigger":"blur",required:"",rules:h},{default:d(()=>[a(p,{modelValue:l.value.endpoint,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value.endpoint=o),"allow-clear":""},null,8,["modelValue"])]),_:1},8,["label"]),a(u,{field:"config.username",label:n(t)("page.dashboard.editModal.label.username")},{default:d(()=>[a(p,{modelValue:l.value.username,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value.username=o),"allow-clear":""},null,8,["modelValue"])]),_:1},8,["label"]),a(u,{field:"config.password",label:n(t)("page.dashboard.editModal.label.password")},{default:d(()=>[a(c,{modelValue:l.value.password,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value.password=o),"allow-clear":""},null,8,["modelValue"])]),_:1},8,["label"]),a(u,null,{default:d(()=>[a(w,{modelValue:i.value,"onUpdate:modelValue":e[3]||(e[3]=o=>i.value=o)},{default:d(()=>[r(f(n(t)("page.dashboard.editModal.label.useBasicAuth")),1)]),_:1},8,["modelValue"])]),_:1}),i.value?(_(),S(u,{key:0,"content-flex":!1},{default:d(()=>[a(u,{field:"config.basicAuth.user",label:"User"},{default:d(()=>[a(p,{modelValue:l.value.basicAuth.user,"onUpdate:modelValue":e[4]||(e[4]=o=>l.value.basicAuth.user=o)},null,8,["modelValue"])]),_:1}),a(u,{field:"config.basicAuth.pass",label:"Pass"},{default:d(()=>[a(c,{modelValue:l.value.basicAuth.pass,"onUpdate:modelValue":e[5]||(e[5]=o=>l.value.basicAuth.pass=o)},null,8,["modelValue"])]),_:1})]),_:1})):k("",!0),a(u,{field:"config.httpVersion",label:n(t)("page.dashboard.editModal.label.httpVersion")},{extra:d(()=>[r(f(n(t)("page.dashboard.editModal.label.httpVersion.description")),1)]),default:d(()=>[a(M,{modelValue:l.value.httpVersion,"onUpdate:modelValue":e[6]||(e[6]=o=>l.value.httpVersion=o)},{default:d(()=>[a(v,{value:"HTTP_1_1"},{default:d(()=>[r("1.1")]),_:1}),a(v,{value:"HTTP_2"},{default:d(()=>[r("2.0")]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(u,{field:"config.incrementBan","default-checked":"",label:n(t)("page.dashboard.editModal.label.incrementBan")},{extra:d(()=>[r(f(n(t)("page.dashboard.editModal.label.incrementBan.description")),1)]),default:d(()=>[a(m,{modelValue:l.value.incrementBan,"onUpdate:modelValue":e[7]||(e[7]=o=>l.value.incrementBan=o)},null,8,["modelValue"])]),_:1},8,["label"]),a(u,{field:"config.shadowBan","default-checked":"",label:n(t)("page.dashboard.editModal.label.shadowBan")},{extra:d(()=>[T("div",{innerHTML:n(t)("page.dashboard.editModal.label.shadowBan.description")},null,8,N)]),default:d(()=>[a(m,{modelValue:l.value.useShadowBan,"onUpdate:modelValue":e[8]||(e[8]=o=>l.value.useShadowBan=o)},null,8,["modelValue"])]),_:1},8,["label"]),a(u,{field:"config.verifySsl","default-checked":"",label:n(t)("page.dashboard.editModal.label.verifySsl")},{default:d(()=>[a(m,{modelValue:l.value.verifySsl,"onUpdate:modelValue":e[9]||(e[9]=o=>l.value.verifySsl=o)},null,8,["modelValue"])]),_:1},8,["label"])],64)}}});export{E as default};
