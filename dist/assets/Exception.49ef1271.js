import{a as N,aX as e,s as O,aY as R,aZ as S,a_ as v,c as A,b as h,f as T,i as s,a$ as _,n as r,B as G}from"./index.da8cb631.js";import{R as k}from"./index.50a001aa.js";var P="/assets/no-data.f7e550cc.svg",C="/assets/net-error.61b7e6df.svg",I=N({name:"ErrorPage",props:{status:{type:Number,default:e.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(n){const a=O(new Map),{query:d}=R(),o=S(),c=v(),{t}=A(),{prefixCls:f}=h("app-exception-page"),m=T(()=>{const{status:l}=d,{status:u}=n;return Number(l)||u}),g=T(()=>s(a).get(s(m))),p=t("sys.exception.backLogin"),i=t("sys.exception.backHome");return s(a).set(e.PAGE_NOT_ACCESS,{title:"403",status:`${e.PAGE_NOT_ACCESS}`,subTitle:t("sys.exception.subTitle403"),btnText:n.full?p:i,handler:()=>n.full?o(_.BASE_LOGIN):o()}),s(a).set(e.PAGE_NOT_FOUND,{title:"404",status:`${e.PAGE_NOT_FOUND}`,subTitle:t("sys.exception.subTitle404"),btnText:n.full?p:i,handler:()=>n.full?o(_.BASE_LOGIN):o()}),s(a).set(e.ERROR,{title:"500",status:`${e.ERROR}`,subTitle:t("sys.exception.subTitle500"),btnText:i,handler:()=>o()}),s(a).set(e.PAGE_NOT_DATA,{title:t("sys.exception.noDataTitle"),subTitle:"",btnText:t("common.redo"),handler:()=>c(),icon:P}),s(a).set(e.NET_WORK_ERROR,{title:t("sys.exception.networkErrorTitle"),subTitle:t("sys.exception.networkErrorSubTitle"),btnText:t("common.redo"),handler:()=>c(),icon:C}),()=>{const{title:l,subTitle:u,btnText:b,icon:x,handler:E,status:y}=s(g)||{};return r(k,{class:f,status:y,title:n.title||l,"sub-title":n.subTitle||u},{extra:()=>b&&r(G,{type:"primary",onClick:E},{default:()=>b}),icon:()=>x?r("img",{src:x},null):null})}}});export{I as default};
