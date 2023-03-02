import{as as y,a as v,d5 as B,r as T,f as C,au as r,bR as P,o as n,j as a,x as e,n as s,m as c,z as d,y as o,k as F,w as _}from"./index.da8cb631.js";import{A as g}from"./index.c80628df.js";import{D as k}from"./index.5a91b512.js";import{S as U}from"./index.0961799f.js";import $ from"./CurrentPermissionMode.90c78381.js";import{R as f}from"./roleEnum.e1f286eb.js";import{A as b}from"./index.1d6bfef2.js";import{a as w}from"./index.4fb91daf.js";import"./useFlexGapSupport.63e06d71.js";import"./index.13fe2a9f.js";import"./index.2a671509.js";import"./useSize.3251a39b.js";import"./eagerComputed.d5d9fa51.js";import"./useWindowSizeFn.c221d32f.js";import"./useContentViewHeight.f6c045c6.js";import"./ArrowLeftOutlined.da248543.js";import"./index.17402399.js";import"./transButton.af3d1515.js";const N=v({components:{Alert:g,PageWrapper:w,Space:U,CurrentPermissionMode:$,Divider:k,Authority:b},setup(){const{changeRole:u,hasPermission:l}=B(),E=T();return{userStore:E,RoleEnum:f,isSuper:C(()=>E.getRoleList.includes(f.SUPER)),isTest:C(()=>E.getRoleList.includes(f.TEST)),changeRole:u,hasPermission:l}}}),V=o(" \u5F53\u524D\u89D2\u8272: "),L={class:"mt-4"},M=o(" \u6743\u9650\u5207\u6362(\u8BF7\u5148\u5207\u6362\u6743\u9650\u6A21\u5F0F\u4E3A\u524D\u7AEF\u89D2\u8272\u6743\u9650\u6A21\u5F0F): "),W=o("\u7EC4\u4EF6\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u6709\u9700\u8981\u53EF\u4EE5\u81EA\u884C\u5168\u5C40\u6CE8\u518C)"),j=o(" \u62E5\u6709super\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),z=o(" \u62E5\u6709test\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),I=o(" \u62E5\u6709[test,super]\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),q=o("\u51FD\u6570\u65B9\u5F0F\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u9002\u7528\u4E8E\u51FD\u6570\u5185\u90E8\u8FC7\u6EE4)"),G=o(" \u62E5\u6709super\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),H=o(" \u62E5\u6709test\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),J=o(" \u62E5\u6709[test,super]\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),K=o("\u6307\u4EE4\u65B9\u5F0F\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u8BE5\u65B9\u5F0F\u4E0D\u80FD\u52A8\u6001\u4FEE\u6539\u6743\u9650.)"),O=o(" \u62E5\u6709super\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),Q=o(" \u62E5\u6709test\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),X=o(" \u62E5\u6709[test,super]\u89D2\u8272\u6743\u9650\u53EF\u89C1 ");function Y(u,l,E,Z,x,uu){const D=r("CurrentPermissionMode"),R=r("Alert"),t=r("a-button"),A=r("Space"),i=r("Divider"),m=r("Authority"),S=r("PageWrapper"),p=P("auth");return n(),a(S,{title:"\u524D\u7AEF\u6743\u9650\u6309\u94AE\u793A\u4F8B",contentBackground:"",contentClass:"p-4",content:"\u7531\u4E8E\u5237\u65B0\u7684\u65F6\u5019\u4F1A\u8BF7\u6C42\u7528\u6237\u4FE1\u606F\u63A5\u53E3\uFF0C\u4F1A\u6839\u636E\u63A5\u53E3\u91CD\u7F6E\u89D2\u8272\u4FE1\u606F\uFF0C\u6240\u4EE5\u5237\u65B0\u540E\u754C\u9762\u4F1A\u6062\u590D\u539F\u6837\uFF0C\u5982\u679C\u4E0D\u9700\u8981\uFF0C\u53EF\u4EE5\u6CE8\u91CA src/layout/default/index\u5185\u7684\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u63A5\u53E3"},{default:e(()=>[s(D),c("p",null,[V,c("a",null,d(u.userStore.getRoleList),1)]),s(R,{class:"mt-4",type:"info",message:"\u70B9\u51FB\u540E\u8BF7\u67E5\u770B\u6309\u94AE\u53D8\u5316","show-icon":""}),c("div",L,[M,s(A,null,{default:e(()=>[s(t,{onClick:l[0]||(l[0]=h=>u.changeRole(u.RoleEnum.SUPER)),type:u.isSuper?"primary":"default"},{default:e(()=>[o(d(u.RoleEnum.SUPER),1)]),_:1},8,["type"]),s(t,{onClick:l[1]||(l[1]=h=>u.changeRole(u.RoleEnum.TEST)),type:u.isTest?"primary":"default"},{default:e(()=>[o(d(u.RoleEnum.TEST),1)]),_:1},8,["type"])]),_:1})]),s(i,null,{default:e(()=>[W]),_:1}),s(m,{value:u.RoleEnum.SUPER},{default:e(()=>[s(t,{type:"primary",class:"mx-4"},{default:e(()=>[j]),_:1})]),_:1},8,["value"]),s(m,{value:u.RoleEnum.TEST},{default:e(()=>[s(t,{color:"success",class:"mx-4"},{default:e(()=>[z]),_:1})]),_:1},8,["value"]),s(m,{value:[u.RoleEnum.TEST,u.RoleEnum.SUPER]},{default:e(()=>[s(t,{color:"error",class:"mx-4"},{default:e(()=>[I]),_:1})]),_:1},8,["value"]),s(i,null,{default:e(()=>[q]),_:1}),u.hasPermission(u.RoleEnum.SUPER)?(n(),a(t,{key:0,type:"primary",class:"mx-4"},{default:e(()=>[G]),_:1})):F("",!0),u.hasPermission(u.RoleEnum.TEST)?(n(),a(t,{key:1,color:"success",class:"mx-4"},{default:e(()=>[H]),_:1})):F("",!0),u.hasPermission([u.RoleEnum.TEST,u.RoleEnum.SUPER])?(n(),a(t,{key:2,color:"error",class:"mx-4"},{default:e(()=>[J]),_:1})):F("",!0),s(i,null,{default:e(()=>[K]),_:1}),_((n(),a(t,{type:"primary",class:"mx-4"},{default:e(()=>[O]),_:1})),[[p,u.RoleEnum.SUPER]]),_((n(),a(t,{color:"success",class:"mx-4"},{default:e(()=>[Q]),_:1})),[[p,u.RoleEnum.TEST]]),_((n(),a(t,{color:"error",class:"mx-4"},{default:e(()=>[X]),_:1})),[[p,[u.RoleEnum.TEST,u.RoleEnum.SUPER]]])]),_:1})}var Du=y(N,[["render",Y],["__scopeId","data-v-a5cca872"]]);export{Du as default};