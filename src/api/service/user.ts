import APIClient from '../request';

import type { LogininReq } from '../requestTypes/user';
import type { UserInfoRes } from '../responseTypes/user';

type ResData<T> = {
  data: T;
  msg: string;
  status: number;
};
export enum UserApi {
  LoginUp = '/api/loginup',
}

const LoginIn = (data: LogininReq) =>
  APIClient.post<ResData<UserInfoRes>>({ url: UserApi.LoginUp, data });

export default {
  LoginIn,
};
