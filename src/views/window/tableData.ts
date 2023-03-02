import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Form/index';
export const schemas: FormSchema[] = [
  {
    label: 'IP',
    field: 'ip',
    component: 'Input',
    show: true,
  },
  {
    label: '卖家',
    field: 'seller',
    component: 'Input',
    show: true,
  },
  {
    label: 'VPN端口',
    field: 'vpn_port',
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
