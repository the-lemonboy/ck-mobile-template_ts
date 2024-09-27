import path from 'node:path';
import process from 'node:process';

import autoprefixer from 'autoprefixer';
import viewport from 'postcss-mobile-forever';
import tailwindcss from 'tailwindcss';
import { loadEnv } from 'vite';

import { createVitePlugins } from './build/vite';
import { exclude, include } from './build/vite/optimize';

import type { ConfigEnv, UserConfig } from 'vite';

export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);

  return {
    base: env.VITE_APP_PUBLIC_PATH,
    plugins: createVitePlugins(),

    server: {
      // 自动打开浏览器
      open: true,
      host: true,
      port: 8080,
      proxy: {
        '/dev': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (value) => value.replace(/^\/dev/, ''),
        },
      },
    },
    resolve: {
      alias: {
        '~@': path.join(__dirname, './src'),
        '@': path.join(__dirname, './src'),
        '~': path.join(__dirname, './src/assets'),
        '#': path.join(__dirname, './types'),
      },
    },

    css: {
      postcss: {
        plugins: [
          autoprefixer(),
          tailwindcss(),
          viewport({
            appSelector: '#app',
            viewportWidth: 375,
            maxDisplayWidth: 600,
            rootContainingBlockSelectorList: ['van-tabbar', 'van-popup'],
          }),
        ],
      },
    },

    build: {
      cssCodeSplit: false,
      chunkSizeWarningLimit: 2048,
    },

    optimizeDeps: { include, exclude },
  };
};
