import { defHttp } from '/@/utils/http/axios';
export const list = (data) => {
  return defHttp.post<any>({
    url: '/window',
    data,
  });
};

export const add = (data) => {
  return defHttp.post<any>({
    url: '/window/add',
    data,
  });
};

export const uploadImgage = (data) => {
  return defHttp.post<any>({
    url: '/upload',
    data,
  });
};
