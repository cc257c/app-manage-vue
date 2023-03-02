<template>
  <BasicDrawer v-bind="$attrs" @register="registerDrawer" :showFooter=false width="50%" @close="handleClose">
    <BasicForm @register="registerForm">
      <template #ktp_url>
        <!-- <img v-if="preview" :src="preview" alt="logo" class="logo" /> -->
        <a :href="preview" v-if="preview" target="_blank">查看图片</a>
        <Upload name="name" :showUploadList="false" class="upload-list-inline" :customRequest="UploadImg">
          <Button>
            <upload-outlined></upload-outlined>
            上传图片
          </Button>
        </Upload>
      </template>
    </BasicForm>
    <Button type="primary" style="position: absolute;left: 50%;transform: translateX(-50%);"
      @click="handleSave">保存</Button>
  </BasicDrawer>
</template>
<script lang="ts" setup>
import { ref, defineEmits } from 'vue';
import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
import { BasicForm, useForm } from '/@/components/Form/index';
import { schemas } from './tableData';
import { add, uploadImgage } from '/@/api/window';
import { Upload, Button, message } from 'ant-design-vue';
import { UploadOutlined } from '@ant-design/icons-vue';
const emit = defineEmits(['successAdd', 'register']);
const app_id = ref();
const preview = ref();
const ktp_url = ref();
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
function getBase64(img: Blob, callback: (base64Url: string) => void) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const UploadImg = (file) => {
  const isLt2M = file.file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('图片大小小于2M!');
    return
  }
  const name = file.file.name;
  getBase64(file.file, (base64Url: string) => {
    let ar = base64Url.split('base64,');
    let obj = { name, content: ar[1] };
    uploadImgage(obj).then((res) => {
      preview.value = res.preview
      ktp_url.value = res.url;
    });
  });

};
async function handleSave() {
  if(ktp_url.value==''){
    message.error('请上传图片!');
    return;
  }
  try {
    const values = await validate();
    changeLoading(true)
    await add({ ...values, app_id: app_id.value, ktp_url: ktp_url.value });
    handleClose()
    emit('successAdd');
  } finally {
    changeLoading(false)
  }
};
function handleClose() {
  preview.value = '';
  ktp_url.value = '',
    closeDrawer();
  resetFields();
}
</script>
<style lang="less" scoped>
::v-deep(.ant-picker) {
  width: 100%;
}

.logo {
  position: absolute;
  top: 0;
  width: 84px;
  height: 84px;
}

.logo:hover {
  cursor: pointer;
}
</style>
