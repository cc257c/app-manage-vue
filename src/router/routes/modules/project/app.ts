import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
const app: AppRouteModule = {
  path: '/app',
  name: 'app',
  component: LAYOUT,
  redirect: '/app/index',
  meta: {
    orderNo: 1,
    icon: 'ant-design:car-filled',
    title: 'APP列表',
    hideChildrenInMenu: true,
  },
  children: [
    {
      path: 'index',
      name: 'app',
      component: () => import('/@/views/app/index.vue'),
      meta: {
        title: 'APP列表',

        hideMenu: true,
      },
    },
  ],
};

export default app;
