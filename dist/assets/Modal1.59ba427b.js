import{B as _,a as h}from"./index.59b50bd4.js";import{as as f,a as v,s as p,Z as M,au as m,o as t,j as B,x as i,n as y,h as o,k as g,F as C,ax as F,z as k,av as D,y as b}from"./index.da8cb631.js";import"./useWindowSizeFn.c221d32f.js";import"./FullscreenOutlined.556a26d5.js";const A=v({components:{BasicModal:_},setup(){const e=p(!0),a=p(10),[u,{setModalProps:s,redoModalHeight:l}]=h();M(()=>a.value,()=>{l()});function d(r){r&&(e.value=!0,s({loading:!0,confirmLoading:!0}),setTimeout(()=>{a.value=Math.round(Math.random()*30+5),e.value=!1,s({loading:!1,confirmLoading:!1})},3e3))}function n(){a.value=Math.round(Math.random()*20+10)}return{register:u,loading:e,handleShow:d,lines:a,setLines:n}}}),L=b("\u70B9\u6211\u66F4\u65B0\u5185\u5BB9"),V={key:0,class:"empty-tips"},$={key:1};function w(e,a,u,s,l,d){const n=m("a-button"),r=m("BasicModal");return t(),B(r,D(e.$attrs,{destroyOnClose:"",onRegister:e.register,title:"Modal Title",helpMessage:["\u63D0\u793A1","\u63D0\u793A2"],onVisibleChange:e.handleShow}),{insertFooter:i(()=>[y(n,{type:"primary",danger:"",onClick:e.setLines,disabled:e.loading},{default:i(()=>[L]),_:1},8,["onClick","disabled"])]),default:i(()=>[e.loading?(t(),o("div",V,"\u52A0\u8F7D\u4E2D\uFF0C\u7A0D\u7B493\u79D2\u2026\u2026")):g("",!0),e.loading?g("",!0):(t(),o("ul",$,[(t(!0),o(C,null,F(e.lines,c=>(t(),o("li",{key:c},"\u52A0\u8F7D\u5B8C\u6210"+k(c)+"\uFF01",1))),128))]))]),_:1},16,["onRegister","onVisibleChange"])}var E=f(A,[["render",w],["__scopeId","data-v-47fa5808"]]);export{E as default};
