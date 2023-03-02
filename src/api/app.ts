import { defHttp } from '/@/utils/http/axios';
export const add = (data) => {
  return defHttp.post<any>({
    url: '/app/add',
    data,
  });
};
export const list = (data) => {
  return defHttp.post<any>({
    url: '/app',
    data,
  });
};

export const detail = (data) => {
  return defHttp.post<any>({
    url: '/app/detail',
    data,
  });
};

export const stop = (data) => {
  return defHttp.post<any>({
    url: '/stop',
    data,
  });
};

export const setPrivacy = (data) => {
  return defHttp.post<any>({
    url: '/domain/privacy/set',
    data,
  });
};

export const setVpn = (data) => {
  return defHttp.post<any>({
    url: '/proxy/vpn/set',
    data,
  });
};

export const noteHistory = (data) => {
  return defHttp.post<any>({
    url: '/note/history',
    data,
  });
};
