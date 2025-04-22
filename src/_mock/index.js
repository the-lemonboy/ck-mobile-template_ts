import { setupWorker } from 'msw/browser';

import { mswmMockApi } from './handlers/_testmsw';
import { ListMockApi } from './handlers/list';
import { UserMockApi } from './handlers/user';
import {communityMockApi} from './handlers/community'
// const handlers = [...orgMockApi];
export const worker = setupWorker(...mswmMockApi, ...ListMockApi,...UserMockApi,...communityMockApi);
