import request from  "@/utils/request";
export interface getListReq {
  limit: number,
  page: number
}
export async function getList(data:getListReq): Promise<any> {
  return request('/api/unlimitList', {
    method: 'POST',
    data
  })
}