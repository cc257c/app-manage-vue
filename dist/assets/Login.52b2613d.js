import{a as g,u as h,b as x,c as b,e as u,f,o as n,h as v,i as o,j as l,A as _,k as s,l as w,m as t,n as e,p as r,q as p}from"./index.da8cb631.js";import k from"./LoginForm.3cdd72e5.js";import y from"./ForgetPasswordForm.fef04285.js";import S from"./RegisterForm.6ab66b4b.js";import z from"./MobileForm.6f22120d.js";import L from"./QrCodeForm.37dbc097.js";/* empty css              *//* empty css              */import"./LoginFormTitle.a51ffff2.js";import"./Form.57dd9f37.js";import"./Col.c878cfca.js";import"./useFlexGapSupport.63e06d71.js";import"./_baseIteratee.58bea659.js";import"./get.8113fc0b.js";import"./useSize.3251a39b.js";import"./index.90b5efc0.js";import"./index.6f5a4fde.js";import"./Checkbox.f0824c7f.js";import"./index.0e6e8503.js";import"./index.5a91b512.js";import"./index.3ca332e6.js";import"./download.8277b1ca.js";import"./base64Conver.08b9f4ec.js";var T="/assets/login-box-bg.9027741f.svg";const $={class:"-enter-x xl:hidden"},B={class:"container relative h-full py-2 mx-auto sm:px-10"},A={class:"flex h-full"},C={class:"hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12"},N={class:"my-auto"},V=["alt"],D={class:"flex w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12"},so=g({__name:"Login",props:{sessionTimeout:{type:Boolean}},setup(i){const m=h(),{prefixCls:a}=x("login");b();const d=u().getShowPicker,c=f(()=>m?.title??"");return(j,q)=>(n(),v("div",{class:p([o(a),"relative w-full h-full px-4"])},[!i.sessionTimeout&&o(d)?(n(),l(o(_),{key:0,class:"absolute text-white top-4 right-4 enter-x xl:text-gray-600",showText:!1})):s("",!0),i.sessionTimeout?s("",!0):(n(),l(o(w),{key:1,class:"absolute top-3 right-7 enter-x"})),t("span",$,[e(o(r),{alwaysShowTitle:!0})]),t("div",B,[t("div",A,[t("div",C,[e(o(r),{class:"-enter-x"}),t("div",N,[t("img",{alt:o(c),src:T,class:"w-1/2 -mt-16 -enter-x"},null,8,V)])]),t("div",D,[t("div",{class:p([`${o(a)}-form`,"relative w-full px-5 py-8 mx-auto my-auto rounded-md shadow-md xl:ml-16 xl:bg-transparent sm:px-8 xl:p-4 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto enter-x"])},[e(k),e(y),e(S),e(z),e(L)],2)])])])],2))}});export{so as default};