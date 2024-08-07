import { setupWorker } from 'msw/browser';

import testmswApi from './handlers/_testmsw';
import testListApi from './handlers/_testList'

const handlers = [...testListApi, ...testmswApi];
export const worker = setupWorker(...handlers);
