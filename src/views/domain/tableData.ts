import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Form/index';
export const schemas: FormSchema[] = [
  {
    label: '域名',
    field: 'domain',
    component: 'Input',

    show: true,
  },
  {
    label: 'IP',
    field: 'ip',
    component: 'Input',
    show: true,
  },
  {
    label: '状态',
    field: 'status',
    component: 'Select',
    componentProps: {
      options: [
        {
          label: '使用中',
          value: '1',
        },
        {
          label: '废弃',
          value: '2',
        },
      ],
    },
    show: true,
  },
];
export const columns: BasicColumn[] = [
  {
    title: 'APP',
    dataIndex: 'app_id',
  },
  {
    title: '域名',
    dataIndex: 'domain',
  },
  {
    title: 'IP',
    dataIndex: 'ip',
  },
  {
    title: '证书到期时间',
    dataIndex: 'ssl_expire',
  },
  {
    title: '注册时间',
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
