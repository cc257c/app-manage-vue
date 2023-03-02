import{a as S,Y as N,c7 as _,n as c,X as k,af as A,cD as F,cC as U,aE as D,b8 as T,ao as z,J as V,M as H,N as w,H as J}from"./index.da8cb631.js";var K=globalThis&&globalThis.__rest||function(a,e){var o={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&e.indexOf(r)<0&&(o[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(a);t<r.length;t++)e.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(a,r[t])&&(o[r[t]]=a[r[t]]);return o},L=function(){return{prefixCls:String,href:String,separator:A.any,overlay:A.any,onClick:Function}},B=S({name:"ABreadcrumbItem",inheritAttrs:!1,__ANT_BREADCRUMB_ITEM:!0,props:L(),slots:["separator","overlay"],setup:function(e,o){var r=o.slots,t=o.attrs,b=N("breadcrumb",e),d=b.prefixCls,v=function(p,l){var n=_(r,e,"overlay");return n?c(U,{overlay:n,placement:"bottom"},{default:function(){return[c("span",{class:"".concat(l,"-overlay-link")},[p,c(F,null,null)])]}}):p};return function(){var y,p=(y=_(r,e,"separator"))!==null&&y!==void 0?y:"/",l=_(r,e),n=t.class,u=t.style,s=K(t,["class","style"]),i;return e.href!==void 0?i=c("a",k({class:"".concat(d.value,"-link"),onClick:e.onClick},s),[l]):i=c("span",k({class:"".concat(d.value,"-link"),onClick:e.onClick},s),[l]),i=v(i,d.value),l?c("li",{class:n,style:u},[i,p&&c("span",{class:"".concat(d.value,"-separator")},[p])]):null}}}),X=function(){return{prefixCls:String,routes:{type:Array},params:A.any,separator:A.any,itemRender:{type:Function}}};function Y(a,e){if(!a.breadcrumbName)return null;var o=Object.keys(e).join("|"),r=a.breadcrumbName.replace(new RegExp(":(".concat(o,")"),"g"),function(t,b){return e[b]||t});return r}function M(a){var e=a.route,o=a.params,r=a.routes,t=a.paths,b=r.indexOf(e)===r.length-1,d=Y(e,o);return b?c("span",null,[d]):c("a",{href:"#/".concat(t.join("/"))},[d])}var C=S({name:"ABreadcrumb",props:X(),slots:["separator","itemRender"],setup:function(e,o){var r=o.slots,t=N("breadcrumb",e),b=t.prefixCls,d=t.direction,v=function(n,u){return n=(n||"").replace(/^\//,""),Object.keys(u).forEach(function(s){n=n.replace(":".concat(s),u[s])}),n},y=function(n,u,s){var i=J(n),f=v(u||"",s);return f&&i.push(f),i},p=function(n){var u=n.routes,s=u===void 0?[]:u,i=n.params,f=i===void 0?{}:i,x=n.separator,g=n.itemRender,O=g===void 0?M:g,R=[];return s.map(function(m){var h=v(m.path,f);h&&R.push(h);var I=[].concat(R),E=null;return m.children&&m.children.length&&(E=c(T,null,{default:function(){return[m.children.map(function(P){return c(T.Item,{key:P.path||P.breadcrumbName},{default:function(){return[O({route:P,params:f,routes:s,paths:y(I,P.path,f)})]}})})]}})),c(B,{overlay:E,separator:x,key:h||m.breadcrumbName},{default:function(){return[O({route:m,params:f,routes:s,paths:I})]}})})};return function(){var l,n,u,s=e.routes,i=e.params,f=i===void 0?{}:i,x=D(_(r,e)),g=(n=_(r,e,"separator"))!==null&&n!==void 0?n:"/",O=e.itemRender||r.itemRender||M;s&&s.length>0?u=p({routes:s,params:f,separator:g,itemRender:O}):x.length&&(u=x.map(function(m,h){return z(V(m.type)==="object"&&(m.type.__ANT_BREADCRUMB_ITEM||m.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),H(m,{separator:g,key:h})}));var R=(l={},w(l,b.value,!0),w(l,"".concat(b.value,"-rtl"),d.value==="rtl"),l);return c("nav",{class:R},[c("ol",null,[u])])}}}),q=globalThis&&globalThis.__rest||function(a,e){var o={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&e.indexOf(r)<0&&(o[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(a);t<r.length;t++)e.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(a,r[t])&&(o[r[t]]=a[r[t]]);return o},G=function(){return{prefixCls:String}},j=S({name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:G(),setup:function(e,o){var r=o.slots,t=o.attrs,b=N("breadcrumb",e),d=b.prefixCls;return function(){var v;t.separator;var y=t.class,p=q(t,["separator","class"]),l=D((v=r.default)===null||v===void 0?void 0:v.call(r));return c("span",k({class:["".concat(d.value,"-separator"),y]},p),[l.length>0?l:"/"])}}});C.Item=B;C.Separator=j;C.install=function(a){return a.component(C.name,C),a.component(B.name,B),a.component(j.name,j),a};export{C as B};