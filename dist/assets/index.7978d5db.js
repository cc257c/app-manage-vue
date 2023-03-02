import{B as S}from"./index.2a2ecdde.js";import{n,b0 as O,as as k,a as F,c_ as D,s as p,au as f,o as m,j as h,x as r,m as g,h as b,y as d,D as A}from"./index.da8cb631.js";import{a as $}from"./index.4fb91daf.js";import"./index.13fe2a9f.js";import"./index.2a671509.js";import"./useSize.3251a39b.js";import"./eagerComputed.d5d9fa51.js";import"./index.0961799f.js";import"./useFlexGapSupport.63e06d71.js";import"./useWindowSizeFn.c221d32f.js";import"./useContentViewHeight.f6c045c6.js";import"./ArrowLeftOutlined.da248543.js";import"./index.17402399.js";import"./transButton.af3d1515.js";var j={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M304 280h56c4.4 0 8-3.6 8-8 0-28.3 5.9-53.2 17.1-73.5 10.6-19.4 26-34.8 45.4-45.4C450.9 142 475.7 136 504 136h16c28.3 0 53.2 5.9 73.5 17.1 19.4 10.6 34.8 26 45.4 45.4C650 218.9 656 243.7 656 272c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-40-8.8-76.7-25.9-108.1a184.31 184.31 0 00-74-74C596.7 72.8 560 64 520 64h-16c-40 0-76.7 8.8-108.1 25.9a184.31 184.31 0 00-74 74C304.8 195.3 296 232 296 272c0 4.4 3.6 8 8 8z"}},{tag:"path",attrs:{d:"M940 512H792V412c76.8 0 139-62.2 139-139 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8a63 63 0 01-63 63H232a63 63 0 01-63-63c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 76.8 62.2 139 139 139v100H84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h148v96c0 6.5.2 13 .7 19.3C164.1 728.6 116 796.7 116 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-44.2 23.9-82.9 59.6-103.7a273 273 0 0022.7 49c24.3 41.5 59 76.2 100.5 100.5S460.5 960 512 960s99.8-13.9 141.3-38.2a281.38 281.38 0 00123.2-149.5A120 120 0 01836 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-79.3-48.1-147.4-116.7-176.7.4-6.4.7-12.8.7-19.3v-96h148c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM716 680c0 36.8-9.7 72-27.8 102.9-17.7 30.3-43 55.6-73.3 73.3C584 874.3 548.8 884 512 884s-72-9.7-102.9-27.8c-30.3-17.7-55.6-43-73.3-73.3A202.75 202.75 0 01308 680V412h408v268z"}}]},name:"bug",theme:"outlined"},P=j;function B(e){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?Object(arguments[t]):{},c=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(c=c.concat(Object.getOwnPropertySymbols(s).filter(function(u){return Object.getOwnPropertyDescriptor(s,u).enumerable}))),c.forEach(function(u){V(e,u,s[u])})}return e}function V(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var y=function(t,s){var c=B({},t,s.attrs);return n(O,B({},c,{icon:P}),null)};y.displayName="BugOutlined";y.inheritAttrs=!1;var M=y;const w=F({components:{BasicDragVerify:S,BugOutlined:M,RightOutlined:D,PageWrapper:$},setup(){const{createMessage:e}=A(),t=p(null),s=p(null),c=p(null),u=p(null),v=p(null);function a(i){const{time:_}=i;e.success(`\u6821\u9A8C\u6210\u529F,\u8017\u65F6${_}\u79D2`)}function l(i){!i||i.resume()}return{handleSuccess:a,el1:t,el2:s,el3:c,el4:u,el5:v,handleBtnClick:l}}}),E={class:"flex justify-center p-4 items-center bg-gray-700"},N=d(" \u8FD8\u539F "),x={class:"flex justify-center p-4 items-center bg-gray-700"},z=d(" \u8FD8\u539F "),H={class:"flex justify-center p-4 items-center bg-gray-700"},I=d(" \u8FD8\u539F "),W={class:"flex justify-center p-4 items-center bg-gray-700"},R=d(" \u8FD8\u539F "),T={class:"flex justify-center p-4 items-center bg-gray-700"},q={key:0},G=d(" \u6210\u529F "),J={key:1},L=d(" \u62D6\u52A8 "),Q=d(" \u8FD8\u539F ");function U(e,t,s,c,u,v){const a=f("BasicDragVerify"),l=f("a-button"),i=f("BugOutlined"),_=f("RightOutlined"),C=f("PageWrapper");return m(),h(C,{title:"\u62D6\u52A8\u6821\u9A8C\u793A\u4F8B"},{default:r(()=>[g("div",E,[n(a,{ref:"el1",onSuccess:e.handleSuccess},null,8,["onSuccess"]),n(l,{type:"primary",class:"ml-2",onClick:t[0]||(t[0]=o=>e.handleBtnClick(e.el1))},{default:r(()=>[N]),_:1})]),g("div",x,[n(a,{ref:"el2",onSuccess:e.handleSuccess,circle:""},null,8,["onSuccess"]),n(l,{type:"primary",class:"ml-2",onClick:t[1]||(t[1]=o=>e.handleBtnClick(e.el2))},{default:r(()=>[z]),_:1})]),g("div",H,[n(a,{ref:"el3",onSuccess:e.handleSuccess,text:"\u62D6\u52A8\u4EE5\u8FDB\u884C\u6821\u9A8C",successText:"\u6821\u9A8C\u6210\u529F",barStyle:{backgroundColor:"#018ffb"}},null,8,["onSuccess"]),n(l,{type:"primary",class:"ml-2",onClick:t[2]||(t[2]=o=>e.handleBtnClick(e.el3))},{default:r(()=>[I]),_:1})]),g("div",W,[n(a,{ref:"el4",onSuccess:e.handleSuccess},{actionIcon:r(o=>[o?(m(),h(i,{key:0})):(m(),h(_,{key:1}))]),_:1},8,["onSuccess"]),n(l,{type:"primary",class:"ml-2",onClick:t[3]||(t[3]=o=>e.handleBtnClick(e.el4))},{default:r(()=>[R]),_:1})]),g("div",T,[n(a,{ref:"el5",onSuccess:e.handleSuccess},{text:r(o=>[o?(m(),b("div",q,[n(i),G])):(m(),b("div",J,[L,n(_)]))]),_:1},8,["onSuccess"]),n(l,{type:"primary",class:"ml-2",onClick:t[4]||(t[4]=o=>e.handleBtnClick(e.el5))},{default:r(()=>[Q]),_:1})])]),_:1})}var ie=k(w,[["render",U],["__scopeId","data-v-432b38d7"]]);export{ie as default};
