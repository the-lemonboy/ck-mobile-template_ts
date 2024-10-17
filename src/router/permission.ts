// 外部库
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 项目内部模块
import store from 'storejs';

import router from '@/router';
import useRouteCacheStore from '@/stores/modules/routeCache';
import useRouteTransitionNameStore from '@/stores/modules/routeTransitionName';

// 类型导入
import type { EnhancedRouteLocation } from './types';
import type path from 'path';

router.beforeEach((to: EnhancedRouteLocation, from: any, next: any) => {
  NProgress.start();
  const token = store.get('token');
  if (!token && to.path !== '/login') {
    console.log('No token found, redirecting to login.');
    next({ path: '/login' });
  } else if (token && to.path === '/login') {
    next({ path: '/' });
  } else {
    const routeCacheStore = useRouteCacheStore();
    const routeTransitionNameStore = useRouteTransitionNameStore();

    // Route cache
    routeCacheStore.addRoute(to);

    if (to.meta.level > from.meta.level) {
      routeTransitionNameStore.setName('slide-fadein-left');
    } else if (to.meta.level < from.meta.level) {
      routeTransitionNameStore.setName('slide-fadein-right');
    } else {
      routeTransitionNameStore.setName('');
    }
    next(); // 继续路由
  }

  NProgress.done();
});
router.afterEach(() => {
  NProgress.done();
});
