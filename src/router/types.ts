import type { RouteLocationNormalized } from 'vue-router';

export interface EnhancedRouteLocation extends Omit<RouteLocationNormalized, 'meta'> {
  meta: {
    level?: number;
    name?: string;
    keepAlive?: boolean;
  };
}
