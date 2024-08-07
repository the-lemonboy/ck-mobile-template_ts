import { setupWorker } from 'msw/browser';

import{handlers} from './handlers/_org';
// import userMockApi from './handlers/_user';

// const handlers = [...orgMockApi];
export const worker = setupWorker(...handlers);
