import{C as D,M as i,J as F}from"./index.5d9df0e8.js";import{a as x}from"./index.4fb91daf.js";import{as as R,a as B,s as c,au as n,o as b,j as S,x as o,n as a,i as y,eg as h,bT as j,y as r}from"./index.da8cb631.js";import{R as _}from"./index.b939f3ed.js";import{S as k}from"./index.0961799f.js";import"./useWindowSizeFn.c221d32f.js";import"./index.13fe2a9f.js";import"./index.2a671509.js";import"./useSize.3251a39b.js";import"./eagerComputed.d5d9fa51.js";import"./useContentViewHeight.f6c045c6.js";import"./ArrowLeftOutlined.da248543.js";import"./index.17402399.js";import"./transButton.af3d1515.js";import"./Checkbox.f0824c7f.js";import"./useFlexGapSupport.63e06d71.js";const f='{"name":"BeJson","url":"http://www.xxx.com","page":88,"isNonProfit":true,"address":{"street":"\u79D1\u6280\u56ED\u8DEF.","city":"\u6C5F\u82CF\u82CF\u5DDE","country":"\u4E2D\u56FD"},"links":[{"name":"Google","url":"http://www.xxx.com"},{"name":"Baidu","url":"http://www.xxx.com"},{"name":"SoSo","url":"http://www.xxx.com"}]}',P=`
      (() => {
        var htmlRoot = document.getElementById('htmlRoot');
        var theme = window.localStorage.getItem('__APP__DARK__MODE__');
        if (htmlRoot && theme) {
          htmlRoot.setAttribute('data-theme', theme);
          theme = htmlRoot = null;
        }
      })();
  `,J=`
     <!DOCTYPE html>
<html lang="en" id="htmlRoot">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="renderer" content="webkit" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0"
    />
    <title><%= title %></title>
    <link rel="icon" href="/favicon.ico" />
  </head>
  <body>
    <div id="app">
    </div>
  </body>
</html>
  `,M=B({components:{CodeEditor:D,PageWrapper:x,RadioButton:_.Button,RadioGroup:_.Group,ASpace:k},setup(){const e=c(i.JSON),t=c(f);function s(p){const u=p.target.value;if(u===i.JSON){t.value=f;return}if(u===i.HTML){t.value=J;return}if(u===i.JS){t.value=P;return}}function d(){y(e)==="application/json"?h.info({title:"\u7F16\u8F91\u5668\u5F53\u524D\u503C",content:j(F,{data:JSON.parse(t.value)})}):h.info({title:"\u7F16\u8F91\u5668\u5F53\u524D\u503C",content:t.value})}return{value:t,modeValue:e,handleModeChange:s,showData:d}}}),A=r("\u83B7\u53D6\u6570\u636E"),N=r(" json\u6570\u636E "),O=r(" html\u4EE3\u7801 "),V=r(" javascript\u4EE3\u7801 ");function G(e,t,s,d,p,u){const v=n("a-button"),l=n("RadioButton"),w=n("RadioGroup"),E=n("a-space"),C=n("CodeEditor"),g=n("PageWrapper");return b(),S(g,{title:"\u4EE3\u7801\u7F16\u8F91\u5668\u7EC4\u4EF6\u793A\u4F8B",contentFullHeight:"",fixedHeight:"",contentBackground:""},{extra:o(()=>[a(E,{size:"middle"},{default:o(()=>[a(v,{onClick:e.showData,type:"primary"},{default:o(()=>[A]),_:1},8,["onClick"]),a(w,{"button-style":"solid",value:e.modeValue,"onUpdate:value":t[0]||(t[0]=m=>e.modeValue=m),onChange:e.handleModeChange},{default:o(()=>[a(l,{value:"application/json"},{default:o(()=>[N]),_:1}),a(l,{value:"htmlmixed"},{default:o(()=>[O]),_:1}),a(l,{value:"javascript"},{default:o(()=>[V]),_:1})]),_:1},8,["value","onChange"])]),_:1})]),default:o(()=>[a(C,{value:e.value,"onUpdate:value":t[1]||(t[1]=m=>e.value=m),mode:e.modeValue},null,8,["value","mode"])]),_:1})}var ot=R(M,[["render",G]]);export{ot as default};
