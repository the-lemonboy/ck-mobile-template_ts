// 外部库
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 项目内部模块
import router from '@/router';
import useRouteCacheStore from '@/stores/modules/routeCache';
import useRouteTransitionNameStore from '@/stores/modules/routeTransitionName';

// 类型导入
import type { EnhancedRouteLocation } from './types';

router.beforeEach((to: EnhancedRouteLocation, from: any, next: any) => {
  NProgress.start();
  // console.log(store.get('token'));
  if (!store.get('token')) {
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
    next();
  } else {
    console.log('No token found, redirecting to login.');
    next({ name: 'login' });
  }

  NProgress.done();
});
router.afterEach(() => {
  NProgress.done();
});
