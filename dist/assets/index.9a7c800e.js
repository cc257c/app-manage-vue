import{as as F,a as y,au as t,o as E,j as A,x as p,n as r,y as a}from"./index.da8cb631.js";import{A as R}from"./index.c80628df.js";import{u as s}from"./index.658b646d.js";import k from"./Drawer1.e1c93748.js";import B from"./Drawer2.d6d9a1da.js";import $ from"./Drawer3.0d572b5c.js";import h from"./Drawer4.62e6e49f.js";import v from"./Drawer5.d99e4a29.js";import{a as P}from"./index.4fb91daf.js";import"./index.9430cdfe.js";import"./ArrowLeftOutlined.da248543.js";import"./BasicForm.4eff3114.js";/* empty css              *//* empty css              */import"./index.5a91b512.js";import"./index.b939f3ed.js";import"./Checkbox.f0824c7f.js";import"./index.6f5a4fde.js";import"./index.c918b06b.js";import"./index.7035eacc.js";import"./index.01a084a1.js";import"./index.90b5efc0.js";import"./get.8113fc0b.js";import"./index.d148813f.js";import"./eagerComputed.d5d9fa51.js";import"./index.f175a2ab.js";import"./_baseIteratee.58bea659.js";import"./DeleteOutlined.4914d5b2.js";import"./index.3443a9a6.js";import"./useRefs.4b50a505.js";import"./Form.57dd9f37.js";import"./Col.c878cfca.js";import"./useFlexGapSupport.63e06d71.js";import"./useSize.3251a39b.js";import"./transButton.af3d1515.js";import"./index.0961799f.js";import"./index.59b50bd4.js";import"./useWindowSizeFn.c221d32f.js";import"./FullscreenOutlined.556a26d5.js";import"./index.e4b8d817.js";import"./uuid.2b29000c.js";import"./download.8277b1ca.js";import"./base64Conver.08b9f4ec.js";import"./index.0e6e8503.js";import"./index.36948379.js";import"./uniqBy.65755c80.js";import"./useForm.8ce8a1bf.js";import"./index.13fe2a9f.js";import"./index.2a671509.js";import"./useContentViewHeight.f6c045c6.js";import"./index.17402399.js";const W=y({components:{Alert:R,PageWrapper:P,Drawer1:k,Drawer2:B,Drawer3:$,Drawer4:h,Drawer5:v},setup(){const[e,{openDrawer:o,setDrawerProps:u}]=s(),[g,{openDrawer:f}]=s(),[d,{openDrawer:n}]=s(),[i,{openDrawer:m}]=s(),[w,{openDrawer:D}]=s();function l(){m(!0,{data:"content",info:"Info"})}function c(){o(),u({loading:!0}),setTimeout(()=>{u({loading:!1})},2e3)}return{register1:e,openDrawer1:o,register2:g,openDrawer2:f,register3:d,openDrawer3:n,register4:i,register5:w,openDrawer5:D,send:l,openDrawerLoading:c}}}),b=a(" \u6253\u5F00Drawer "),L=a(" \u6253\u5F00Drawer "),N=a(" \u6253\u5F00Drawer "),T=a(" \u6253\u5F00Drawer\u5E76\u4F20\u9012\u6570\u636E "),V=a(" \u6253\u5F00\u8BE6\u60C5Drawer ");function j(e,o,u,g,f,d){const n=t("Alert"),i=t("a-button"),m=t("Drawer1"),w=t("Drawer2"),D=t("Drawer3"),l=t("Drawer4"),c=t("Drawer5"),C=t("PageWrapper");return E(),A(C,{title:"\u62BD\u5C49\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B"},{default:p(()=>[r(n,{message:"\u4F7F\u7528 useDrawer \u8FDB\u884C\u62BD\u5C49\u64CD\u4F5C","show-icon":""}),r(i,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:p(()=>[b]),_:1},8,["onClick"]),r(n,{message:"\u5185\u5916\u540C\u65F6\u63A7\u5236\u663E\u793A\u9690\u85CF","show-icon":""}),r(i,{type:"primary",class:"my-4",onClick:o[0]||(o[0]=_=>e.openDrawer2(!0))},{default:p(()=>[L]),_:1}),r(n,{message:"\u81EA\u9002\u5E94\u9AD8\u5EA6/\u663E\u793Afooter","show-icon":""}),r(i,{type:"primary",class:"my-4",onClick:o[1]||(o[1]=_=>e.openDrawer3(!0))},{default:p(()=>[N]),_:1}),r(n,{message:"\u5185\u5916\u6570\u636E\u4EA4\u4E92","show-icon":""}),r(i,{type:"primary",class:"my-4",onClick:e.send},{default:p(()=>[T]),_:1},8,["onClick"]),r(n,{message:"\u8BE6\u60C5\u9875\u6A21\u5F0F","show-icon":""}),r(i,{type:"primary",class:"my-4",onClick:o[2]||(o[2]=_=>e.openDrawer5(!0))},{default:p(()=>[V]),_:1}),r(m,{onRegister:e.register1},null,8,["onRegister"]),r(w,{onRegister:e.register2},null,8,["onRegister"]),r(D,{onRegister:e.register3},null,8,["onRegister"]),r(l,{onRegister:e.register4},null,8,["onRegister"]),r(c,{onRegister:e.register5},null,8,["onRegister"])]),_:1})}var Tr=F(W,[["render",j]]);export{Tr as default};
