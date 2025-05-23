import { defineMockData } from 'vite-plugin-mock-dev-server'
import { faker } from '@faker-js/faker';
// defineMockData，用于在 mock 文件中使用 data.ts 作为共享数据源。
export default defineMockData('proses', [
  '🔖 躲在某一时间，想念一段时光的掌纹;躲在某一地点，想念一个站在来路也站在去路的，让我牵挂的人。',
  '🔖 天空一碧如洗，灿烂的阳光正从密密的松针的缝隙间射下来，形成一束束粗粗细细的光柱，把飘荡着轻纱般薄雾的林荫照得通亮。',
  '🔖 这一次相遇，美得彻骨，美得震颤，美得孤绝，美得惊艳。',
  '🔖 沉默的状态，能让我感觉到呼吸的自由和自己原来就处于的本色位置。',
  '🔖 青春，是一包象征着阳光的向日葵种子，在现在洒下，就会在未来得到收获，那一株株饱含青春的花朵。',
  '🔖 燕子去了，有再来的时候;杨柳枯了，有再青的时候;桃花谢了，有再开的时候。但是，聪明的，你告诉我，我们的日子为什么一去不复返呢?',
  '🔖 毕业了，青春在无形之中离去，我们即将翻开人生的另一页。',
  '🔖 成长，是每个孩子的权力，也是他们必经的征程，或平坦、或崎岖，有悲欢，有离合。',
  '🔖 旧时光里的人和事，琐碎而零乱。我的记忆很模糊，好像大部分都成了一种温馨的符号，静静的沉在我心底。',
  '🔖 生活是一部大百科全书，包罗万象;生活是一把六弦琴，弹奏出多重美妙的旋律：生活是一座飞马牌大钟，上紧发条，便会使人获得浓缩的生命。',
  '🔖 毕业了，身边的朋友一个个各奔东西，开始学会自己撑起生命的暖色。',
  '🔖 已经走到尽头的东西，重生也不过是再一次的消亡。就像所有的开始，其实都只是一个写好了的结局。',
  '🔖 下午茶的芬香熏陶着房内的任何一个角落，午后的阳光透过窗帘的间隙洒在木制的桌面上，一份思念随着红茶顺滑至心中。',
  '🔖 这里再不是我们的校园，当我们就此离开我们的青葱岁月。',
  '🔖 很久找你，一直没有找到，微风吹过的时候，我深深的呼吸，才感觉到你也在陪伴着我呼吸。',
])

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
 const items = defineMockData('items', generateMockData(10))
export const community = defineMockData('community', [
...items
])
