import{a as C,s as T,t as A,f as c,i,Z as k,aD as B,ah as I,de as M,n as s,dd as L,as as D,aB as P,au as b,o as j,j as q,x as _,m as g,z as W,y as E}from"./index.da8cb631.js";import{D as z}from"./index.5a91b512.js";import{a as U}from"./index.4fb91daf.js";import"./index.13fe2a9f.js";import"./index.2a671509.js";import"./useSize.3251a39b.js";import"./eagerComputed.d5d9fa51.js";import"./index.0961799f.js";import"./useFlexGapSupport.63e06d71.js";import"./useWindowSizeFn.c221d32f.js";import"./useContentViewHeight.f6c045c6.js";import"./ArrowLeftOutlined.da248543.js";import"./index.17402399.js";import"./transButton.af3d1515.js";const Z={height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}},x="virtual-scroll";function o(t,n="px"){if(!(t==null||t===""))return isNaN(+t)?String(t):`${Number(t)}${n}`}var G=C({name:"VirtualScroll",props:Z,setup(t,{slots:n}){const u=T(null),a=A({first:0,last:0,scrollTop:0}),p=c(()=>parseInt(t.bench,10)),d=c(()=>parseInt(t.itemHeight,10)),m=c(()=>Math.max(0,a.first-i(p))),f=c(()=>Math.min((t.items||[]).length,a.last+i(p))),v=c(()=>({height:o((t.items||[]).length*i(d))})),h=c(()=>{const e={},r=o(t.height),l=o(t.minHeight),w=o(t.minWidth),H=o(t.maxHeight),N=o(t.maxWidth),F=o(t.width);return r&&(e.height=r),l&&(e.minHeight=l),w&&(e.minWidth=w),H&&(e.maxHeight=H),N&&(e.maxWidth=N),F&&(e.width=F),e});k([()=>t.itemHeight,()=>t.height],()=>{y()});function S(e){const r=i(u);if(!r)return 0;const l=parseInt(t.height||0,10)||r.clientHeight;return e+Math.ceil(l/i(d))}function V(){return Math.floor(a.scrollTop/i(d))}function y(){const e=i(u);!e||(a.scrollTop=e.scrollTop,a.first=V(),a.last=S(a.first))}function $(){const{items:e=[]}=t;return e.slice(i(m),i(f)).map(R)}function R(e,r){r+=i(m);const l=o(r*i(d));return s("div",{class:`${x}__item`,style:{top:l},key:r},[L(n,"default",{index:r,item:e})])}return B(()=>{a.last=S(0),I(()=>{const e=i(u);!e||M({el:e,name:"scroll",listener:y,wait:0})})}),()=>s("div",{class:x,style:i(h),ref:u},[s("div",{class:`${x}__container`,style:i(v)},[$()])])}});var J=D(G,[["__scopeId","data-v-dd7becb6"]]);const K=P(J);const O=(()=>{const t=[];for(let n=1;n<2e4;n++)t.push({title:"\u5217\u8868\u9879"+n});return t})(),Q=C({components:{VScroll:K,Divider:z,PageWrapper:U},setup(){return{data:O}}}),X=E("\u57FA\u7840\u6EDA\u52A8\u793A\u4F8B"),Y={class:"virtual-scroll-demo-wrap"},tt={class:"virtual-scroll-demo__item"},et=E("\u5373\u4F7F\u4E0D\u53EF\u89C1\uFF0C\u4E5F\u9884\u5148\u52A0\u8F7D50\u6761\u6570\u636E\uFF0C\u9632\u6B62\u7A7A\u767D"),it={class:"virtual-scroll-demo-wrap"},rt={class:"virtual-scroll-demo__item"};function at(t,n,u,a,p,d){const m=b("Divider"),f=b("VScroll"),v=b("PageWrapper");return j(),q(v,{class:"virtual-scroll-demo"},{default:_(()=>[s(m,null,{default:_(()=>[X]),_:1}),g("div",Y,[s(f,{itemHeight:41,items:t.data,height:300,width:300},{default:_(({item:h})=>[g("div",tt,W(h.title),1)]),_:1},8,["items"])]),s(m,null,{default:_(()=>[et]),_:1}),g("div",it,[s(f,{itemHeight:41,items:t.data,height:300,width:300,bench:50},{default:_(({item:h})=>[g("div",rt,W(h.title),1)]),_:1},8,["items"])])]),_:1})}var bt=D(Q,[["render",at],["__scopeId","data-v-002a1a68"]]);export{bt as default};
