import { http, HttpResponse } from "msw";
import { USER_INFO } from "../assets";



export const UserMockApi = [
  http.post('/api/loginup', async ({ request }) => {
    const { username, password } = await request.json();
    if (username === USER_INFO['username'] && password === USER_INFO['password']) {
      return HttpResponse.json({
        status: 0,
        message: '请求成功',
        // 排除敏感信息
        data: USER_INFO,
        code: 200,
      });
    } else {
      return HttpResponse.json({
        status: 1,
        message: '账号或密码错误',
        data: null,
        code: 400,
      });
    }
  }),

];