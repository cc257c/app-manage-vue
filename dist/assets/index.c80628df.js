import{aG as $,aa as G,a as W,af as c,Y as X,s as m,c7 as x,W as Y,N as l,n as o,c8 as q,L as J,cl as K,ec as Q,w as R,v as U,X as F,ed as Z,ab as ee,er as ae,ad as te,ac as ne,es as oe,et as re,eu as le,ev as ie}from"./index.da8cb631.js";var ce={success:ee,info:ae,error:te,warning:ne},se={success:oe,info:re,error:le,warning:ie},de=G("success","info","warning","error"),fe=function(){return{type:c.oneOf(de),closable:{type:Boolean,default:void 0},closeText:c.any,message:c.any,description:c.any,afterClose:Function,showIcon:{type:Boolean,default:void 0},prefixCls:String,banner:{type:Boolean,default:void 0},icon:c.any,closeIcon:c.any,onClose:Function}},ue=W({name:"AAlert",inheritAttrs:!1,props:fe(),setup:function(a,u){var i=u.slots,P=u.emit,b=u.attrs,L=u.expose,w=X("alert",a),N=w.prefixCls,B=w.direction,s=m(!1),C=m(!1),I=m(),H=function(n){n.preventDefault();var r=I.value;r.style.height="".concat(r.offsetHeight,"px"),r.style.height="".concat(r.offsetHeight,"px"),s.value=!0,P("close",n)},k=function(){var n;s.value=!1,C.value=!0,(n=a.afterClose)===null||n===void 0||n.call(a)};L({animationEnd:k});var S=m({});return function(){var t,n,r=a.banner,z=a.closeIcon,A=z===void 0?(n=i.closeIcon)===null||n===void 0?void 0:n.call(i):z,h=a.closable,d=a.type,f=a.showIcon,y=x(i,a,"closeText"),p=x(i,a,"description"),T=x(i,a,"message"),g=x(i,a,"icon");f=r&&f===void 0?!0:f,d=r&&d===void 0?"warning":d||"info";var _=(p?se:ce)[d]||null;y&&(h=!0);var e=N.value,j=Y(e,(t={},l(t,"".concat(e,"-").concat(d),!0),l(t,"".concat(e,"-closing"),s.value),l(t,"".concat(e,"-with-description"),!!p),l(t,"".concat(e,"-no-icon"),!f),l(t,"".concat(e,"-banner"),!!r),l(t,"".concat(e,"-closable"),h),l(t,"".concat(e,"-rtl"),B.value==="rtl"),t)),V=h?o("button",{type:"button",onClick:H,class:"".concat(e,"-close-icon"),tabindex:0},[y?o("span",{class:"".concat(e,"-close-text")},[y]):A===void 0?o(q,null,null):A]):null,D=g&&(J(g)?K(g,{class:"".concat(e,"-icon")}):o("span",{class:"".concat(e,"-icon")},[g]))||o(_,{class:"".concat(e,"-icon")},null),M=Q("".concat(e,"-motion"),{appear:!1,css:!0,onAfterLeave:k,onBeforeLeave:function(v){v.style.maxHeight="".concat(v.offsetHeight,"px")},onLeave:function(v){v.style.maxHeight="0px"}});return C.value?null:o(Z,M,{default:function(){return[R(o("div",F(F({role:"alert"},b),{},{style:[b.style,S.value],class:[b.class,j],"data-show":!s.value,ref:I}),[f?D:null,o("div",{class:"".concat(e,"-content")},[T?o("div",{class:"".concat(e,"-message")},[T]):null,p?o("div",{class:"".concat(e,"-description")},[p]):null]),V]),[[U,!s.value]])]}})}}}),ge=$(ue);export{ge as A};
