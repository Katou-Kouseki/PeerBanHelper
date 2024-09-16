import{h as R,i as z,f as m,I as O,j as U,k as $,c as q}from"./index-y-mIu0It.js";import{f as E,a6 as G,r as f,a7 as H,j as u,s as b,t as e,v as p,x as l,a2 as n,y as a,u as I,p as J,k,F as K,P as Q}from"./libs-Cs9lzzqV.js";import{m as W,S as X,s as Y,T as Z,t as ee,r as ae}from"./arcoDesign-B08Y0ebX.js";const te=E({__name:"peerListModal",setup(se,{expose:N}){const{t:o}=G(),_=f(!1),g=f(""),v=f(""),h=f("");N({showModal:(d,s,r)=>{g.value=d,v.value=s,h.value=r,_.value=!0,T(d,s)}});const D=()=>{_.value=!1,g.value="",v.value=""},{data:w,loading:S,run:T,cancel:C}=H(R,{defaultParams:[g.value,v.value],manual:!0,pollingInterval:1e3}),F=[{title:()=>o("page.dashboard.peerList.column.address"),slotName:"peerAddress",width:330},{title:()=>o("page.dashboard.peerList.column.port"),dataIndex:"peer.address.port"},{title:()=>o("page.dashboard.peerList.column.flag"),slotName:"flags"},{title:"Peer ID",dataIndex:"peer.id"},{title:()=>o("page.dashboard.peerList.column.clientName"),dataIndex:"peer.clientName"},{title:()=>o("page.dashboard.peerList.column.speed"),slotName:"speed"},{title:()=>o("page.dashboard.peerList.column.uploadedDownloaded"),slotName:"uploadDownload"},{title:()=>o("page.dashboard.peerList.column.progress"),slotName:"progress"}],P=d=>d.split(" ").map(s=>s+" - "+o("page.dashboard.peerList.column.flags."+s.trim()));return(d,s)=>{const r=W,y=O,x=U,i=X,j=Y,A=$,B=Z,M=ee,V=ae;return u(),b(V,{visible:_.value,"onUpdate:visible":s[0]||(s[0]=c=>_.value=c),"hide-cancel":"",closable:"","unmount-on-close":"",width:"auto",onOk:D,onClose:s[1]||(s[1]=c=>n(C)())},{title:e(()=>[p(l(n(o)("page.dashboard.peerList.title")+h.value),1)]),default:e(()=>{var c;return[a(M,{columns:F,data:(c=n(w))==null?void 0:c.data,loading:!n(S)&&!n(w),"virtual-list-props":{height:500},pagination:!1},{peerAddress:e(({record:t})=>[a(r,{copyable:"",code:""},{default:e(()=>[t.geo&&t.geo.countryRegion?(u(),b(z,{key:0,iso:t.geo.countryRegion},null,8,["iso"])):I("",!0),p(" "+l(t.peer.address.ip),1)]),_:2},1024)]),speed:e(({record:t})=>[a(i,{fill:"",style:{"justify-content":"space-between"}},{default:e(()=>[a(i,{fill:"",direction:"vertical"},{default:e(()=>[a(r,null,{default:e(()=>[a(y,{class:"green"}),p(" "+l(n(m)(t.peer.uploadSpeed))+"/s ",1)]),_:2},1024),a(r,null,{default:e(()=>[a(x,{class:"red"}),p(" "+l(n(m)(t.peer.downloadSpeed))+"/s ",1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),uploadDownload:e(({record:t})=>[a(i,{fill:"",style:{"justify-content":"space-between"}},{default:e(()=>[a(i,{fill:"",direction:"vertical"},{default:e(()=>[a(r,null,{default:e(()=>[a(y,{class:"green"}),p(" "+l(n(m)(t.peer.uploaded)),1)]),_:2},1024),a(r,null,{default:e(()=>[a(x,{class:"red"}),p(" "+l(n(m)(t.peer.downloaded)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),progress:e(({record:t})=>[a(i,null,{default:e(()=>[a(j,{percent:t.peer.progress,size:"mini"},null,8,["percent"]),a(r,null,{default:e(()=>[p(l((t.peer.progress*100).toFixed(2)+"%"),1)]),_:2},1024)]),_:2},1024)]),flags:e(({record:t})=>[J("p",null,[p(l(t.peer.flags)+" ",1),t.peer.flags?(u(),b(B,{key:0},{content:e(()=>[(u(!0),k(K,null,Q(P(t.peer.flags),L=>(u(),k("p",{key:L},l(L),1))),128))]),default:e(()=>[a(A)]),_:2},1024)):I("",!0)])]),_:1},8,["data","loading"])]}),_:1},8,["visible"])}}}),re=q(te,[["__scopeId","data-v-c1c5837b"]]);export{re as default};