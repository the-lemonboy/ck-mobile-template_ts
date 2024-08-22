import request from '../request';

export interface GetListReq {
  limit: number;
  page: number;
}
export async function getList(data: GetListReq): Promise<any> {
  return request('/api/unlimitList', {
    method: 'POST',
    data,
  });
}
