import{as as b,a as k,bx as h,b as v,bN as R,r as O,bH as x,o as M,h as T,n as o,x as c,y as i,z as u,q as A,c as B,fu as N,i as m,b_ as C,fI as $,fJ as D,au as d,D as F}from"./index.da8cb631.js";import{C as I}from"./CopyOutlined.0b240f8c.js";import{R as P}from"./RedoOutlined.5cc8f7d5.js";const j=k({name:"SettingFooter",components:{CopyOutlined:I,RedoOutlined:P},setup(){const e=h(),{prefixCls:p}=v("setting-footer"),{t:s}=B(),{createSuccessModal:f,createMessage:r}=F(),g=R(),l=O(),t=x();function a(){const{isSuccessRef:n}=N(JSON.stringify(m(t.getProjectConfig),null,2));m(n)&&f({title:s("layout.setting.operatingTitle"),content:s("layout.setting.operatingContent")})}function y(){try{t.setProjectConfig(C);const{colorWeak:n,grayMode:_}=C;$(n),D(_),r.success(s("layout.setting.resetSuccess"))}catch(n){r.error(n)}}function S(){localStorage.clear(),t.resetAllState(),e.resetState(),g.resetState(),l.resetState(),location.reload()}return{prefixCls:p,t:s,handleCopy:a,handleResetSetting:y,handleClearAndRedo:S}}});function w(e,p,s,f,r,g){const l=d("CopyOutlined"),t=d("a-button"),a=d("RedoOutlined");return M(),T("div",{class:A(e.prefixCls)},[o(t,{type:"primary",block:"",onClick:e.handleCopy},{default:c(()=>[o(l,{class:"mr-2"}),i(" "+u(e.t("layout.setting.copyBtn")),1)]),_:1},8,["onClick"]),o(t,{color:"warning",block:"",onClick:e.handleResetSetting,class:"my-3"},{default:c(()=>[o(a,{class:"mr-2"}),i(" "+u(e.t("common.resetText")),1)]),_:1},8,["onClick"]),o(t,{color:"error",block:"",onClick:e.handleClearAndRedo},{default:c(()=>[o(a,{class:"mr-2"}),i(" "+u(e.t("layout.setting.clearBtn")),1)]),_:1},8,["onClick"])],2)}var W=b(j,[["render",w],["__scopeId","data-v-2d4de409"]]);export{W as default};
