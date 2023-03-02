import{B as z}from"./TableImg.e96a1b1c.js";import"./BasicForm.4eff3114.js";import{u as H}from"./useTable.5eea1741.js";import{u as I}from"./index.658b646d.js";import{c as M,D as U}from"./DataDrawer.8e847bfc.js";import{a as j,Z as L,s as h,au as b,o as s,h as p,n as a,x as t,j as Z,F as x,ax as q,m as v,z as l,i as r,y as u,bp as G,k,ee as w}from"./index.da8cb631.js";import{f as J,e as K,g as O,n as Q}from"./app.42c2e5e1.js";import"./index.b939f3ed.js";import"./Checkbox.f0824c7f.js";import"./index.6f5a4fde.js";import"./index.d148813f.js";import"./eagerComputed.d5d9fa51.js";import"./useForm.8ce8a1bf.js";import"./index.4fb91daf.js";import"./index.13fe2a9f.js";import"./index.2a671509.js";import"./useSize.3251a39b.js";import"./index.0961799f.js";import"./useFlexGapSupport.63e06d71.js";import"./useWindowSizeFn.c221d32f.js";import"./useContentViewHeight.f6c045c6.js";import"./ArrowLeftOutlined.da248543.js";import"./index.17402399.js";import"./transButton.af3d1515.js";import"./index.7035eacc.js";import"./index.01a084a1.js";import"./index.c918b06b.js";import"./uuid.2b29000c.js";import"./index.f175a2ab.js";import"./_baseIteratee.58bea659.js";import"./get.8113fc0b.js";import"./DeleteOutlined.4914d5b2.js";import"./index.3443a9a6.js";import"./useRefs.4b50a505.js";import"./Form.57dd9f37.js";import"./Col.c878cfca.js";import"./index.59b50bd4.js";import"./FullscreenOutlined.556a26d5.js";import"./index.5a91b512.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.5cc8f7d5.js";import"./index.e4b8d817.js";import"./fromPairs.84aabb58.js";import"./scrollTo.d80ece32.js";import"./index.e46a37bc.js";import"./index.1f145165.js";/* empty css              *//* empty css              */import"./index.90b5efc0.js";import"./index.c80628df.js";import"./download.8277b1ca.js";import"./base64Conver.08b9f4ec.js";import"./index.0e6e8503.js";import"./index.36948379.js";import"./uniqBy.65755c80.js";import"./index.9430cdfe.js";import"./config.f9178ad3.js";import"./domain.7d8a334c.js";const W={style:{margin:"16px"}},X=u("\u65B0\u589E"),Y=u("\u2003"),tt={key:1},et=["onMouseenter"],ot=u("\u505C\u7528"),at=u("\u8BBE\u4E3A\u9690\u79C1\u534F\u8BAE"),pe=j({__name:"index",props:{app_id:{type:Number},domain:{type:Array,default:[]}},emits:["success"],setup(D,{emit:c}){const d=D;L(d,()=>{A(d.domain)});const e=h(),f=h([]),[B,{openDrawer:E}]=I(),[F,{setTableData:A}]=H({title:"\u57DF\u540D\u5217\u8868",columns:M,striped:!1,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,pagination:!1,tableSetting:{redo:!1},actionColumn:{width:250,title:"\u64CD\u4F5C",dataIndex:"action"}}),N=()=>{E(!0,{app_id:d.app_id})},y=()=>{e.value=""},T=async i=>{await K({table:"app_domain",id:i.id,note:e.value}),c("success"),e.value=""},R=async i=>{await O({id:i.id,note:e.value,table:"app_domain"}),c("success"),e.value=""},P=()=>{c("success")},S=async i=>{let n=await Q({id:i.id});f.value=n.items};return(i,n)=>{const _=b("a-button"),C=b("a-textarea");return s(),p("div",W,[a(r(z),{onRegister:r(F)},{toolbar:t(()=>[a(_,{type:"primary",onClick:N},{default:t(()=>[X]),_:1})]),bodyCell:t(({column:g,record:m,text:V})=>[g.key==="note"?(s(),Z(r(G),{key:0,trigger:"hover",placement:"left"},{content:t(()=>[f.value.length!=0?(s(!0),p(x,{key:0},q(f.value,(o,$)=>(s(),p("p",{key:$},[v("span",null,"\u65F6\u95F4:"+l(r(J)(o.created)),1),Y,v("span",null,"\u662F\u5426\u4E3A\u9690\u79C1\u534F\u8BAE:"+l(m.is_privacy==1?"\u662F":"\u5426"),1),u(" \u2003"+l(o.note),1)]))),128)):(s(),p("p",tt,"\u6682\u65E0\u6570\u636E"))]),default:t(()=>[v("span",{onMouseenter:o=>S(m)},l(V),41,et)]),_:2},1024)):k("",!0),g.key==="action"?(s(),p(x,{key:1},[a(r(w),{onConfirm:o=>T(m),onCancel:y,placement:"left"},{title:t(()=>[a(C,{value:e.value,"onUpdate:value":n[0]||(n[0]=o=>e.value=o),placeholder:"\u5907\u6CE8"},null,8,["value"])]),default:t(()=>[a(_,{color:"error"},{default:t(()=>[ot]),_:1})]),_:2},1032,["onConfirm"]),a(r(w),{onConfirm:o=>R(m),onCancel:y,placement:"left"},{title:t(()=>[a(C,{value:e.value,"onUpdate:value":n[1]||(n[1]=o=>e.value=o),placeholder:"\u5907\u6CE8"},null,8,["value"])]),default:t(()=>[a(_,{color:"success",style:{"margin-left":"10px"}},{default:t(()=>[at]),_:1})]),_:2},1032,["onConfirm"])],64)):k("",!0)]),_:1},8,["onRegister"]),a(U,{onRegister:r(B),onSuccessAdd:P},null,8,["onRegister"])])}}});export{pe as default};