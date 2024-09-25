import"./index-Hm67rr0_.js";import{f as g,a6 as _,am as w,j as U,k as M,y as l,t as d,a2 as n,v as u,x as P,F as c}from"./libs-Bsjl4Mfh.js";import{r as h,K as y,av as R,R as S,J as x,v as T}from"./arcoDesign-Dk7yFUDg.js";const F=g({__name:"transmission",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(f){const{t}=_(),a=w(f,"modelValue"),V={type:"string",required:!0,validator:(i,e)=>{if(!i)return e("Please input URL");!i.startsWith("http://")&&!i.startsWith("https://")&&e(t("page.dashboard.editModal.label.endpoint.error.invalidSchema"));try{new URL(i),e()}catch{e(t("page.dashboard.editModal.label.endpoint.error.invalidUrl"))}}};return(i,e)=>{const s=h,r=y,b=R,p=S,v=x,m=T;return U(),M(c,null,[l(r,{field:"config.endpoint",label:n(t)("page.dashboard.editModal.label.endpoint"),"validate-trigger":"blur",required:"",rules:V},{default:d(()=>[l(s,{modelValue:a.value.endpoint,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value.endpoint=o),"allow-clear":""},null,8,["modelValue"])]),_:1},8,["label"]),l(r,{field:"config.username",label:n(t)("page.dashboard.editModal.label.username")},{default:d(()=>[l(s,{modelValue:a.value.username,"onUpdate:modelValue":e[1]||(e[1]=o=>a.value.username=o),"allow-clear":""},null,8,["modelValue"])]),_:1},8,["label"]),l(r,{field:"config.password",label:n(t)("page.dashboard.editModal.label.password")},{default:d(()=>[l(b,{modelValue:a.value.password,"onUpdate:modelValue":e[2]||(e[2]=o=>a.value.password=o),"allow-clear":""},null,8,["modelValue"])]),_:1},8,["label"]),l(r,{field:"config.rpcUrl",label:"RPC URL",required:""},{default:d(()=>[l(s,{modelValue:a.value.rpcUrl,"onUpdate:modelValue":e[3]||(e[3]=o=>a.value.rpcUrl=o),"allow-clear":"",placeholder:"/transmission/rpc"},null,8,["modelValue"])]),_:1}),l(r,{field:"config.httpVersion",label:n(t)("page.dashboard.editModal.label.httpVersion")},{extra:d(()=>[u(P(n(t)("page.dashboard.editModal.label.httpVersion.description")),1)]),default:d(()=>[l(v,{modelValue:a.value.httpVersion,"onUpdate:modelValue":e[4]||(e[4]=o=>a.value.httpVersion=o)},{default:d(()=>[l(p,{value:"HTTP_1_1"},{default:d(()=>e[7]||(e[7]=[u("1.1")])),_:1}),l(p,{value:"HTTP_2"},{default:d(()=>e[8]||(e[8]=[u("2.0")])),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(r,{field:"config.verifySsl","default-checked":"",label:n(t)("page.dashboard.editModal.label.verifySsl")},{default:d(()=>[l(m,{modelValue:a.value.verifySsl,"onUpdate:modelValue":e[5]||(e[5]=o=>a.value.verifySsl=o)},null,8,["modelValue"])]),_:1},8,["label"]),l(r,{field:"config.ignorePrivate",label:n(t)("page.dashboard.editModal.label.ignorePrivate")},{default:d(()=>[l(m,{modelValue:a.value.ignorePrivate,"onUpdate:modelValue":e[6]||(e[6]=o=>a.value.ignorePrivate=o)},null,8,["modelValue"])]),_:1},8,["label"])],64)}}});export{F as default};
