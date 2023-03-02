import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
const domain: AppRouteModule = {
  path: '/domain',
  name: 'domain',
  component: LAYOUT,
  redirect: '/domain/index',
  meta: {
    orderNo: 1,
    icon: 'ant-design:car-filled',
    title: '域名列表',
    hideChildrenInMenu: true,
  },
  children: [
    {
      path: 'index',
      name: 'domain',
      component: () => import('/@/views/domain/index.vue'),
      meta: {
        title: '域名列表',

        hideMenu: true,
      },
    },
  ],
};

export default domain;
