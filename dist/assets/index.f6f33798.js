import{a as X,Y as Z,n as i,af as I,T as ut,s as H,aE as lt,cl as vt,X as D,W as mt,N as C,eY as gt,eC as ft,am as pt,S as xt,bE as at,f as z,J as et,Z as ht,_ as N,H as it,cG as yt,aL as nt,cH as bt,b2 as _t}from"./index.da8cb631.js";import{C as St,R as Ct}from"./Col.c878cfca.js";import{e as It}from"./eagerComputed.d5d9fa51.js";var wt=function(){return{avatar:I.any,description:I.any,prefixCls:String,title:I.any}},zt=X({name:"AListItemMeta",props:wt(),displayName:"AListItemMeta",__ANT_LIST_ITEM_META:!0,slots:["avatar","description","title"],setup:function(t,x){var a=x.slots,d=Z("list",t),m=d.prefixCls;return function(){var w,h,n,L,j,c,g="".concat(m.value,"-item-meta"),l=(w=t.title)!==null&&w!==void 0?w:(h=a.title)===null||h===void 0?void 0:h.call(a),s=(n=t.description)!==null&&n!==void 0?n:(L=a.description)===null||L===void 0?void 0:L.call(a),u=(j=t.avatar)!==null&&j!==void 0?j:(c=a.avatar)===null||c===void 0?void 0:c.call(a),y=i("div",{class:"".concat(m.value,"-item-meta-content")},[l&&i("h4",{class:"".concat(m.value,"-item-meta-title")},[l]),s&&i("div",{class:"".concat(m.value,"-item-meta-description")},[s])]);return i("div",{class:g},[u&&i("div",{class:"".concat(m.value,"-item-meta-avatar")},[u]),(l||s)&&y])}}}),rt=Symbol("ListContextKey"),Pt=globalThis&&globalThis.__rest||function(o,t){var x={};for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&t.indexOf(a)<0&&(x[a]=o[a]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,a=Object.getOwnPropertySymbols(o);d<a.length;d++)t.indexOf(a[d])<0&&Object.prototype.propertyIsEnumerable.call(o,a[d])&&(x[a[d]]=o[a[d]]);return x},Lt=function(){return{prefixCls:String,extra:I.any,actions:I.array,grid:Object,colStyle:{type:Object,default:void 0}}},jt=X({name:"AListItem",inheritAttrs:!1,Meta:zt,props:Lt(),slots:["actions","extra"],setup:function(t,x){var a=x.slots,d=x.attrs,m=ut(rt,{grid:H(),itemLayout:H()}),w=m.itemLayout,h=m.grid,n=Z("list",t),L=n.prefixCls,j=function(){var l,s=((l=a.default)===null||l===void 0?void 0:l.call(a))||[],u;return s.forEach(function(y){gt(y)&&!ft(y)&&(u=!0)}),u&&s.length>1},c=function(){var l,s,u=(l=t.extra)!==null&&l!==void 0?l:(s=a.extra)===null||s===void 0?void 0:s.call(a);return w.value==="vertical"?!!u:!j()};return function(){var g,l,s,u,y,V=d.class,W=Pt(d,["class"]),f=L.value,M=(g=t.extra)!==null&&g!==void 0?g:(l=a.extra)===null||l===void 0?void 0:l.call(a),A=(s=a.default)===null||s===void 0?void 0:s.call(a),p=(u=t.actions)!==null&&u!==void 0?u:lt((y=a.actions)===null||y===void 0?void 0:y.call(a));p=p&&!Array.isArray(p)?[p]:p;var b=p&&p.length>0&&i("ul",{class:"".concat(f,"-item-action"),key:"actions"},[p.map(function(k,F){return i("li",{key:"".concat(f,"-item-action-").concat(F)},[k,F!==p.length-1&&i("em",{class:"".concat(f,"-item-action-split")},null)])})]),K=h.value?"div":"li",B=i(K,D(D({},W),{},{class:mt("".concat(f,"-item"),C({},"".concat(f,"-item-no-flex"),!c()),V)}),{default:function(){return[w.value==="vertical"&&M?[i("div",{class:"".concat(f,"-item-main"),key:"content"},[A,b]),i("div",{class:"".concat(f,"-item-extra"),key:"extra"},[M])]:[A,b,vt(M,{key:"extra"})]]}});return h.value?i(St,{flex:1,style:t.colStyle},{default:function(){return[B]}}):B}}}),Mt=function(){return{bordered:{type:Boolean,default:void 0},dataSource:I.array,extra:I.any,grid:{type:Object,default:void 0},itemLayout:String,loading:{type:[Boolean,Object],default:void 0},loadMore:I.any,pagination:{type:[Boolean,Object],default:void 0},prefixCls:String,rowKey:[String,Number,Function],renderItem:Function,size:String,split:{type:Boolean,default:void 0},header:I.any,footer:I.any,locale:{type:Object}}},P=X({name:"AList",Item:jt,props:pt(Mt(),{dataSource:[],bordered:!1,split:!0,loading:!1,pagination:!1}),slots:["extra","loadMore","renderItem","header","footer"],setup:function(t,x){var a=x.slots,d,m;xt(rt,{grid:at(t,"grid"),itemLayout:at(t,"itemLayout")});var w={current:1,total:0},h=Z("list",t),n=h.prefixCls,L=h.direction,j=h.renderEmpty,c=z(function(){return t.pagination&&et(t.pagination)==="object"?t.pagination:{}}),g=H((d=c.value.defaultCurrent)!==null&&d!==void 0?d:1),l=H((m=c.value.defaultPageSize)!==null&&m!==void 0?m:10);ht(c,function(){"current"in c.value&&(g.value=c.value.current),"pageSize"in c.value&&(l.value=c.value.pageSize)});var s=[],u=function(r){return function(v,_){g.value=v,l.value=_,c.value[r]&&c.value[r](v,_)}},y=u("onChange"),V=u("onShowSizeChange"),W=function(r){var v;return i("div",{class:"".concat(n.value,"-empty-text")},[((v=t.locale)===null||v===void 0?void 0:v.emptyText)||r("List")])},f=z(function(){return typeof t.loading=="boolean"?{spinning:t.loading}:t.loading}),M=z(function(){return f.value&&f.value.spinning}),A=z(function(){var e="";switch(t.size){case"large":e="lg";break;case"small":e="sm";break}return e}),p=z(function(){var e;return e={},C(e,"".concat(n.value),!0),C(e,"".concat(n.value,"-vertical"),t.itemLayout==="vertical"),C(e,"".concat(n.value,"-").concat(A.value),A.value),C(e,"".concat(n.value,"-split"),t.split),C(e,"".concat(n.value,"-bordered"),t.bordered),C(e,"".concat(n.value,"-loading"),M.value),C(e,"".concat(n.value,"-grid"),!!t.grid),C(e,"".concat(n.value,"-rtl"),L.value==="rtl"),e}),b=z(function(){var e=N(N(N({},w),{total:t.dataSource.length,current:g.value,pageSize:l.value}),t.pagination||{}),r=Math.ceil(e.total/e.pageSize);return e.current>r&&(e.current=r),e}),K=z(function(){var e=it(t.dataSource);return t.pagination&&t.dataSource.length>(b.value.current-1)*b.value.pageSize&&(e=it(t.dataSource).splice((b.value.current-1)*b.value.pageSize,b.value.pageSize)),e}),B=yt(),k=It(function(){for(var e=0;e<nt.length;e+=1){var r=nt[e];if(B.value[r])return r}}),F=z(function(){if(!!t.grid){var e=k.value&&t.grid[k.value]?t.grid[k.value]:t.grid.column;if(e)return{width:"".concat(100/e,"%"),maxWidth:"".concat(100/e,"%")}}}),ot=function(r,v){var _,O=(_=t.renderItem)!==null&&_!==void 0?_:a.renderItem;if(!O)return null;var S,E=et(t.rowKey);return E==="function"?S=t.rowKey(r):E==="string"||E==="number"?S=r[t.rowKey]:S=r.key,S||(S="list-item-".concat(v)),s[v]=S,O({item:r,index:v})};return function(){var e,r,v,_,O,S,E,$=(e=t.loadMore)!==null&&e!==void 0?e:(r=a.loadMore)===null||r===void 0?void 0:r.call(a),Y=(v=t.footer)!==null&&v!==void 0?v:(_=a.footer)===null||_===void 0?void 0:_.call(a),q=(O=t.header)!==null&&O!==void 0?O:(S=a.header)===null||S===void 0?void 0:S.call(a),Q=lt((E=a.default)===null||E===void 0?void 0:E.call(a)),st=!!($||t.pagination||Y),dt=N(N({},p.value),C({},"".concat(n.value,"-something-after-last-item"),st)),U=t.pagination?i("div",{class:"".concat(n.value,"-pagination")},[i(bt,D(D({},b.value),{},{onChange:y,onShowSizeChange:V}),null)]):null,G=M.value&&i("div",{style:{minHeight:"53px"}},null);if(K.value.length>0){s.length=0;var tt=K.value.map(function(T,J){return ot(T,J)}),ct=tt.map(function(T,J){return i("div",{key:s[J],style:F.value},[T])});G=t.grid?i(Ct,{gutter:t.grid.gutter},{default:function(){return[ct]}}):i("ul",{class:"".concat(n.value,"-items")},[tt])}else!Q.length&&!M.value&&(G=W(j.value));var R=b.value.position||"bottom";return i("div",{class:dt},[(R==="top"||R==="both")&&U,q&&i("div",{class:"".concat(n.value,"-header")},[q]),i(_t,f.value,{default:function(){return[G,Q]}}),Y&&i("div",{class:"".concat(n.value,"-footer")},[Y]),$||(R==="bottom"||R==="both")&&U])}}});P.install=function(o){return o.component(P.name,P),o.component(P.Item.name,P.Item),o.component(P.Item.Meta.name,P.Item.Meta),o};var At=P;export{At as L};
