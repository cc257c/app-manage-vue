import { defHttp } from '/@/utils/http/axios';
export const list = (data) => {
  return defHttp.post<any>({
    url: '/proxy',
    data,
  });
};
export const add = (data) => {
  return defHttp.post<any>({
    url: '/proxy/add',
    data,
  });
};
