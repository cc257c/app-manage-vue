import{T as v,S as m,a as G,aC as _,a8 as B,s as E,Y as K,f as N,_ as U,c2 as V,W as A,N as u,n as b,X as x,af as W}from"./index.da8cb631.js";import{V as X}from"./Checkbox.f0824c7f.js";var k=Symbol("radioGroupContextKey"),L=function(t){m(k,t)},Y=function(){return v(k,void 0)},y=Symbol("radioOptionTypeContextKey"),M=function(t){m(y,t)},$=function(){return v(y,void 0)},q=globalThis&&globalThis.__rest||function(r,t){var d={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&t.indexOf(o)<0&&(d[o]=r[o]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(r);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(r,o[n])&&(d[o[n]]=r[o[n]]);return d},D=function(){return{prefixCls:String,checked:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},isGroup:{type:Boolean,default:void 0},value:W.any,name:String,id:String,autofocus:{type:Boolean,default:void 0},onChange:Function,onFocus:Function,onBlur:Function,onClick:Function,"onUpdate:checked":Function,"onUpdate:value":Function}},Q=G({name:"ARadio",props:D(),setup:function(t,d){var o=d.emit,n=d.expose,f=d.slots,h=_(),C=B.useInject(),I=$(),p=Y(),s=E(),w=K("radio",t),g=w.prefixCls,z=w.direction,l=N(function(){return(p?.optionType.value||I)==="button"?"".concat(g.value,"-button"):g.value}),O=function(){s.value.focus()},R=function(){s.value.blur()};n({focus:O,blur:R});var j=function(e){var c=e.target.checked;o("update:checked",c),o("update:value",c),o("change",e),h.onFieldChange()},P=function(e){o("change",e),p&&p.onChange&&p.onChange(e)};return function(){var a,e=p;t.prefixCls;var c=t.id,T=c===void 0?h.id.value:c,F=q(t,["prefixCls","id"]),i=U({prefixCls:l.value,id:T},V(F,["onUpdate:checked","onUpdate:value"]));e?(i.name=e.name.value,i.onChange=P,i.checked=t.value===e.value.value,i.disabled=t.disabled||e.disabled.value):i.onChange=j;var S=A((a={},u(a,"".concat(l.value,"-wrapper"),!0),u(a,"".concat(l.value,"-wrapper-checked"),i.checked),u(a,"".concat(l.value,"-wrapper-disabled"),i.disabled),u(a,"".concat(l.value,"-wrapper-rtl"),z.value==="rtl"),u(a,"".concat(l.value,"-wrapper-in-form-item"),C.isFormItemInput),a));return b("label",{class:S},[b(X,x(x({},i),{},{type:"radio",ref:s}),null),f.default&&b("span",null,[f.default()])])}}});export{Q as R,M as a,D as r,L as u};
