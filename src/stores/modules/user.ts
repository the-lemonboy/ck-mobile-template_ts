import { defineStore } from 'pinia';
import store from 'storejs';

import type { UserInfoRes } from '@/api/responseTypes/user';
import LoginService from '@/api/service/user';

export const useLoginStore = defineStore('login', {
  state: () => {
    return {
      token: '',
      userInfo: {} as UserInfoRes,
    };
  },
  actions: {
    async GetUserInfo(username: string, password: string) {
      const res = await LoginService.LoginIn({ username, password });
      console.log(res);
      if (res.status === 200) {
        this.userInfo = res.data.data;
        this.token = res.data.data.token; // 更新 store 的 token
        console.log(this.token);
        store.set('token', this.token);
      }
    },
  },
});
