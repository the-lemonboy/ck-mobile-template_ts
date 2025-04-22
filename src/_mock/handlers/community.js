import { http, HttpResponse } from 'msw';

import { faker } from '@faker-js/faker/locale/zh_CN';

function generateMockData(count){
  return Array.from({ length: count }, (_, index) => ({
    id: faker.string.uuid(),
    title: faker.lorem.words(3),
    description: faker.lorem.sentence(),
    image: faker.image.url(),
    username: faker.internet.userName(),
    avatar: faker.image.avatar(),
    likes: faker.number.int({ min: 0, max: 1000 }),
    type: Math.random() > 0.5 ? 'video' : 'image',
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  }));
}
const mockData = generateMockData(10);

export const communityMockApi = [
  http.get('/api/community/mock', (resolver) => {
    
    return HttpResponse.json({
      message: '请求成功',
      code:200,
      data: mockData,
      status: 1,
    }
  )
  }),
]