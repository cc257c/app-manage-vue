import{as as r,a as p,b as d,f as m,o as l,h as c,m as h,z as u,n as f,av as g,q as C,c as _,au as v}from"./index.da8cb631.js";import{S as y}from"./index.01a084a1.js";import{b}from"./index.3732e6f5.js";import"./index.658b646d.js";import"./index.9430cdfe.js";import"./ArrowLeftOutlined.da248543.js";import"./index.5a91b512.js";import"./index.2f3855eb.js";import"./FullscreenOutlined.556a26d5.js";import"./index.be571b36.js";import"./useWindowSizeFn.c221d32f.js";import"./useContentViewHeight.f6c045c6.js";import"./uniqBy.65755c80.js";import"./_baseIteratee.58bea659.js";import"./get.8113fc0b.js";import"./index.44257749.js";import"./useRefs.4b50a505.js";import"./PlusOutlined.8f7b48bc.js";import"./RedoOutlined.5cc8f7d5.js";import"./index.44d3f356.js";import"./lock.3ba00c32.js";const w=p({name:"SwitchItem",components:{Switch:y},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=d("setting-switch-item"),{t:n}=_(),o=m(()=>e.def?{checked:e.def}:{});function i(a){e.event&&b(e.event,a)}return{prefixCls:t,t:n,handleChange:i,getBindValue:o}}});function S(e,t,n,o,i,a){const s=v("Switch");return l(),c("div",{class:C(e.prefixCls)},[h("span",null,u(e.title),1),f(s,g(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}var O=r(w,[["render",S],["__scopeId","data-v-440e72fd"]]);export{O as default};
