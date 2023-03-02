import { FormSchema } from '/@/components/Form/index';
import { BasicColumn } from '/@/components/Table';
import { configList } from '/@/api/config';
import { reactive } from 'vue';
const config = reactive({
  api_version: [],
  app_status: [],
  status: [],
});
async function get() {
  let { api_version, app_status, status } = await configList();
  config.api_version = api_version;
  config.app_status = app_status;
  config.status = status;
}
await get();
export const schemas: FormSchema[] = [
  {
    label: 'IP',
    field: 'ip',
    component: 'Input',
    required: true,
  },
  { label: '名称', field: 'name', component: 'Input', required: true },
  {
    label: '开发者注册手机号',
    field: 'mobile',
    component: 'Input',
    required: true,
  },
  {
    label: '卖家',
    field: 'seller',
    component: 'Input',
    required: true,
  },
  {
    label: '登录密码',
    field: 'login_password',
    component: 'InputTextArea',
    required: true,
  },
  {
    label: '开始时间',
    field: 'start_date',
    component: 'DatePicker',

    required: true,
  },
  {
    label: '到期时间',
    field: 'due_date',
    component: 'DatePicker',
    required: true,
  },
  {
    label: 'VPN端口',
    field: 'vpn_port',
    component: 'Input',
    required: true,
  },
  {
    label: '信用卡',
    field: 'credit_card',
    component: 'Input',
    required: true,
  },
  {
    label: 'ktp_url',
    field: 'ktp_url',
    component: 'Upload',
    slot: 'ktp_url',
  },
  {
    label: 'Email',
    field: 'email',
    component: 'Input',
    required: true,
  },
  // {
  //   label: '状态',
  //   field: 'status',
  //   component: 'Select',
  //   required: true,
  //   componentProps: {
  //     options: config.status,
  //     fieldNames: {
  //       label: 'name',
  //     },
  //   },
  // },
  {
    label: '备注',
    field: 'note',
    component: 'Input',
  },
];
export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    defaultHidden: true,
  },
  {
    title: 'APP',
    dataIndex: 'app_id',
  },

  {
    title: 'IP',
    dataIndex: 'ip',
  },
  {
    title: '名称',
    dataIndex: 'name',
  },
  {
    title: '开发者注册手机号',
    dataIndex: 'mobile',
  },
  {
    title: '卖家',
    dataIndex: 'seller',
  },
  {
    title: '登录密码',
    dataIndex: 'login_password',
  },
  {
    title: '开始时间',
    dataIndex: 'start_date',
  },
  {
    title: '到期时间',
    dataIndex: 'due_date',
  },
  {
    title: 'VPN端口',
    dataIndex: 'vpn_port',
  },
  {
    title: '信用卡',
    dataIndex: 'credit_card',
  },
  {
    title: 'ktp_url',
    dataIndex: 'ktp_url',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: '状态',
    dataIndex: 'status',
    customRender: ({ text }) => {
      return text == 1 ? '使用中' : '废弃';
    },
  },
  {
    title: '备注',
    dataIndex: 'note',
  },
];
