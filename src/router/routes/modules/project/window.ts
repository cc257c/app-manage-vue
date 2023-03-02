import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
const window: AppRouteModule = {
  path: '/window',
  name: 'window',
  component: LAYOUT,
  redirect: '/window/index',
  meta: {
    orderNo: 1,
    icon: 'ant-design:car-filled',
    title: '物理机列表',
    hideChildrenInMenu: true,
  },
  children: [
    {
      path: 'index',
      name: 'window',
      component: () => import('/@/views/window/index.vue'),
      meta: {
        title: '物理机列表',

        hideMenu: true,
      },
    },
  ],
};

export default window;
