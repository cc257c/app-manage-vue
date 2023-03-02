import{n as l,N as _,T as oe,s as M,dC as ie,ez as le,eA as re,_ as b,F as ae,af as N,a as Z,Y as se,bq as de,aK as H,J as ee,a7 as ce,S as pe,bE as Q,f as ue,aL as W,aE as be,cl as fe,ao as ve}from"./index.da8cb631.js";function L(o){return o!=null}var me=function(e){var n=e.itemPrefixCls,t=e.component,r=e.span,i=e.labelStyle,c=e.contentStyle,m=e.bordered,s=e.label,d=e.content,a=e.colon,x=t;if(m){var p;return l(x,{class:[(p={},_(p,"".concat(n,"-item-label"),L(s)),_(p,"".concat(n,"-item-content"),L(d)),p)],colSpan:r},{default:function(){return[L(s)&&l("span",{style:i},[s]),L(d)&&l("span",{style:c},[d])]}})}return l(x,{class:["".concat(n,"-item")],colSpan:r},{default:function(){return[l("div",{class:"".concat(n,"-item-container")},[s&&l("span",{class:["".concat(n,"-item-label"),_({},"".concat(n,"-item-no-colon"),!a)],style:i},[s]),d&&l("span",{class:"".concat(n,"-item-content"),style:c},[d])])]}})},F=me,ye=function(e){var n=function(p,f,v){var P=f.colon,I=f.prefixCls,h=f.bordered,S=v.component,z=v.type,O=v.showLabel,D=v.showContent,g=v.labelStyle,j=v.contentStyle;return p.map(function(u,k){var w,$,y=u.props||{},T=y.prefixCls,A=T===void 0?I:T,U=y.span,q=U===void 0?1:U,J=y.labelStyle,K=y.contentStyle,V=y.label,Y=V===void 0?($=(w=u.children)===null||w===void 0?void 0:w.label)===null||$===void 0?void 0:$.call(w):V,G=ie(u),E=le(u),R=re(u),B=u.key;return typeof S=="string"?l(F,{key:"".concat(z,"-").concat(String(B)||k),class:E,style:R,labelStyle:b(b({},g.value),J),contentStyle:b(b({},j.value),K),span:q,colon:P,component:S,itemPrefixCls:A,bordered:h,label:O?Y:null,content:D?G:null},null):[l(F,{key:"label-".concat(String(B)||k),class:E,style:b(b(b({},g.value),R),J),span:1,colon:P,component:S[0],itemPrefixCls:A,bordered:h,label:Y},null),l(F,{key:"content-".concat(String(B)||k),class:E,style:b(b(b({},j.value),R),K),span:q*2-1,component:S[1],itemPrefixCls:A,bordered:h,content:G},null)]})},t=e.prefixCls,r=e.vertical,i=e.row,c=e.index,m=e.bordered,s=oe(ne,{labelStyle:M({}),contentStyle:M({})}),d=s.labelStyle,a=s.contentStyle;return r?l(ae,null,[l("tr",{key:"label-".concat(c),class:"".concat(t,"-row")},[n(i,e,{component:"th",type:"label",showLabel:!0,labelStyle:d,contentStyle:a})]),l("tr",{key:"content-".concat(c),class:"".concat(t,"-row")},[n(i,e,{component:"td",type:"content",showContent:!0,labelStyle:d,contentStyle:a})])]):l("tr",{key:c,class:"".concat(t,"-row")},[n(i,e,{component:m?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0,labelStyle:d,contentStyle:a})])},xe=ye;N.any;var he=function(){return{prefixCls:String,label:N.any,labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0},span:{type:Number,default:1}}},Se=Z({name:"ADescriptionsItem",props:he(),slots:["label"],setup:function(e,n){var t=n.slots;return function(){var r;return(r=t.default)===null||r===void 0?void 0:r.call(t)}}}),te={xxxl:3,xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function ge(o,e){if(typeof o=="number")return o;if(ee(o)==="object")for(var n=0;n<W.length;n++){var t=W[n];if(e[t]&&o[t]!==void 0)return o[t]||te[t]}return 3}function X(o,e,n){var t=o;return(e===void 0||e>n)&&(t=fe(o,{span:n}),ve(e===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),t}function we(o,e){var n=be(o),t=[],r=[],i=e;return n.forEach(function(c,m){var s,d=(s=c.props)===null||s===void 0?void 0:s.span,a=d||1;if(m===n.length-1){r.push(X(c,d,i)),t.push(r);return}a<i?(i-=a,r.push(c)):(r.push(X(c,a,i)),t.push(r),i=e,r=[])}),t}var Ce=function(){return{prefixCls:String,bordered:{type:Boolean,default:void 0},size:{type:String,default:"default"},title:N.any,extra:N.any,column:{type:[Number,Object],default:function(){return te}},layout:String,colon:{type:Boolean,default:void 0},labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0}}},ne=Symbol("descriptionsContext"),C=Z({name:"ADescriptions",props:Ce(),slots:["title","extra"],Item:Se,setup:function(e,n){var t=n.slots,r=se("descriptions",e),i=r.prefixCls,c=r.direction,m,s=M({});de(function(){m=H.subscribe(function(a){ee(e.column)==="object"&&(s.value=a)})}),ce(function(){H.unsubscribe(m)}),pe(ne,{labelStyle:Q(e,"labelStyle"),contentStyle:Q(e,"contentStyle")});var d=ue(function(){return ge(e.column,s.value)});return function(){var a,x,p,f,v=e.size,P=e.bordered,I=P===void 0?!1:P,h=e.layout,S=h===void 0?"horizontal":h,z=e.colon,O=z===void 0?!0:z,D=e.title,g=D===void 0?(x=t.title)===null||x===void 0?void 0:x.call(t):D,j=e.extra,u=j===void 0?(p=t.extra)===null||p===void 0?void 0:p.call(t):j,k=(f=t.default)===null||f===void 0?void 0:f.call(t),w=we(k,d.value);return l("div",{class:[i.value,(a={},_(a,"".concat(i.value,"-").concat(v),v!=="default"),_(a,"".concat(i.value,"-bordered"),!!I),_(a,"".concat(i.value,"-rtl"),c.value==="rtl"),a)]},[(g||u)&&l("div",{class:"".concat(i.value,"-header")},[g&&l("div",{class:"".concat(i.value,"-title")},[g]),u&&l("div",{class:"".concat(i.value,"-extra")},[u])]),l("div",{class:"".concat(i.value,"-view")},[l("table",null,[l("tbody",null,[w.map(function($,y){return l(xe,{key:y,index:y,colon:O,prefixCls:i.value,vertical:S==="vertical",bordered:I,row:$},null)})])])])])}}});C.install=function(o){return o.component(C.name,C),o.component(C.Item.name,C.Item),o};var Pe=C;export{Pe as D};
