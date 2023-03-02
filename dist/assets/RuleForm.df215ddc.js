import{B as F}from"./BasicForm.4eff3114.js";import{u as _}from"./useForm.8ce8a1bf.js";import{as as b,a as g,ey as A,au as p,o as P,j as h,x as r,m as E,n as s,D as k,y as i}from"./index.da8cb631.js";import{a as v}from"./index.4fb91daf.js";import{i as D}from"./system.b1c25c76.js";/* empty css              *//* empty css              */import"./index.5a91b512.js";import"./index.b939f3ed.js";import"./Checkbox.f0824c7f.js";import"./index.6f5a4fde.js";import"./index.c918b06b.js";import"./index.7035eacc.js";import"./index.01a084a1.js";import"./index.90b5efc0.js";import"./get.8113fc0b.js";import"./index.d148813f.js";import"./eagerComputed.d5d9fa51.js";import"./index.f175a2ab.js";import"./_baseIteratee.58bea659.js";import"./DeleteOutlined.4914d5b2.js";import"./index.3443a9a6.js";import"./useRefs.4b50a505.js";import"./Form.57dd9f37.js";import"./Col.c878cfca.js";import"./useFlexGapSupport.63e06d71.js";import"./useSize.3251a39b.js";import"./transButton.af3d1515.js";import"./index.0961799f.js";import"./index.59b50bd4.js";import"./useWindowSizeFn.c221d32f.js";import"./FullscreenOutlined.556a26d5.js";import"./index.c80628df.js";import"./index.e4b8d817.js";import"./uuid.2b29000c.js";import"./download.8277b1ca.js";import"./base64Conver.08b9f4ec.js";import"./index.0e6e8503.js";import"./index.36948379.js";import"./uniqBy.65755c80.js";import"./index.13fe2a9f.js";import"./index.2a671509.js";import"./useContentViewHeight.f6c045c6.js";import"./ArrowLeftOutlined.da248543.js";import"./index.17402399.js";const B=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"InputNumber",show:!1},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8},required:!0},{field:"field33",component:"DatePicker",label:"\u5B57\u6BB533",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field44",component:"InputCountDown",label:"\u9A8C\u8BC1\u7801",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{mode:"multiple",options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165aa",type:"array"}]},{field:"field441",component:"Input",label:"\u81EA\u5B9A\u4E49\u6821\u9A8C",colProps:{span:8},rules:[{required:!0,validator:async(e,u)=>u?u==="1"?Promise.reject("\u503C\u4E0D\u80FD\u4E3A1"):Promise.resolve():Promise.reject("\u503C\u4E0D\u80FD\u4E3A\u7A7A"),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0,message:"\u8986\u76D6\u9ED8\u8BA4\u751F\u6210\u7684\u6821\u9A8C\u4FE1\u606F"}]},{field:"field8",component:"Input",label:"\u540E\u7AEF\u5F02\u6B65\u9A8C\u8BC1",colProps:{span:8},helpMessage:["\u672C\u5B57\u6BB5\u6F14\u793A\u5F02\u6B65\u9A8C\u8BC1","\u672C\u5730\u89C4\u5219\uFF1A\u5FC5\u987B\u586B\u5199","\u540E\u7AEF\u89C4\u5219\uFF1A\u4E0D\u80FD\u5305\u542Badmin"],rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u636E"},{validator(e,u){return new Promise((l,a)=>{D(u).then(()=>l()).catch(n=>{a(n.message||"\u9A8C\u8BC1\u5931\u8D25")})})}}]}],y=g({components:{BasicForm:F,CollapseContainer:A,PageWrapper:v},setup(){const{createMessage:e}=k(),[u,{validateFields:l,clearValidate:a,getFieldsValue:n,resetFields:f,setFieldsValue:o}]=_({labelWidth:120,schemas:B,actionColOptions:{span:24}});async function m(){try{const t=await l()}catch(t){}}async function c(){a()}function d(){const t=n();e.success("values:"+JSON.stringify(t))}function C(){o({field1:1111,field5:["1"],field7:"1",field33:"2020-12-12",field3:"2020-12-12"})}return{register:u,schemas:B,handleSubmit:t=>{e.success("click search,values:"+JSON.stringify(t))},getFormValues:d,setFormValues:C,validateForm:m,resetValidate:c,resetFields:f}}}),V={class:"mb-4"},q=i(" \u624B\u52A8\u6821\u9A8C\u8868\u5355 "),S=i(" \u6E05\u7A7A\u6821\u9A8C\u4FE1\u606F "),I=i(" \u83B7\u53D6\u8868\u5355\u503C "),N=i(" \u8BBE\u7F6E\u8868\u5355\u503C "),w=i(" \u91CD\u7F6E ");function M(e,u,l,a,n,f){const o=p("a-button"),m=p("BasicForm"),c=p("CollapseContainer"),d=p("PageWrapper");return P(),h(d,{title:"\u8868\u5355\u6821\u9A8C\u793A\u4F8B"},{default:r(()=>[E("div",V,[s(o,{onClick:e.validateForm,class:"mr-2"},{default:r(()=>[q]),_:1},8,["onClick"]),s(o,{onClick:e.resetValidate,class:"mr-2"},{default:r(()=>[S]),_:1},8,["onClick"]),s(o,{onClick:e.getFormValues,class:"mr-2"},{default:r(()=>[I]),_:1},8,["onClick"]),s(o,{onClick:e.setFormValues,class:"mr-2"},{default:r(()=>[N]),_:1},8,["onClick"]),s(o,{onClick:e.resetFields,class:"mr-2"},{default:r(()=>[w]),_:1},8,["onClick"])]),s(c,{title:"\u8868\u5355\u6821\u9A8C"},{default:r(()=>[s(m,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])]),_:1})]),_:1})}var De=b(y,[["render",M]]);export{De as default};
