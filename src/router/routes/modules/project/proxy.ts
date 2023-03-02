import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
const proxy: AppRouteModule = {
  path: '/proxy',
  name: 'proxy',
  component: LAYOUT,
  redirect: '/proxy/index',
  meta: {
    orderNo: 1,
    icon: 'ant-design:car-filled',
    title: '代理机列表',
    hideChildrenInMenu: true,
  },
  children: [
    {
      path: 'index',
      name: 'proxy',
      component: () => import('/@/views/proxy/index.vue'),
      meta: {
        title: '代理机列表',

        hideMenu: true,
      },
    },
  ],
};

export default proxy;
