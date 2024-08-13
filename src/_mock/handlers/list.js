import { http, HttpResponse } from 'msw';

import { TEST_LIST } from '@/_mock/assets';

export const ListMockApi = [
  http.post('/dev/api/unlimitList', async ({ request }) => {
    
    const { page, limit } = await request.json();
    console.log(page,limit)
    const data = TEST_LIST.slice((page - 1) * limit, page * limit);
    return HttpResponse.json({
      status: 0,
      message: '',
      data: data,
      code:200
    });
  }),
];
