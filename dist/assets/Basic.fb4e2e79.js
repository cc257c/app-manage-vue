import{B}from"./TableImg.e96a1b1c.js";import"./BasicForm.4eff3114.js";import{getBasicColumns as h,getBasicData as b}from"./tableData.0902c609.js";import{as as v,a as A,s as e,au as c,o as E,h as k,n as i,x as r,y as u,z as l}from"./index.da8cb631.js";import"./index.b939f3ed.js";import"./Checkbox.f0824c7f.js";import"./index.6f5a4fde.js";import"./index.d148813f.js";import"./eagerComputed.d5d9fa51.js";import"./useForm.8ce8a1bf.js";import"./index.4fb91daf.js";import"./index.13fe2a9f.js";import"./index.2a671509.js";import"./useSize.3251a39b.js";import"./index.0961799f.js";import"./useFlexGapSupport.63e06d71.js";import"./useWindowSizeFn.c221d32f.js";import"./useContentViewHeight.f6c045c6.js";import"./ArrowLeftOutlined.da248543.js";import"./index.17402399.js";import"./transButton.af3d1515.js";import"./index.7035eacc.js";import"./index.01a084a1.js";import"./index.c918b06b.js";import"./uuid.2b29000c.js";import"./index.f175a2ab.js";import"./_baseIteratee.58bea659.js";import"./get.8113fc0b.js";import"./DeleteOutlined.4914d5b2.js";import"./index.3443a9a6.js";import"./useRefs.4b50a505.js";import"./Form.57dd9f37.js";import"./Col.c878cfca.js";import"./index.59b50bd4.js";import"./FullscreenOutlined.556a26d5.js";import"./index.5a91b512.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.5cc8f7d5.js";import"./index.e4b8d817.js";import"./fromPairs.84aabb58.js";import"./scrollTo.d80ece32.js";import"./index.e46a37bc.js";import"./index.1f145165.js";/* empty css              *//* empty css              */import"./index.90b5efc0.js";import"./index.c80628df.js";import"./download.8277b1ca.js";import"./base64Conver.08b9f4ec.js";import"./index.0e6e8503.js";import"./index.36948379.js";import"./uniqBy.65755c80.js";const y=A({components:{BasicTable:B},setup(){const o=e(!1),a=e(!1),n=e(!0),p=e(!0),m=e(!1);function d(){o.value=!o.value}function t(){n.value=!n.value}function s(){a.value=!0,setTimeout(()=>{a.value=!1,m.value={pageSize:20}},3e3)}function g(){p.value=!p.value}function C(f){}return{columns:h(),data:b(),canResize:o,loading:a,striped:n,border:p,toggleStriped:t,toggleCanResize:d,toggleLoading:s,toggleBorder:g,pagination:m,handleColumnChange:C}}}),z={class:"p-4"},F=u(" \u5F00\u542Floading ");function R(o,a,n,p,m,d){const t=c("a-button"),s=c("BasicTable");return E(),k("div",z,[i(s,{title:"\u57FA\u7840\u793A\u4F8B",titleHelpMessage:"\u6E29\u99A8\u63D0\u9192",columns:o.columns,dataSource:o.data,canResize:o.canResize,loading:o.loading,striped:o.striped,bordered:o.border,showTableSetting:"",pagination:o.pagination,onColumnsChange:o.handleColumnChange},{toolbar:r(()=>[i(t,{type:"primary",onClick:o.toggleCanResize},{default:r(()=>[u(l(o.canResize?"\u53D6\u6D88\u81EA\u9002\u5E94":"\u81EA\u9002\u5E94\u9AD8\u5EA6"),1)]),_:1},8,["onClick"]),i(t,{type:"primary",onClick:o.toggleBorder},{default:r(()=>[u(l(o.border?"\u9690\u85CF\u8FB9\u6846":"\u663E\u793A\u8FB9\u6846"),1)]),_:1},8,["onClick"]),i(t,{type:"primary",onClick:o.toggleLoading},{default:r(()=>[F]),_:1},8,["onClick"]),i(t,{type:"primary",onClick:o.toggleStriped},{default:r(()=>[u(l(o.striped?"\u9690\u85CF\u6591\u9A6C\u7EB9":"\u663E\u793A\u6591\u9A6C\u7EB9"),1)]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination","onColumnsChange"])])}var Ro=v(y,[["render",R]]);export{Ro as default};
