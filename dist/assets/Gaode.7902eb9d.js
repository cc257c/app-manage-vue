import{u as s}from"./useScript.7eaa56c5.js";import{as as r,a as i,s as p,aD as c,o as f,h as d,bn as u,ah as l,i as h}from"./index.da8cb631.js";const m="https://webapi.amap.com/maps?v=2.0&key=d7bb98e7185300250dd5f918c12f484b",w=i({name:"AMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=p(null),{toPromise:a}=s({src:m});async function n(){await a(),await l();const t=h(e);if(!t)return;const o=window.AMap;new o.Map(t,{zoom:11,center:[116.397428,39.90923],viewMode:"3D"})}return c(()=>{n()}),{wrapRef:e}}});function M(e,a,n,t,o,_){return f(),d("div",{ref:"wrapRef",style:u({height:e.height,width:e.width})},null,4)}var g=r(w,[["render",M]]);export{g as default};