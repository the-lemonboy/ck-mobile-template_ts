import { faker } from '@faker-js/faker';


/**
 * Organization data mock
 */
export const ORG_LIST = [
  {
    id: '1',
    name: 'East China Branch',
    status: 'enable',
    desc: faker.lorem.words(),
    order: 1,
    children: [
      { id: '1-1', name: 'R&D Department', status: 'disable', desc: '', order: 1 },
      { id: '1-2', name: 'Marketing Department', status: 'enable', desc: '', order: 2 },
      { id: '1-3', name: 'Finance Department', status: 'enable', desc: '', order: 3 },
    ],
  },
  {
    id: '2',
    name: 'South China Branch',
    status: 'enable',
    desc: faker.lorem.words(),
    order: 2,
    children: [
      { id: '2-1', name: 'R&D Department', status: 'disable', desc: '', order: 1 },
      { id: '2-2', name: 'Marketing Department', status: 'enable', desc: '', order: 2 },
      { id: '2-3', name: 'Finance Department', status: 'enable', desc: '', order: 3 },
    ],
  }
];

export const TEST_LIST = [
  {
    title:faker.lorem.text({max: 20}),
    content:faker.lorem.paragraph({max: 10}),
    img: faker.image.abstract({width: 20, height: 20}),
    id: faker.string.uuid(),
    like: Number(faker.number.int({ min: 0, max: 1000 })),
  },
   {
    title:faker.lorem.text({max: 20}),
    content:faker.lorem.paragraph({max: 10}),
    img: faker.image.abstract({width: 100, height: 100}),
    id: faker.string.uuid(),
    like: Number(faker.number.int({ min: 0, max: 1000 })),
  },
  {
    title:faker.lorem.text({max: 20}),
    content:faker.lorem.paragraph({max: 10}),
    img: faker.image.abstract({width: 100, height: 100}),
    id: faker.string.uuid(),
    like: Number(faker.number.int({ min: 0, max: 1000 })),
  },
  {
    title:faker.lorem.text({max: 20}),
    content:faker.lorem.paragraph({max: 10}),
    img: faker.image.abstract({width: 100, height: 100}),
    id: faker.string.uuid(),
    like: Number(faker.number.int({ min: 0, max: 1000 })),
  },
  {
    title:faker.lorem.text({max: 20}),
    content:faker.lorem.paragraph({max: 10}),
    img: faker.image.abstract({width: 100, height: 100}),
    id: faker.string.uuid(),
    like: Number(faker.number.int({ min: 0, max: 1000 })),
  },
  {
    title:faker.lorem.text({max: 20}),
    content:faker.lorem.paragraph({max: 10}),
    img: faker.image.abstract({width: 100, height: 100}),
    id: faker.string.uuid(),
    like: Number(faker.number.int({ min: 0, max: 1000 })),
  },
  {
    title:faker.lorem.text({max: 20}),
    content:faker.lorem.paragraph({max: 10}),
    img: faker.image.abstract({width: 100, height: 100}),
    id: faker.string.uuid(),
    like: Number(faker.number.int({ min: 0, max: 1000 })),
  },
  {
    title:faker.lorem.text({max: 20}),
    content:faker.lorem.paragraph({max: 10}),
    img: faker.image.abstract({width: 100, height: 100}),
    id: faker.string.uuid(),
    like: Number(faker.number.int({ min: 0, max: 1000 })),
  },
  {
    title:faker.lorem.text({max: 20}),
    content:faker.lorem.paragraph({max: 10}),
    img: faker.image.abstract({width: 100, height: 100}),
    id: faker.string.uuid(),
    like: Number(faker.number.int({ min: 0, max: 1000 })),
  },
  {
    title:faker.lorem.text({max: 20}),
    content:faker.lorem.paragraph({max: 10}),
    img: faker.image.abstract({width: 100, height: 100}),
    id: faker.string.uuid(),
    like: Number(faker.number.int({ min: 0, max: 1000 })),
  },
  {
    title:faker.lorem.text({max: 20}),
    content:faker.lorem.paragraph({max: 10}),
    img: faker.image.abstract({width: 100, height: 100}),
    id: faker.string.uuid(),
    like: Number(faker.number.int({ min: 0, max: 1000 })),
  },
  {
    title:faker.lorem.text({max: 20}),
    content:faker.lorem.paragraph({max: 10}),
    img: faker.image.abstract({width: 100, height: 100}),
    id: faker.string.uuid(),
    like: Number(faker.number.int({ min: 0, max: 1000 })),
  },
  {
    title:faker.lorem.text({max: 20}),
    content:faker.lorem.paragraph({max: 10}),
    img: faker.image.abstract({width: 100, height: 100}),
    id: faker.string.uuid(),
    like: Number(faker.number.int({ min: 0, max: 1000 })),
  },
]
