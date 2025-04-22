import { defineMock } from 'vite-plugin-mock-dev-server'
import { builder } from '../util'
import { faker } from '@faker-js/faker/locale/zh_CN';

function generateMockData(count: number): WaterfallItem[] {
  return Array.from({ length: count }, (_, index) => ({
    id: items.value.length + index,
    title: faker.lorem.words(3),
    description: faker.lorem.sentence(),
    image: faker.image.url(),
    type: Math.random() > 0.7 ? 'video' : 'image',
    videoUrl: Math.random() > 0.7 ? 'https://www.w3schools.com/html/mov_bbb.mp4' : undefined,
  }));
}
const mockData = generateMockData(10);
export default defineMock({
  url: '/api/community',
  delay: 100,
  body: () => {
    return builder(mockData)
  },
})
