import request from '../request';

export async function GetMockData(): Promise<any> {
  return request('/api/msw/mock', {
    method: 'Get',
  });
}
