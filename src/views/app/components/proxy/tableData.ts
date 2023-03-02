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
    label: '阿里云ECSID',
    field: 'server_id',
    component: 'Input',
    required: true,
  },
  {
    label: 'IP',
    field: 'ip',
    component: 'Input',
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
    title: '阿里云ECSID',
    dataIndex: 'server_id',
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
    title: '开始时间',
    dataIndex: 'start_date',
  },
  {
    title: '到期时间',
    dataIndex: 'due_date',
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
