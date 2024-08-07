import { http, HttpResponse } from 'msw';

import { TEST_LIST } from '@/_mock/assets';

const testList = http.post('/api/list/test', async ({request}) => {
    const {page,limit} = await request.json()
    const data = TEST_LIST.slice((page-1)*limit,page*limit)
    return HttpResponse.json({
      status: 0,
      message: '',
      data: data,
    })
  }),

  export default [testList];