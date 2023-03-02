import { defHttp } from '/@/utils/http/axios';
export const configList = () => {
  return defHttp.post<any>({
    url: '/config',
  });
};
