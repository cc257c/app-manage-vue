import { defHttp } from '/@/utils/http/axios';

export const getApplicationdataList = (params: any) => {
  return defHttp.post({
    url: '/order/apply',
    params
  });
};