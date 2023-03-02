import { FormSchema } from '/@/components/Form/index';
import { BasicColumn } from '/@/components/Table';
import dayjs, { Dayjs } from 'dayjs';
import { ref, reactive } from 'vue';
import { configList } from '/@/api/config';
const date = () => {
  const today_timestamp = new Date().getTime();
  const today_date = dayjs(today_timestamp).format('YYYY-MM-DD');
  return today_date;
};
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
    field: 'date',
    component: 'RangePicker',
    label: '时间',
    show: true,
    componentProps: {
      format: 'YYYY-MM-DD',
      valueFormat: 'YYYY-MM-DD',
    },
  },
  {
    field: 'app_id',
    component: 'Input',
    label: 'APP',
    show: true,
  },
  {
    field: 'domain',
    component: 'Input',
    label: '域名',
    show: true,
  },
  {
    field: 'country',
    component: 'Input',
    label: '国家',
    show: true,
  },
];
export const columns: BasicColumn[] = [
  {
    title: 'APP',
    dataIndex: 'app_id',
  },
  {
    title: '名称',
    dataIndex: 'name',
  },
  {
    title: '国家',
    dataIndex: 'country',
  },
  {
    title: '接口版本',
    dataIndex: 'api_version',
  },
  {
    title: '上架时间',
    dataIndex: 'start_date',
  },
  {
    title: '下架时间',
    dataIndex: 'end_date',
  },
  {
    title: '包名',
    dataIndex: 'package',
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
export const addApp: FormSchema[] = [
  {
    label: 'APP',
    field: 'app_id',
    component: 'Input',
    required: true,
  },
  {
    label: '名称',
    field: 'name',
    component: 'Input',
    required: true,
  },
  {
    label: '接口版本',
    field: 'api_version',
    component: 'Select',
    required: true,
    componentProps: {
      options: config.api_version,
      fieldNames: {
        label: 'name',
      },
    },
  },
  {
    label: '开始时间',
    field: 'start_date',
    component: 'DatePicker',
    required: true,
  },

  {
    label: '包名',
    field: 'package',
    component: 'Input',
    required: true,
  },
  {
    label: '状态',
    field: 'status',
    component: 'Select',
    required: true,
    componentProps: {
      options: config.status,
      fieldNames: {
        label: 'name',
      },
    },
  },
  {
    label: '备注',
    field: 'note',
    component: 'Input',
  },
];

export const formatDate = (timestamp: any) => {
  return dayjs(timestamp * 1000).format('YYYY-MM-DD');
};
