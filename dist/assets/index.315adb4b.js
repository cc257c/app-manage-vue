import{B as z}from"./TableImg.e96a1b1c.js";import"./BasicForm.4eff3114.js";import{u as H}from"./useTable.5eea1741.js";import{u as I}from"./index.658b646d.js";import{c as M,D as P}from"./DataDrawer.b5c794a9.js";import{a as $,Z as j,s as h,au as v,o as e,h as i,n as s,x as t,j as C,F as L,ax as U,m as k,z as c,i as r,y as _,bp as Z,k as d,ee as q}from"./index.da8cb631.js";import{f as G,e as J,n as K}from"./app.42c2e5e1.js";import"./index.b939f3ed.js";import"./Checkbox.f0824c7f.js";import"./index.6f5a4fde.js";import"./index.d148813f.js";import"./eagerComputed.d5d9fa51.js";import"./useForm.8ce8a1bf.js";import"./index.4fb91daf.js";import"./index.13fe2a9f.js";import"./index.2a671509.js";import"./useSize.3251a39b.js";import"./index.0961799f.js";import"./useFlexGapSupport.63e06d71.js";import"./useWindowSizeFn.c221d32f.js";import"./useContentViewHeight.f6c045c6.js";import"./ArrowLeftOutlined.da248543.js";import"./index.17402399.js";import"./transButton.af3d1515.js";import"./index.7035eacc.js";import"./index.01a084a1.js";import"./index.c918b06b.js";import"./uuid.2b29000c.js";import"./index.f175a2ab.js";import"./_baseIteratee.58bea659.js";import"./get.8113fc0b.js";import"./DeleteOutlined.4914d5b2.js";import"./index.3443a9a6.js";import"./useRefs.4b50a505.js";import"./Form.57dd9f37.js";import"./Col.c878cfca.js";import"./index.59b50bd4.js";import"./FullscreenOutlined.556a26d5.js";import"./index.5a91b512.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.5cc8f7d5.js";import"./index.e4b8d817.js";import"./fromPairs.84aabb58.js";import"./scrollTo.d80ece32.js";import"./index.e46a37bc.js";import"./index.1f145165.js";/* empty css              *//* empty css              */import"./index.90b5efc0.js";import"./index.c80628df.js";import"./download.8277b1ca.js";import"./base64Conver.08b9f4ec.js";import"./index.0e6e8503.js";import"./index.36948379.js";import"./uniqBy.65755c80.js";import"./index.9430cdfe.js";import"./config.f9178ad3.js";import"./window.3fa4c8a1.js";const O={style:{margin:"16px"}},Q=_("\u65B0\u589E"),W={key:1},X=["onMouseenter"],Y=["src"],tt=_("\u505C\u7528"),ie=$({__name:"index",props:{app_id:{type:Number},window:{type:Array,default:[]}},emits:["success"],setup(b,{emit:f}){const m=b;j(m,()=>{N(m.window)});const a=h(),u=h([]),[x,{openDrawer:D}]=I(),[B,{setTableData:N}]=H({title:"\u7269\u7406\u673A\u5217\u8868",columns:M,striped:!1,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,pagination:!1,tableSetting:{redo:!1},actionColumn:{width:250,title:"\u64CD\u4F5C",dataIndex:"action"}}),T=()=>{D(!0,{app_id:m.app_id})},A=()=>{a.value=""},E=async n=>{await J({table:"app_window",id:n.id,note:a.value}),f("success"),a.value=""},F=()=>{f("success")},R=async n=>{let p=await K({id:n.id});u.value=p.items};return(n,p)=>{const y=v("a-button"),S=v("a-textarea");return e(),i("div",O,[s(r(z),{onRegister:r(B)},{toolbar:t(()=>[s(y,{type:"primary",onClick:T},{default:t(()=>[Q]),_:1})]),bodyCell:t(({column:l,record:w,text:g})=>[l.key==="note"?(e(),C(r(Z),{key:0,trigger:"hover",placement:"left"},{content:t(()=>[u.value.length!=0?(e(!0),i(L,{key:0},U(u.value,(o,V)=>(e(),i("p",{key:V},[k("span",null,"\u65F6\u95F4:"+c(r(G)(o.created)),1),_(" \u2003"+c(o.note),1)]))),128)):(e(),i("p",W,"\u6682\u65E0\u6570\u636E"))]),default:t(()=>[k("span",{onMouseenter:o=>R(w)},c(g),41,X)]),_:2},1024)):d("",!0),l.key==="ktp_url"?(e(),i("img",{key:1,src:g,alt:"",style:{width:"350px"}},null,8,Y)):d("",!0),l.key==="action"?(e(),C(r(q),{key:2,onConfirm:o=>E(w),onCancel:A,placement:"left"},{title:t(()=>[s(S,{value:a.value,"onUpdate:value":p[0]||(p[0]=o=>a.value=o),placeholder:"\u5907\u6CE8"},null,8,["value"])]),default:t(()=>[s(y,{color:"error"},{default:t(()=>[tt]),_:1})]),_:2},1032,["onConfirm"])):d("",!0)]),_:1},8,["onRegister"]),s(P,{onRegister:r(x),onSuccessAdd:F},null,8,["onRegister"])])}}});export{ie as default};
