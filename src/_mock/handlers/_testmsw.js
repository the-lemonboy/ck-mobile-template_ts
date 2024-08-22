import { http, HttpResponse } from 'msw';

import { FAKER_DATA } from '@/_mock/assets';

// const orgList = http.get(`/msw/test`, () => {
//   return  HttpResponse.text('Hello world!')
// });

// export default [orgList];
export const mswmMockApi = [
  http.get('/dev/api/msw/mock', (resolver) => {
    return HttpResponse.json({
      message: '请求成功',
      code:200,
      data: FAKER_DATA,
    })
  }),
]