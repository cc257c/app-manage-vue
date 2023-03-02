<template>
  <BasicDrawer v-bind="$attrs" @register="registerDrawer" :showFooter=false width="50%" @close="handleClose">
    <BasicForm @register="registerForm" />
    <a-button type="primary" style="position: absolute;left: 50%;transform: translateX(-50%);"
      @click="handleSave">保存</a-button>
  </BasicDrawer>
</template>
<script lang="ts" setup>
import { ref, defineEmits } from 'vue';
import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
import { BasicForm, useForm } from '/@/components/Form/index';
import { schemas } from './tableData';
import { add } from '/@/api/proxy';
const emit = defineEmits(['successAdd', 'register']);
const app_id = ref();
const [registerDrawer, { closeDrawer, changeLoading }] = useDrawerInner(async (data) => {
  app_id.value = data.app_id;

});
const [registerForm, { validate, resetFields }] = useForm({
  schemas: schemas,
  showActionButtonGroup: false,
  labelWidth: '120px',
  baseColProps: {
    span: 24
  }
});
async function handleSave() {
  try {
    const values = await validate();
    changeLoading(true)
    await add({ ...values, app_id: app_id.value });
    handleClose()
    emit('successAdd');
  } finally {
    changeLoading(false)
  }
};
function handleClose() {
  closeDrawer();
  resetFields();
}
</script>
<style lang="less" scoped>
::v-deep(.ant-picker) {
  width: 100%;
}
</style>
