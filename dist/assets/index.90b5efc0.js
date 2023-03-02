import{t as B,ap as h,a3 as m,f as g,ak as z,ah as I,ag as F,i as d,aq as k,s as p,ar as A,a as C,B as T,as as S,c as N,at as j,au as f,o as w,j as y,x as v,y as D,z as O,av as b,b as P,aw as R,ax as q,ay as x,az as E,aA as V,n as L,aB as _}from"./index.da8cb631.js";function U(t,n="value",a="change",o){const r=k()?.emit,e=B({value:t[n]}),s=h(e),u=l=>{e.value=l};return m(()=>{e.value=t[n]}),[g({get(){return e.value},set(l){z(l,s.value)||(e.value=l,I(()=>{r?.(a,l,...F(d(o))||[])}))}}),u,s]}function G(t){const n=p(t),a=p(!1);let o;function c(){o&&window.clearInterval(o)}function r(){a.value=!1,c(),o=null}function e(){d(a)||!!o||(a.value=!0,o=setInterval(()=>{d(n)===1?(r(),n.value=t):n.value-=1},1e3))}function s(){n.value=t,r()}function u(){s(),e()}return A(()=>{s()}),{start:e,reset:s,restart:u,clear:c,stop:r,currentCount:n,isStart:a}}const H={value:{type:[Object,Number,String,Array]},count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},J=C({name:"CountButton",components:{Button:T},props:H,setup(t){const n=p(!1),{currentCount:a,isStart:o,start:c,reset:r}=G(t.count),{t:e}=N(),s=g(()=>d(o)?e("component.countdown.sendText",[d(a)]):e("component.countdown.normalText"));m(()=>{t.value===void 0&&r()});async function u(){const{beforeStartFunc:i}=t;if(i&&j(i)){n.value=!0;try{await i()&&c()}finally{n.value=!1}}else c()}return{handleStart:u,currentCount:a,loading:n,getButtonText:s,isStart:o}}});function K(t,n,a,o,c,r){const e=f("Button");return w(),y(e,b(t.$attrs,{disabled:t.isStart,onClick:t.handleStart,loading:t.loading}),{default:v(()=>[D(O(t.getButtonText),1)]),_:1},16,["disabled","onClick","loading"])}var $=S(J,[["render",K]]);const M={value:{type:String},size:{type:String,validator:t=>["default","large","small"].includes(t)},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},Q=C({name:"CountDownInput",components:{CountButton:$},inheritAttrs:!1,props:M,setup(t){const{prefixCls:n}=P("countdown-input"),[a]=U(t);return{prefixCls:n,state:a}}});function W(t,n,a,o,c,r){const e=f("CountButton"),s=f("a-input");return w(),y(s,b(t.$attrs,{class:t.prefixCls,size:t.size,value:t.state}),R({addonAfter:v(()=>[L(e,{size:t.size,count:t.count,value:t.state,beforeStartFunc:t.sendCodeApi},null,8,["size","count","value","beforeStartFunc"])]),_:2},[q(Object.keys(t.$slots).filter(u=>u!=="addonAfter"),u=>({name:u,fn:v(i=>[x(t.$slots,u,E(V(i||{})))])}))]),1040,["class","size","value"])}var X=S(Q,[["render",W]]);const Z=_(X);_($);export{Z as C,U as u};