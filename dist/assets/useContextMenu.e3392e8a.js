import{a as M,s as g,f as E,aD as L,ah as j,c0 as w,i as h,n as l,b8 as b,F as D,cs as $,b7 as O,eW as N,eX as S,aq as z}from"./index.da8cb631.js";import{D as P}from"./index.5a91b512.js";function W(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!$(e)}const v="context-menu",A={width:{type:Number,default:156},customEvent:{type:Object,default:null},styles:{type:Object},showIcon:{type:Boolean,default:!0},axis:{type:Object,default(){return{x:0,y:0}}},items:{type:Array,default(){return[]}}},_=e=>{const{item:n}=e;return l("span",{style:"display: inline-block; width: 100%; ",class:"px-4",onClick:e.handler.bind(null,n)},[e.showIcon&&n.icon&&l(O,{class:"mr-2",icon:n.icon},null),l("span",null,[n.label])])};var F=M({name:"ContextMenu",props:A,setup(e){const n=g(null),m=g(!1),r=E(()=>{const{axis:t,items:o,styles:s,width:i}=e,{x:c,y:u}=t||{x:0,y:0},x=(o||[]).length*40,f=i,y=document.body,C=y.clientWidth<c+f?c-f:c,I=y.clientHeight<u+x?u-x:u;return{...s,position:"absolute",width:`${i}px`,left:`${C+1}px`,top:`${I+1}px`,zIndex:9999}});L(()=>{j(()=>m.value=!0)}),w(()=>{const t=h(n);t&&document.body.removeChild(t)});function p(t,o){const{handler:s,disabled:i}=t;i||(m.value=!1,o?.stopPropagation(),o?.preventDefault(),s?.())}function a(t){return t.filter(s=>!s.hidden).map(s=>{const{disabled:i,label:c,children:u,divider:x=!1}=s,f={item:s,handler:p,showIcon:e.showIcon};return!u||u.length===0?l(D,null,[l(b.Item,{disabled:i,class:`${v}__item`,key:c},{default:()=>[l(_,f,null)]}),x?l(P,{key:`d-${c}`},null):null]):h(m)?l(b.SubMenu,{key:c,disabled:i,popupClassName:`${v}__popup`},{title:()=>l(_,f,null),default:()=>a(u)}):null})}return()=>{let t;if(!h(m))return null;const{items:o}=e;return l("div",{class:v},[l(b,{inlineIndent:12,mode:"vertical",ref:n,style:h(r)},W(t=a(o))?t:{default:()=>[t]})])}}});const d={domList:[],resolve:()=>{}},H=function(e){const{event:n}=e||{};if(n&&n?.preventDefault(),!!N)return new Promise(m=>{const r=document.body,p=document.createElement("div"),a={};e.styles&&(a.styles=e.styles),e.items&&(a.items=e.items),e.event&&(a.customEvent=n,a.axis={x:n.clientX,y:n.clientY});const t=l(F,a);S(t,p);const o=function(){d.resolve("")};d.domList.push(p);const s=function(){d.domList.forEach(i=>{try{i&&r.removeChild(i)}catch{}}),r.removeEventListener("click",o),r.removeEventListener("scroll",o)};d.resolve=function(i){s(),m(i)},s(),r.appendChild(p),r.addEventListener("click",o),r.addEventListener("scroll",o)})},k=function(){d&&(d.resolve(""),d.domList=[])};function X(e=!0){return z()&&e&&w(()=>{k()}),[H,k]}export{X as u};
