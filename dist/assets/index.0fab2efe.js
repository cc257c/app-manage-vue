import{as as _,a as C,ey as v,s as y,fu as F,au as a,o as g,j as B,x as n,n as s,m as h,i,y as x,D as b}from"./index.da8cb631.js";import{a as w}from"./index.4fb91daf.js";import"./index.13fe2a9f.js";import"./index.2a671509.js";import"./useSize.3251a39b.js";import"./eagerComputed.d5d9fa51.js";import"./index.0961799f.js";import"./useFlexGapSupport.63e06d71.js";import"./useWindowSizeFn.c221d32f.js";import"./useContentViewHeight.f6c045c6.js";import"./ArrowLeftOutlined.da248543.js";import"./index.17402399.js";import"./transButton.af3d1515.js";const k=C({name:"Copy",components:{CollapseContainer:v,PageWrapper:w},setup(){const e=y(""),{createMessage:o}=b(),{clipboardRef:r,copiedRef:p}=F();function u(){const t=i(e);if(!t){o.warning("\u8BF7\u8F93\u5165\u8981\u62F7\u8D1D\u7684\u5185\u5BB9\uFF01");return}r.value=t,i(p)&&o.warning("copy success\uFF01")}return{handleCopy:u,value:e}}}),D={class:"flex justify-center"},$=x(" Copy ");function N(e,o,r,p,u,t){const l=a("a-input"),c=a("a-button"),m=a("CollapseContainer"),d=a("PageWrapper");return g(),B(d,{title:"\u6587\u672C\u590D\u5236\u793A\u4F8B"},{default:n(()=>[s(m,{class:"w-full h-32 bg-white rounded-md",title:"Copy Example"},{default:n(()=>[h("div",D,[s(l,{placeholder:"\u8BF7\u8F93\u5165",value:e.value,"onUpdate:value":o[0]||(o[0]=f=>e.value=f)},null,8,["value"]),s(c,{type:"primary",onClick:e.handleCopy},{default:n(()=>[$]),_:1},8,["onClick"])])]),_:1})]),_:1})}var H=_(k,[["render",N]]);export{H as default};
