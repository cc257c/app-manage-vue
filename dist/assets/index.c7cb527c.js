import{B as c}from"./TableImg.e96a1b1c.js";import"./BasicForm.4eff3114.js";import{u as _}from"./useTable.5eea1741.js";import{F as x}from"./filter.5e8d4a58.js";import{l as F}from"./window.3fa4c8a1.js";import{a as I,o as a,h as u,m as f,n as p,i as t,x as h,k as b}from"./index.da8cb631.js";import"./index.b939f3ed.js";import"./Checkbox.f0824c7f.js";import"./index.6f5a4fde.js";import"./index.d148813f.js";import"./eagerComputed.d5d9fa51.js";import"./useForm.8ce8a1bf.js";import"./index.4fb91daf.js";import"./index.13fe2a9f.js";import"./index.2a671509.js";import"./useSize.3251a39b.js";import"./index.0961799f.js";import"./useFlexGapSupport.63e06d71.js";import"./useWindowSizeFn.c221d32f.js";import"./useContentViewHeight.f6c045c6.js";import"./ArrowLeftOutlined.da248543.js";import"./index.17402399.js";import"./transButton.af3d1515.js";import"./index.7035eacc.js";import"./index.01a084a1.js";import"./index.c918b06b.js";import"./uuid.2b29000c.js";import"./index.f175a2ab.js";import"./_baseIteratee.58bea659.js";import"./get.8113fc0b.js";import"./DeleteOutlined.4914d5b2.js";import"./index.3443a9a6.js";import"./useRefs.4b50a505.js";import"./Form.57dd9f37.js";import"./Col.c878cfca.js";import"./index.59b50bd4.js";import"./FullscreenOutlined.556a26d5.js";import"./index.5a91b512.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.5cc8f7d5.js";import"./index.e4b8d817.js";import"./fromPairs.84aabb58.js";import"./scrollTo.d80ece32.js";import"./index.e46a37bc.js";import"./index.1f145165.js";/* empty css              *//* empty css              */import"./index.90b5efc0.js";import"./index.c80628df.js";import"./download.8277b1ca.js";import"./base64Conver.08b9f4ec.js";import"./index.0e6e8503.js";import"./index.36948379.js";import"./uniqBy.65755c80.js";const B=[{label:"IP",field:"ip",component:"Input",show:!0},{label:"\u5356\u5BB6",field:"seller",component:"Input",show:!0},{label:"VPN\u7AEF\u53E3",field:"vpn_port",component:"Input",show:!0},{label:"\u72B6\u6001",field:"status",component:"Select",componentProps:{options:[{label:"\u4F7F\u7528\u4E2D",value:"1"},{label:"\u5E9F\u5F03",value:"2"}]},show:!0}],E=[{title:"APP",dataIndex:"app_id"},{title:"IP",dataIndex:"ip"},{title:"\u540D\u79F0",dataIndex:"name"},{title:"\u5F00\u53D1\u8005\u6CE8\u518C\u624B\u673A\u53F7",dataIndex:"mobile"},{title:"\u5356\u5BB6",dataIndex:"seller"},{title:"\u767B\u5F55\u5BC6\u7801",dataIndex:"login_password"},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"start_date"},{title:"\u5230\u671F\u65F6\u95F4",dataIndex:"due_date"},{title:"VPN\u7AEF\u53E3",dataIndex:"vpn_port"},{title:"\u4FE1\u7528\u5361",dataIndex:"credit_card"},{title:"ktp_url",dataIndex:"ktp_url"},{title:"Email",dataIndex:"email"},{title:"\u72B6\u6001",dataIndex:"status",customRender:({text:e})=>e==1?"\u4F7F\u7528\u4E2D":"\u5E9F\u5F03"},{title:"\u5907\u6CE8",dataIndex:"note"}],g={style:{margin:"16px"}},w={style:{"margin-bottom":"16px",padding:"10px","background-color":"white"}},C=["src"],kt=I({__name:"index",setup(e){const[m,{setLoading:o,setTableData:l}]=_({title:"\u7269\u7406\u673A\u5217\u8868",columns:E,striped:!1,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!0,pagination:!1}),s=async i=>{try{o(!0);let r=await F({...i});l(r.items)}finally{o(!1)}};return(i,r)=>(a(),u("div",g,[f("div",w,[p(x,{schemas:t(B),map:!0,ref:"method",onSuccess:s},null,8,["schemas"])]),p(t(c),{onRegister:t(m)},{bodyCell:h(({column:n,text:d})=>[n.key==="ktp_url"?(a(),u("img",{key:0,src:d,alt:"",style:{width:"350px"}},null,8,C)):b("",!0)]),_:1},8,["onRegister"])]))}});export{kt as default};