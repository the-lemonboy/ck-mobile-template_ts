import request from '@/utils/request'

export async function queryProse(): Promise<any> {
  return request('/prose')
}
export async function queryTest(): Promise<any> {
  return request('/msw/test')
}