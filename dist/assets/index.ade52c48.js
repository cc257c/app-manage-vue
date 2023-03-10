import{M as E,a as F}from"./index.2bd0127c.js";import{a as C}from"./index.4fb91daf.js";import{as as k,a as w,s,au as t,o as g,j as A,x as r,m as p,n as a,i as B,y as d}from"./index.da8cb631.js";import{C as D}from"./index.2a89bfae.js";import"./index.44257749.js";/* empty css              */import"./index.59b50bd4.js";import"./useWindowSizeFn.c221d32f.js";import"./FullscreenOutlined.556a26d5.js";import"./index.13fe2a9f.js";import"./index.2a671509.js";import"./useSize.3251a39b.js";import"./eagerComputed.d5d9fa51.js";import"./index.0961799f.js";import"./useFlexGapSupport.63e06d71.js";import"./useContentViewHeight.f6c045c6.js";import"./ArrowLeftOutlined.da248543.js";import"./index.17402399.js";import"./transButton.af3d1515.js";import"./index.44d3f356.js";import"./index.36948379.js";import"./Col.c878cfca.js";import"./useRefs.4b50a505.js";import"./PlusOutlined.8f7b48bc.js";const M=w({components:{MarkDown:E,PageWrapper:C,MarkdownViewer:F,ACard:D},setup(){const e=s(null),u=s(`
# \u6807\u9898h1

##### \u6807\u9898h5

**\u52A0\u7C97**
*\u659C\u4F53*
~~\u5220\u9664\u7EBF~~
[\u94FE\u63A5](https://github.com/vbenjs/vue-vben-admin)
\u2193\u5206\u5272\u7EBF\u2193

---


* \u65E0\u5E8F\u5217\u88681
  * \u65E0\u5E8F\u5217\u88681.1

1. \u6709\u5E8F\u5217\u88681
2. \u6709\u5E8F\u5217\u88682

* [ ] \u4EFB\u52A1\u5217\u88681
* [x] \u4EFB\u52A1\u5217\u88682

> \u5F15\u7528\u793A\u4F8B

\`\`\`js
// \u4EE3\u7801\u5757:
(() => {
  var htmlRoot = document.getElementById('htmlRoot');
  var theme = window.localStorage.getItem('__APP__DARK__MODE__');
  if (htmlRoot && theme) {
    htmlRoot.setAttribute('data-theme', theme);
    theme = htmlRoot = null;
  }
})();
\`\`\`

| \u8868\u683C | \u793A\u4F8B | \u{1F389}\uFE0F |
| --- | --- | --- |
| 1 | 2 | 3 |
| 4 | 5 | 6 |
`);function m(){const o=B(e);if(!o)return;o.getVditor().setTheme("dark","dark","dracula")}function i(o){u.value=o}function l(){u.value=""}return{value:u,toggleTheme:m,markDownRef:e,handleChange:i,clearValue:l}}}),V=d(" \u9ED1\u6697\u4E3B\u9898 "),R=d(" \u6E05\u7A7A\u5185\u5BB9 "),b={class:"mt-2"};function y(e,u,m,i,l,o){const n=t("a-button"),c=t("MarkDown"),_=t("MarkdownViewer"),h=t("a-card"),f=t("PageWrapper");return g(),A(f,{title:"MarkDown\u7EC4\u4EF6\u793A\u4F8B"},{default:r(()=>[p("div",null,[a(n,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:r(()=>[V]),_:1},8,["onClick"]),a(n,{onClick:e.clearValue,class:"mb-2",type:"default"},{default:r(()=>[R]),_:1},8,["onClick"]),a(c,{value:e.value,"onUpdate:value":u[0]||(u[0]=v=>e.value=v),onChange:e.handleChange,ref:"markDownRef",placeholder:"\u8FD9\u662F\u5360\u4F4D\u6587\u672C"},null,8,["value","onChange"])]),p("div",b,[a(h,{title:"Markdown Viewer \u7EC4\u4EF6\u6F14\u793A"},{default:r(()=>[a(_,{value:e.value},null,8,["value"])]),_:1})])]),_:1})}var oe=k(M,[["render",y]]);export{oe as default};
