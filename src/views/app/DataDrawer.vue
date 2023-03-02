<template>
  <BasicDrawer v-bind="$attrs" @register="registerDrawer" :showFooter=false width="50%" @close="handleClose">
    <BasicForm @register="registerForm" />
    <a-button type="primary" style="position: absolute;left: 50%;transform: translateX(-50%);" @click="handleSave">保存</a-button>
  </BasicDrawer>
</template>
<script lang="ts" setup>
import {  defineEmits } from 'vue';
import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
import { BasicForm, useForm } from '/@/components/Form/index';
import { addApp } from './tableData';
import { add } from '/@/api/app';
const emit = defineEmits(['successAdd', 'register']);
const [registerDrawer, { closeDrawer, changeLoading }] = useDrawerInner();
const [registerForm, { validate, resetFields }] = useForm({
  schemas: addApp,
  showActionButtonGroup: false,
  labelWidth: '120px',
  baseColProps: {
    span: 24
  }
});
const handleSave = async () => {
  try {
    const values = await validate();
    changeLoading(true)
    await add({ ...values });
    handleClose()
    emit('successAdd');
  } finally {
    changeLoading(false)
  }
};
const handleClose = () => {
  closeDrawer();
  resetFields();
}
</script>
<style lang="less" scoped>
::v-deep(.ant-picker) {
  width: 100%;
}
</style>
