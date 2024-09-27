import axios from 'axios';
import { showNotify } from 'vant';
// import { t } from '@/locales/i18n';

import { ResultEnum } from '#/enum';

import type { Result } from '#/api';
import type { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
// 创建 axios 实例
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
});

// 请求拦截
axiosInstance.interceptors.request.use(
  (config) => {
    // 在请求被发送之前做些什么
    config.headers.Authorization = 'Bearer Token';
    return config;
  },
  (error) => {
    // 请求错误时做些什么
    return Promise.reject(error);
  },
);

// 响应拦截
axiosInstance.interceptors.response.use(
  (res: AxiosResponse<Result>) => {
    if (!res.data) throw new Error('服务端异常，无返回数据');

    const { status, data, message } = res.data;
    // 业务请求成功
    const hasSuccess = data && Reflect.has(res.data, 'status') && status === ResultEnum.SUCCESS;
    if (hasSuccess) {
      return res;
    }

    // 业务请求错误
    throw new Error(message || `请求出错，status:${status}`);
  },
  (error: AxiosError<Result>) => {
    const { response, message } = error || {};
    let errMsg = '错误';
    try {
      errMsg = response?.data?.message || message;
    } catch (err) {
      throw new Error(err as unknown as string);
    }
    // 对响应错误做点什么
    showNotify({
      type: 'danger',
      message: errMsg || '请求出错，请重试',
    });
    return Promise.reject(error);
  },
);

class APIClient {
  get<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' });
  }

  post<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' });
  }

  put<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'PUT' });
  }

  delete<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' });
  }

  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      axiosInstance
        .request<any, AxiosResponse<Result>>(config)
        .then((res: AxiosResponse<Result>) => {
          resolve(res as unknown as Promise<T>);
        })
        .catch((e: Error | AxiosError) => {
          reject(e);
        });
    });
  }
}
export default new APIClient();
