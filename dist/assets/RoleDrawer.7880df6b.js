import{B as w}from"./BasicForm.4eff3114.js";import{u as B}from"./useForm.8ce8a1bf.js";import{bT as b,D as _,as as v,a as S,s as D,i as m,f as C,au as p,o as I,j as R,x as h,n as g,av as k}from"./index.da8cb631.js";import{S as E}from"./index.01a084a1.js";import{s as T,c as y}from"./system.b1c25c76.js";import{B as P,a as x}from"./index.658b646d.js";import{_ as N}from"./index.63ace6eb.js";const W=[{title:"\u89D2\u8272\u540D\u79F0",dataIndex:"roleName",width:200},{title:"\u89D2\u8272\u503C",dataIndex:"roleValue",width:180},{title:"\u6392\u5E8F",dataIndex:"orderNo",width:50},{title:"\u72B6\u6001",dataIndex:"status",width:120,customRender:({record:e})=>(Reflect.has(e,"pendingStatus")||(e.pendingStatus=!1),b(E,{checked:e.status==="1",checkedChildren:"\u5DF2\u542F\u7528",unCheckedChildren:"\u5DF2\u7981\u7528",loading:e.pendingStatus,onChange(s){e.pendingStatus=!0;const t=s?"1":"0",{createMessage:a}=_();T(e.id,t).then(()=>{e.status=t,a.success("\u5DF2\u6210\u529F\u4FEE\u6539\u89D2\u8272\u72B6\u6001")}).catch(()=>{a.error("\u4FEE\u6539\u89D2\u8272\u72B6\u6001\u5931\u8D25")}).finally(()=>{e.pendingStatus=!1})}}))},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:180},{title:"\u5907\u6CE8",dataIndex:"remark"}],H=[{field:"roleNme",label:"\u89D2\u8272\u540D\u79F0",component:"Input",colProps:{span:8}},{field:"status",label:"\u72B6\u6001",component:"Select",componentProps:{options:[{label:"\u542F\u7528",value:"0"},{label:"\u505C\u7528",value:"1"}]},colProps:{span:8}}],$=[{field:"roleName",label:"\u89D2\u8272\u540D\u79F0",required:!0,component:"Input"},{field:"roleValue",label:"\u89D2\u8272\u503C",required:!0,component:"Input"},{field:"status",label:"\u72B6\u6001",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"\u542F\u7528",value:"0"},{label:"\u505C\u7528",value:"1"}]}},{label:"\u5907\u6CE8",field:"remark",component:"InputTextArea"},{label:" ",field:"menu",slot:"menu",component:"Input"}],V=S({name:"RoleDrawer",components:{BasicDrawer:P,BasicForm:w,BasicTree:N},emits:["success","register"],setup(e,{emit:s}){const t=D(!0),a=D([]),[d,{resetFields:f,setFieldsValue:r,validate:l}]=B({labelWidth:90,baseColProps:{span:24},schemas:$,showActionButtonGroup:!1}),[i,{setDrawerProps:u,closeDrawer:o}]=x(async n=>{f(),u({confirmLoading:!1}),m(a).length===0&&(a.value=await y()),t.value=!!n?.isUpdate,m(t)&&r({...n.record})}),c=C(()=>m(t)?"\u7F16\u8F91\u89D2\u8272":"\u65B0\u589E\u89D2\u8272");async function F(){try{const n=await l();u({confirmLoading:!0}),o(),s("success")}finally{u({confirmLoading:!1})}}return{registerDrawer:i,registerForm:d,getTitle:c,handleSubmit:F,treeData:a}}});function L(e,s,t,a,d,f){const r=p("BasicTree"),l=p("BasicForm"),i=p("BasicDrawer");return I(),R(i,k(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"500px",onOk:e.handleSubmit}),{default:h(()=>[g(l,{onRegister:e.registerForm},{menu:h(({model:u,field:o})=>[g(r,{value:u[o],"onUpdate:value":c=>u[o]=c,treeData:e.treeData,fieldNames:{title:"menuName",key:"id"},checkable:"",toolbar:"",title:"\u83DC\u5355\u5206\u914D"},null,8,["value","onUpdate:value","treeData"])]),_:1},8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var M=v(V,[["render",L]]),J=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));export{M as R,J as a,W as c,H as s};