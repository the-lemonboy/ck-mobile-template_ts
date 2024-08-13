import { setupWorker } from 'msw/browser';

import { mswmMockApi } from './handlers/_testmsw';
import { ListMockApi } from './handlers/list';

// const handlers = [...orgMockApi];
export const worker = setupWorker(...mswmMockApi, ...ListMockApi);
