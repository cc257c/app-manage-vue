import{a as E,am as I,s as h,Z as M,aD as R,ah as X,_ as u,W as Z,N as m,n as b,X as z,af as G}from"./index.da8cb631.js";var H=globalThis&&globalThis.__rest||function(o,e){var r={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&e.indexOf(n)<0&&(r[n]=o[n]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(o);t<n.length;t++)e.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(o,n[t])&&(r[n[t]]=o[n[t]]);return r},J={prefixCls:String,name:String,id:String,type:String,defaultChecked:{type:[Boolean,Number],default:void 0},checked:{type:[Boolean,Number],default:void 0},disabled:Boolean,tabindex:{type:[Number,String]},readonly:Boolean,autofocus:Boolean,value:G.any,required:Boolean},Q=E({name:"Checkbox",inheritAttrs:!1,props:I(J,{prefixCls:"rc-checkbox",type:"checkbox",defaultChecked:!1}),emits:["click","change"],setup:function(e,r){var n=r.attrs,t=r.emit,x=r.expose,i=h(e.checked===void 0?e.defaultChecked:e.checked),d=h();M(function(){return e.checked},function(){i.value=e.checked}),R(function(){X(function(){})}),x({focus:function(){var a;(a=d.value)===null||a===void 0||a.focus()},blur:function(){var a;(a=d.value)===null||a===void 0||a.blur()}});var s=h(),p=function(a){if(!e.disabled){e.checked===void 0&&(i.value=a.target.checked),a.shiftKey=s.value;var f={target:u(u({},e),{checked:a.target.checked}),stopPropagation:function(){a.stopPropagation()},preventDefault:function(){a.preventDefault()},nativeEvent:a};e.checked!==void 0&&(d.value.checked=!!e.checked),t("change",f),s.value=!1}},C=function(a){t("click",a),s.value=a.shiftKey};return function(){var c,a=e.prefixCls,f=e.name,v=e.id,K=e.type,y=e.disabled,P=e.readonly,O=e.tabindex,S=e.autofocus,B=e.value,_=e.required,N=H(e,["prefixCls","name","id","type","disabled","readonly","tabindex","autofocus","value","required"]),j=n.class,w=n.onFocus,q=n.onBlur,D=n.onKeydown,T=n.onKeypress,A=n.onKeyup,k=u(u({},N),n),F=Object.keys(k).reduce(function(g,l){return(l.startsWith("data-")||l.startsWith("aria-")||l==="role")&&(g[l]=k[l]),g},{}),V=Z(a,j,(c={},m(c,"".concat(a,"-checked"),i.value),m(c,"".concat(a,"-disabled"),y),c)),W=u(u({name:f,id:v,type:K,readonly:P,disabled:y,tabindex:O,class:"".concat(a,"-input"),checked:!!i.value,autofocus:S,value:B},F),{onChange:p,onClick:C,onFocus:w,onBlur:q,onKeydown:D,onKeypress:T,onKeyup:A,required:_});return b("span",{class:V},[b("input",z({ref:d},W),null),b("span",{class:"".concat(a,"-inner")},null)])}}});export{Q as V};