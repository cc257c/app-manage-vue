import{as as v,a as m,c$ as _,fd as S,fe as T,ff as x,fg as h,fh as R,fi as X,fj as b,fk as g,fl as w,fm as y,fn as Y,fo as k,fp as C,s as n,au as o,o as r,j as i,x as t,m as l,n as p,aI as E,w as B,v as $,y as F}from"./index.da8cb631.js";import{a as A}from"./index.4fb91daf.js";import"./index.13fe2a9f.js";import"./index.2a671509.js";import"./useSize.3251a39b.js";import"./eagerComputed.d5d9fa51.js";import"./index.0961799f.js";import"./useFlexGapSupport.63e06d71.js";import"./useWindowSizeFn.c221d32f.js";import"./useContentViewHeight.f6c045c6.js";import"./ArrowLeftOutlined.da248543.js";import"./index.17402399.js";import"./transButton.af3d1515.js";const N=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"],P=N.map(e=>({label:e,value:e,key:e})),V=m({components:{Select:_,PageWrapper:A,FadeTransition:S,ScaleTransition:T,SlideYTransition:x,ScrollYTransition:h,SlideYReverseTransition:R,ScrollYReverseTransition:X,SlideXTransition:b,ScrollXTransition:g,SlideXReverseTransition:w,ScrollXReverseTransition:y,ScaleRotateTransition:Y,ExpandXTransition:k,ExpandTransition:C},setup(){const e=n("Fade"),a=n(!0);function s(){a.value=!1,setTimeout(()=>{a.value=!0},300)}return{options:P,value:e,start:s,show:a}}}),W={class:"flex"},j=F(" start "),D={class:"box"};function I(e,a,s,L,U,q){const c=o("Select"),d=o("a-button"),u=o("PageWrapper");return r(),i(u,{title:"\u52A8\u753B\u7EC4\u4EF6\u793A\u4F8B"},{default:t(()=>[l("div",W,[p(c,{options:e.options,value:e.value,"onUpdate:value":a[0]||(a[0]=f=>e.value=f),placeholder:"\u9009\u62E9\u52A8\u753B",style:{width:"150px"}},null,8,["options","value"]),p(d,{type:"primary",class:"ml-4",onClick:e.start},{default:t(()=>[j]),_:1},8,["onClick"])]),(r(),i(E(`${e.value}Transition`),null,{default:t(()=>[B(l("div",D,null,512),[[$,e.show]])]),_:1}))]),_:1})}var se=v(V,[["render",I],["__scopeId","data-v-45b1f032"]]);export{se as default};