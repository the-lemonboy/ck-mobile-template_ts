import axios from 'axios';
import { showNotify } from 'vant';

import { STORAGE_TOKEN_KEY } from '@/stores/mutation-type';
import { localStorage } from '@/utils/local-storage';

import type { AxiosError, InternalAxiosRequestConfig } from 'axios';

// 这里是用于设定请求后端时，所用的 Token KEY
// 可以根据自己的需要修改，常见的如 Access-Token，Authorization
// 需要注意的是，请尽量保证使用中横线`-` 来作为分隔符，
// 避免被 nginx 等负载均衡器丢弃了自定义的请求头
export const REQUEST_TOKEN_KEY = 'Access-Token';

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  timeout: 6000, // 请求超时时间
});

export type RequestError = AxiosError<{
  message?: string;
  result?: any;
  errorMessage?: string;
}>;

// 异常拦截处理器
function errorHandler(error: RequestError): Promise<any> {
  if (error.response) {
    const { data = {}, status, statusText } = error.response;
    // 403 无权限
    if (status === 403) {
      showNotify({
        type: 'danger',
        message: (data && data.message) || statusText,
      });
    }
    // 401 未登录/未授权
    if (status === 401 && data.result && data.result.isLogin) {
      showNotify({
        type: 'danger',
        message: 'Authorization verification failed',
      });
      // 如果你需要直接跳转登录页面
      // location.replace(loginRoutePath)
    }
  }
  return Promise.reject(error);
}

// 请求拦截器
function requestHandler(
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> {
  const savedToken = localStorage.get(STORAGE_TOKEN_KEY);
  if (config.url.indexOf('http') > -1) config.baseURL = '';
  // 部分接口timeout时间单独处理
  if (
    config.url.indexOf('SynThirdInfo') > -1 ||
    config.url.indexOf('extend/Email/Receive') > -1 ||
    config.url.indexOf('Permission/Authority/Data') > -1 ||
    config.url.indexOf('DataSync/Actions/Execute') > -1
  ) {
    config.timeout = 100000;
  }
  // do something before request is sent
  config.headers['cityk-origin'] = 'pc';
  if (savedToken) {
    config.headers.Authorization = savedToken;
  }
  if (config.method === 'get') {
    config.params = config.data;
  }
  // const timestamp = Date.parse(new Date()) / 1000;
  // if (config.url.indexOf('?') > -1) {
  //   config.url += `&n=${timestamp}`;
  // } else {
  //   config.url += `?n=${timestamp}`;
  // }
  return config;
}

// Add a request interceptor
request.interceptors.request.use(requestHandler, errorHandler);

// 响应拦截器
function responseHandler(response: any) {
  const res = response.data;
  const { config } = response;
  const { url } = config;
  // 特殊接口处理
  if (
    url.indexOf('/Base/DataSource/Actions/Test') > -1 ||
    (url.indexOf('Model') > -1 && url.indexOf('Config') > -1)
  )
    return res;
  // TODO 请求文件流时，返回的res是Blob
  if (res instanceof Blob) {
    if (
      url.indexOf('/api/device/DeviceOperate/exportGateData') > -1 ||
      url.indexOf('/api/sample/Detection/Data/exportSampleDetectionData') > -1 ||
      url.indexOf('/api/material/Stock/exportDatas') > -1 ||
      url.indexOf('/api/project/ProjBase/exportMixDataExcel') > -1
    ) {
      const specialRes = { data: res, header: response.headers };
      return specialRes;
    }
    return res;
  }
  if (res.code !== 200) {
    showNotify({
      type: 'danger',
      message: res.msg || '请求出错，请重试',
    });
    if (
      url.indexOf('/api/oauth/Login') < 0 &&
      url.indexOf('/api/oauth/LockScreen') < 0 &&
      (res.code === 600 || res.code === 601 || res.code === 602)
    ) {
      // 600：登录过期,请重新登录  601: 您的帐号在其他地方已登录,被强制踢出 602: Token验证失败
      // store.dispatch('user/resetToken').then(() => {
      //   if (window.location.pathname.indexOf('login') > -1) return;
      //   // setTimeout(() => { location.reload() }, 100);
      //   context.$router.push(`/login`);
      // });
    }
    if (url.indexOf('/api/oauth/Login') > -1) return Promise.reject(res);
    return Promise.reject(new Error(res.msg || 'Error'));
  }
  return res;
}

// Add a response interceptor
request.interceptors.response.use(responseHandler, errorHandler);

export default request;
