import { defineStore } from 'pinia';

import type { EnhancedRouteLocation } from '@/router/types';

import type { RouteRecordName } from 'vue-router';

const useRouteCacheStore = defineStore('route-cache', () => {
  const routeCaches = ref<RouteRecordName[]>([]);

  const addRoute = (route: EnhancedRouteLocation) => {
    if (routeCaches.value.includes(route.name)) return;

    if (route?.meta?.keepAlive) routeCaches.value.push(route.name);
  };

  return {
    routeCaches,
    addRoute,
  };
});

export default useRouteCacheStore;
