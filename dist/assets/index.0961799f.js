import{aG as W,a as $,af as A,aa as G,Y as D,f as c,s as B,Z as E,V as L,W as R,N as x,_ as p,a9 as Y,n as d,F as Z}from"./index.da8cb631.js";import{u as k}from"./useFlexGapSupport.63e06d71.js";var q={small:8,middle:16,large:24},H=function(){return{prefixCls:String,size:{type:[String,Number,Array]},direction:A.oneOf(G("horizontal","vertical")).def("horizontal"),align:A.oneOf(G("start","end","center","baseline")),wrap:{type:Boolean,default:void 0}}};function J(i){return typeof i=="string"?q[i]:i||0}var K=$({name:"ASpace",props:H(),slots:["split"],setup:function(t,F){var s=F.slots,f=D("space",t),l=f.prefixCls,I=f.space,S=f.direction,_=k(),r=c(function(){var a,e,n;return(n=(a=t.size)!==null&&a!==void 0?a:(e=I.value)===null||e===void 0?void 0:e.size)!==null&&n!==void 0?n:"small"}),m=B(),o=B();E(r,function(){var a=(Array.isArray(r.value)?r.value:[r.value,r.value]).map(function(n){return J(n)}),e=L(a,2);m.value=e[0],o.value=e[1]},{immediate:!0});var z=c(function(){return t.align===void 0&&t.direction==="horizontal"?"center":t.align}),P=c(function(){var a;return R(l.value,"".concat(l.value,"-").concat(t.direction),(a={},x(a,"".concat(l.value,"-rtl"),S.value==="rtl"),x(a,"".concat(l.value,"-align-").concat(z.value),z.value),a))}),V=c(function(){return S.value==="rtl"?"marginLeft":"marginRight"}),j=c(function(){var a={};return _.value&&(a.columnGap="".concat(m.value,"px"),a.rowGap="".concat(o.value,"px")),p(p({},a),t.wrap&&{flexWrap:"wrap",marginBottom:"".concat(-o.value,"px")})});return function(){var a,e,n=t.wrap,h=t.direction,O=h===void 0?"horizontal":h,w=Y((a=s.default)===null||a===void 0?void 0:a.call(s)),C=w.length;if(C===0)return null;var u=(e=s.split)===null||e===void 0?void 0:e.call(s),b="".concat(l.value,"-item"),N=m.value,g=C-1;return d("div",{class:P.value,style:j.value},[w.map(function(T,y){var v={};return _.value||(O==="vertical"?y<g&&(v={marginBottom:"".concat(N/(u?2:1),"px")}):v=p(p({},y<g&&x({},V.value,"".concat(N/(u?2:1),"px"))),n&&{paddingBottom:"".concat(o.value,"px")})),d(Z,null,[d("div",{class:b,style:v},[T]),y<g&&u&&d("span",{class:"".concat(b,"-split"),style:v},[u])])})])}}}),U=W(K);export{U as S};