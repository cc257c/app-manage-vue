import{B as g}from"./TableImg.e96a1b1c.js";import"./BasicForm.4eff3114.js";import{u as h}from"./useTable.5eea1741.js";import{getBasicColumns as _,getFormConfig as F}from"./tableData.0902c609.js";import{as as k,a as y,s as C,au as i,o as m,j as b,x as t,n as s,h as c,m as B,z as E,F as T,y as p}from"./index.da8cb631.js";import{A}from"./index.c80628df.js";import{d as S}from"./table.be9ea6ff.js";import"./index.b939f3ed.js";import"./Checkbox.f0824c7f.js";import"./index.6f5a4fde.js";import"./index.d148813f.js";import"./eagerComputed.d5d9fa51.js";import"./useForm.8ce8a1bf.js";import"./index.4fb91daf.js";import"./index.13fe2a9f.js";import"./index.2a671509.js";import"./useSize.3251a39b.js";import"./index.0961799f.js";import"./useFlexGapSupport.63e06d71.js";import"./useWindowSizeFn.c221d32f.js";import"./useContentViewHeight.f6c045c6.js";import"./ArrowLeftOutlined.da248543.js";import"./index.17402399.js";import"./transButton.af3d1515.js";import"./index.7035eacc.js";import"./index.01a084a1.js";import"./index.c918b06b.js";import"./uuid.2b29000c.js";import"./index.f175a2ab.js";import"./_baseIteratee.58bea659.js";import"./get.8113fc0b.js";import"./DeleteOutlined.4914d5b2.js";import"./index.3443a9a6.js";import"./useRefs.4b50a505.js";import"./Form.57dd9f37.js";import"./Col.c878cfca.js";import"./index.59b50bd4.js";import"./FullscreenOutlined.556a26d5.js";import"./index.5a91b512.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.5cc8f7d5.js";import"./index.e4b8d817.js";import"./fromPairs.84aabb58.js";import"./scrollTo.d80ece32.js";import"./index.e46a37bc.js";import"./index.1f145165.js";/* empty css              *//* empty css              */import"./index.90b5efc0.js";import"./download.8277b1ca.js";import"./base64Conver.08b9f4ec.js";import"./index.0e6e8503.js";import"./index.36948379.js";import"./uniqBy.65755c80.js";const D=y({components:{BasicTable:g,AAlert:A},setup(){const o=C([]),[e,{getForm:n}]=h({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:S,columns:_(),useSearchForm:!0,formConfig:F(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id"});function a(){n().getFieldsValue()}function u(r){o.value=r}return{registerTable:e,getFormValues:a,checkedKeys:o,onSelectChange:u}}}),w=p(" custom-slot "),K=p("\u6E05\u7A7A"),V={key:1},$=p("\u83B7\u53D6\u8868\u5355\u6570\u636E");function v(o,e,n,a,u,r){const l=i("a-button"),d=i("a-alert"),f=i("BasicTable");return m(),b(f,{onRegister:o.registerTable,rowSelection:{type:"checkbox",selectedRowKeys:o.checkedKeys,onChange:o.onSelectChange}},{"form-custom":t(()=>[w]),headerTop:t(()=>[s(d,{type:"info","show-icon":""},{message:t(()=>[o.checkedKeys.length>0?(m(),c(T,{key:0},[B("span",null,"\u5DF2\u9009\u4E2D"+E(o.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),s(l,{type:"link",onClick:e[0]||(e[0]=N=>o.checkedKeys=[]),size:"small"},{default:t(()=>[K]),_:1})],64)):(m(),c("span",V,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),toolbar:t(()=>[s(l,{type:"primary",onClick:o.getFormValues},{default:t(()=>[$]),_:1},8,["onClick"])]),_:1},8,["onRegister","rowSelection"])}var Ro=k(D,[["render",v]]);export{Ro as default};
