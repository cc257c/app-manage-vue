import{B as v}from"./TableImg.e96a1b1c.js";import"./BasicForm.4eff3114.js";import{u as $}from"./useTable.5eea1741.js";import{getBasicColumns as p,getBasicShortColumns as M}from"./tableData.0902c609.js";import{as as N,a as V,au as d,o as I,h as z,m as g,n as t,x as u,y as i,D as H}from"./index.da8cb631.js";import{d as U}from"./table.be9ea6ff.js";import"./index.b939f3ed.js";import"./Checkbox.f0824c7f.js";import"./index.6f5a4fde.js";import"./index.d148813f.js";import"./eagerComputed.d5d9fa51.js";import"./useForm.8ce8a1bf.js";import"./index.4fb91daf.js";import"./index.13fe2a9f.js";import"./index.2a671509.js";import"./useSize.3251a39b.js";import"./index.0961799f.js";import"./useFlexGapSupport.63e06d71.js";import"./useWindowSizeFn.c221d32f.js";import"./useContentViewHeight.f6c045c6.js";import"./ArrowLeftOutlined.da248543.js";import"./index.17402399.js";import"./transButton.af3d1515.js";import"./index.7035eacc.js";import"./index.01a084a1.js";import"./index.c918b06b.js";import"./uuid.2b29000c.js";import"./index.f175a2ab.js";import"./_baseIteratee.58bea659.js";import"./get.8113fc0b.js";import"./DeleteOutlined.4914d5b2.js";import"./index.3443a9a6.js";import"./useRefs.4b50a505.js";import"./Form.57dd9f37.js";import"./Col.c878cfca.js";import"./index.59b50bd4.js";import"./FullscreenOutlined.556a26d5.js";import"./index.5a91b512.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.5cc8f7d5.js";import"./index.e4b8d817.js";import"./fromPairs.84aabb58.js";import"./scrollTo.d80ece32.js";import"./index.e46a37bc.js";import"./index.1f145165.js";/* empty css              *//* empty css              */import"./index.90b5efc0.js";import"./index.c80628df.js";import"./download.8277b1ca.js";import"./base64Conver.08b9f4ec.js";import"./index.0e6e8503.js";import"./index.36948379.js";import"./uniqBy.65755c80.js";const j=V({components:{BasicTable:v},setup(){const{createMessage:o}=H();function n(){}const[c,{setLoading:s,setColumns:a,getColumns:r,getDataSource:e,getRawDataSource:l,reload:m,getPaginationRef:C,setPagination:f,getSelectRows:_,getSelectRowKeys:F,setSelectedRowKeys:B,clearSelectedRowKeys:h}]=$({canResize:!0,title:"useTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528useTable\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",api:U,columns:p(),defSort:{field:"name",order:"ascend"},rowKey:"id",showTableSetting:!0,onChange:n,rowSelection:{type:"checkbox"},onColumnsChange:P=>{}});function k(){s(!0),setTimeout(()=>{s(!1)},1e3)}function b(){a(M())}function D(){a(p()),m({page:1})}function E(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),r()}function S(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),e()}function T(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),l()}function w(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),C()}function R(){f({current:2}),m()}function y(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),_()}function A(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),F()}function L(){B(["0","1","2"])}function K(){h()}return{registerTable:c,changeLoading:k,changeColumns:b,reloadTable:D,getColumn:E,getTableData:S,getTableRawData:T,getPagination:w,setPaginationInfo:R,getSelectRowList:y,getSelectRowKeyList:A,setSelectedRowKeyList:L,clearSelect:K,onChange:n}}}),q={class:"p-4"},G={class:"mb-4"},J=i(" \u8FD8\u539F "),O=i(" \u5F00\u542Floading "),Q=i(" \u66F4\u6539Columns "),W=i(" \u83B7\u53D6Columns "),X=i(" \u83B7\u53D6\u8868\u683C\u6570\u636E "),Y=i(" \u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E "),Z=i(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 "),x={class:"mb-4"},oo=i(" \u83B7\u53D6\u9009\u4E2D\u884C "),eo=i(" \u83B7\u53D6\u9009\u4E2D\u884CKey "),to=i(" \u8BBE\u7F6E\u9009\u4E2D\u884C "),uo=i(" \u6E05\u7A7A\u9009\u4E2D\u884C "),io=i(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F ");function no(o,n,c,s,a,r){const e=d("a-button"),l=d("BasicTable");return I(),z("div",q,[g("div",G,[t(e,{class:"mr-2",onClick:o.reloadTable},{default:u(()=>[J]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.changeLoading},{default:u(()=>[O]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.changeColumns},{default:u(()=>[Q]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getColumn},{default:u(()=>[W]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getTableData},{default:u(()=>[X]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getTableRawData},{default:u(()=>[Y]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.setPaginationInfo},{default:u(()=>[Z]),_:1},8,["onClick"])]),g("div",x,[t(e,{class:"mr-2",onClick:o.getSelectRowList},{default:u(()=>[oo]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getSelectRowKeyList},{default:u(()=>[eo]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.setSelectedRowKeyList},{default:u(()=>[to]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.clearSelect},{default:u(()=>[uo]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getPagination},{default:u(()=>[io]),_:1},8,["onClick"])]),t(l,{onRegister:o.registerTable},null,8,["onRegister"])])}var ae=N(j,[["render",no]]);export{ae as default};
