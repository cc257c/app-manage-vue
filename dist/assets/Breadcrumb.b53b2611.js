import{as as R,a as P,b7 as E,aF as w,s as A,be as D,b as S,bD as x,aZ as N,a3 as T,o as b,h as C,n as z,x as B,j as I,k as V,z as M,y as L,q as O,c as j,bg as q,bz as F,bc as G,eT as H,aH as Z,au as g}from"./index.da8cb631.js";import{B as $}from"./index.13fe2a9f.js";const J=P({name:"LayoutBreadcrumb",components:{Icon:E,[$.name]:$},props:{theme:w.oneOf(["dark","light"])},setup(){const t=A([]),{currentRoute:u}=D(),{prefixCls:v}=S("layout-breadcrumb"),{getShowBreadCrumbIcon:k}=x(),m=N(),{t:y}=j();T(async()=>{if(u.value.name===q)return;const a=await F(),e=u.value.matched,r=e?.[e.length-1];let n=u.value.path;r&&r?.meta?.currentActiveMenu&&(n=r.meta.currentActiveMenu);const s=G(a,n),l=a.filter(_=>_.path===s[0]),o=i(l,s);if(!o||o.length===0)return;const p=d(o);u.value.meta?.currentActiveMenu&&p.push({...u.value,name:u.value.meta?.title||u.value.name}),t.value=p});function i(a,e){const r=[];return a.forEach(n=>{e.includes(n.path)&&r.push({...n,name:n.meta?.title||n.name}),n.children?.length&&r.push(...i(n.children,e))}),r}function d(a){return H(a,e=>{const{meta:r,name:n}=e;if(!r)return!!n;const{title:s,hideBreadcrumb:l,hideMenu:o}=r;return!(!s||l||o)}).filter(e=>!e.meta?.hideBreadcrumb)}function f(a,e,r){r?.preventDefault();const{children:n,redirect:s,meta:l}=a;if(n?.length&&!s){r?.stopPropagation();return}if(!l?.carryParam)if(s&&Z(s))m(s);else{let o="";e.length===1?o=e[0]:o=`${e.slice(1).pop()||""}`,o=/^\//.test(o)?o:`/${o}`,m(o)}}function c(a,e){return a.indexOf(e)!==a.length-1}function h(a){return a.icon||a.meta?.icon}return{routes:t,t:y,prefixCls:v,getIcon:h,getShowBreadCrumbIcon:k,handleClick:f,hasRedirect:c}}}),K={key:1};function Q(t,u,v,k,m,y){const i=g("Icon"),d=g("router-link"),f=g("a-breadcrumb");return b(),C("div",{class:O([t.prefixCls,`${t.prefixCls}--${t.theme}`])},[z(f,{routes:t.routes},{itemRender:B(({route:c,routes:h,paths:a})=>[t.getShowBreadCrumbIcon&&t.getIcon(c)?(b(),I(i,{key:0,icon:t.getIcon(c)},null,8,["icon"])):V("",!0),t.hasRedirect(h,c)?(b(),I(d,{key:2,to:"",onClick:e=>t.handleClick(c,a,e)},{default:B(()=>[L(M(t.t(c.name||c.meta.title)),1)]),_:2},1032,["onClick"])):(b(),C("span",K,M(t.t(c.name||c.meta.title)),1))]),_:1},8,["routes"])],2)}var X=R(J,[["render",Q]]);export{X as default};
