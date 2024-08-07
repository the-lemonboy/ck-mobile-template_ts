import { http, HttpResponse } from 'msw';

import { ORG_LIST } from '@/_mock/assets';

// const orgList = http.get(`/msw/test`, () => {
//   return  HttpResponse.text('Hello world!')
// });

// export default [orgList];
 const testmsw = http.get('/api/msw/test', (resolver) => {
    return HttpResponse.json({
      status: 0,
      message: '',
      data: ORG_LIST,
    })
  })
export default [testmsw];