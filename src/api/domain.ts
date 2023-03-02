import { defHttp } from '/@/utils/http/axios';
export const list = (data) => {
  return defHttp.post<any>({
    url: '/domain',
    data,
  });
};

export const add = (data) => {
  return defHttp.post<any>({
    url: '/domain/add',
    data,
  });
};
