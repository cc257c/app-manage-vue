import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Form/index';
export const schemas: FormSchema[] = [
  {
    label: '阿里云ECSID',
    field: 'server_id',
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
