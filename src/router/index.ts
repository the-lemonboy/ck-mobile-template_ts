import NProgress from 'nprogress';
import { createRouter, createWebHistory } from 'vue-router/auto';
import { routes } from 'vue-router/auto-routes';

NProgress.configure({ showSpinner: true, parent: '#app' });

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_PUBLIC_PATH),
  routes,
});

// router.beforeEach((to: EnhancedRouteLocation, from: any, next: any) => {
//   NProgress.start();

//   const routeCacheStore = useRouteCacheStore();
//   const routeTransitionNameStore = useRouteTransitionNameStore();

//   // Route cache
//   routeCacheStore.addRoute(to);

//   if (to.meta.level > from.meta.level) routeTransitionNameStore.setName('slide-fadein-left');
//   else if (to.meta.level < from.meta.level) routeTransitionNameStore.setName('slide-fadein-right');
//   else routeTransitionNameStore.setName('');

//   next();
// });

// router.afterEach(() => {
//   NProgress.done();
// });

export default router;
