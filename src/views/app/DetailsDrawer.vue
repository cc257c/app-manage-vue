<template>
  <BasicDrawer v-bind="$attrs" @register="registerDrawer" :showFooter=false width="70%" @close="handleClose">
    <div style="margin-left: 20px;font-size: 18px;font-weight: 700;">APP:{{ app_id }}</div>
    <Domain :app_id="app_id" :domain="detailData.domain" @success="handleDetail"></Domain>
    <Proxy :app_id="app_id" :proxy="detailData.proxy" @success="handleDetail"></Proxy>
    <Window :app_id="app_id" :window="detailData.window" @success="handleDetail"></Window>
  </BasicDrawer>
</template>
<script lang="ts" setup>
import { ref ,reactive} from 'vue';
import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
import Domain from './components/domain/index.vue';
import Proxy from './components/proxy/index.vue';
import Window from './components/window/index.vue';
import {detail} from '/@/api/app';
const app_id = ref();
const detailData=reactive({
  domain:[],
  proxy:[],
  window:[]
});
const [registerDrawer, { closeDrawer }] = useDrawerInner(async ({data}) => {
  app_id.value=data.app_id;
  handleDetail()
});
const handleDetail=async()=>{
let {app_domain,app_proxy,app_window}=await detail({app_id:app_id.value});
detailData.domain=app_domain;
detailData.proxy=app_proxy;
detailData.window=app_window;

};
const handleClose = () => {
  closeDrawer();
};
</script>
<style lang="less" scoped>
::v-deep(.ant-picker) {
  width: 100%;
}
</style>
