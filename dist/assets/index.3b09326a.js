import{a as f}from"./index.4fb91daf.js";import{B}from"./BasicForm.4eff3114.js";import{u as _}from"./useForm.8ce8a1bf.js";import{as as F,a as C,au as u,o as h,j as w,x as i,m as c,n as p,y as l}from"./index.da8cb631.js";import"./index.13fe2a9f.js";import"./index.2a671509.js";import"./useSize.3251a39b.js";import"./eagerComputed.d5d9fa51.js";import"./index.0961799f.js";import"./useFlexGapSupport.63e06d71.js";import"./useWindowSizeFn.c221d32f.js";import"./useContentViewHeight.f6c045c6.js";import"./ArrowLeftOutlined.da248543.js";import"./index.17402399.js";import"./transButton.af3d1515.js";/* empty css              *//* empty css              */import"./index.5a91b512.js";import"./index.b939f3ed.js";import"./Checkbox.f0824c7f.js";import"./index.6f5a4fde.js";import"./index.c918b06b.js";import"./index.7035eacc.js";import"./index.01a084a1.js";import"./index.90b5efc0.js";import"./get.8113fc0b.js";import"./index.d148813f.js";import"./index.f175a2ab.js";import"./_baseIteratee.58bea659.js";import"./DeleteOutlined.4914d5b2.js";import"./index.3443a9a6.js";import"./useRefs.4b50a505.js";import"./Form.57dd9f37.js";import"./Col.c878cfca.js";import"./index.59b50bd4.js";import"./FullscreenOutlined.556a26d5.js";import"./index.c80628df.js";import"./index.e4b8d817.js";import"./uuid.2b29000c.js";import"./download.8277b1ca.js";import"./base64Conver.08b9f4ec.js";import"./index.0e6e8503.js";import"./index.36948379.js";import"./uniqBy.65755c80.js";const E=[{field:"passwordOld",label:"\u5F53\u524D\u5BC6\u7801",component:"InputPassword",required:!0},{field:"passwordNew",label:"\u65B0\u5BC6\u7801",component:"StrengthMeter",componentProps:{placeholder:"\u65B0\u5BC6\u7801"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"}]},{field:"confirmPassword",label:"\u786E\u8BA4\u5BC6\u7801",component:"InputPassword",dynamicRules:({values:o})=>[{required:!0,validator:(t,e)=>e?e!==o.passwordNew?Promise.reject("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4!"):Promise.resolve():Promise.reject("\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A")}]}],g=C({name:"ChangePassword",components:{BasicForm:B,PageWrapper:f},setup(){const[o,{validate:t,resetFields:e}]=_({size:"large",baseColProps:{span:24},labelWidth:100,showActionButtonGroup:!1,schemas:E});async function a(){try{const r=await t(),{passwordOld:m,passwordNew:s}=r}catch{}}return{register:o,resetFields:e,handleSubmit:a}}}),P={class:"py-8 bg-white flex flex-col justify-center items-center"},b={class:"flex justify-center"},A=l(" \u91CD\u7F6E "),y=l(" \u786E\u8BA4 ");function v(o,t,e,a,r,m){const s=u("BasicForm"),n=u("a-button"),d=u("PageWrapper");return h(),w(d,{title:"\u4FEE\u6539\u5F53\u524D\u7528\u6237\u5BC6\u7801",content:"\u4FEE\u6539\u6210\u529F\u540E\u4F1A\u81EA\u52A8\u9000\u51FA\u5F53\u524D\u767B\u5F55\uFF01"},{default:i(()=>[c("div",P,[p(s,{onRegister:o.register},null,8,["onRegister"]),c("div",b,[p(n,{onClick:o.resetFields},{default:i(()=>[A]),_:1},8,["onClick"]),p(n,{class:"!ml-4",type:"primary",onClick:o.handleSubmit},{default:i(()=>[y]),_:1},8,["onClick"])])])]),_:1})}var ho=F(g,[["render",v]]);export{ho as default};
