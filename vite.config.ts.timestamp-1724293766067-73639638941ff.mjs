// vite.config.ts
import path2 from "node:path";
import process from "node:process";
import autoprefixer from "file:///Users/lemon/Desktop/ck-mobile-template_ts/node_modules/.pnpm/autoprefixer@10.4.20_postcss@8.4.41/node_modules/autoprefixer/lib/autoprefixer.js";
import viewport from "file:///Users/lemon/Desktop/ck-mobile-template_ts/node_modules/.pnpm/postcss-mobile-forever@4.1.5_postcss@8.4.41/node_modules/postcss-mobile-forever/index.js";
import tailwindcss from "file:///Users/lemon/Desktop/ck-mobile-template_ts/node_modules/.pnpm/tailwindcss@3.4.9_ts-node@10.9.2/node_modules/tailwindcss/lib/index.js";
import { loadEnv } from "file:///Users/lemon/Desktop/ck-mobile-template_ts/node_modules/.pnpm/vite@5.4.0_@types+node@20.14.14_sass@1.77.8_terser@5.31.5/node_modules/vite/dist/node/index.js";

// build/vite/index.ts
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { unheadVueComposablesImports } from "file:///Users/lemon/Desktop/ck-mobile-template_ts/node_modules/.pnpm/@unhead+vue@1.9.16_vue@3.4.37/node_modules/@unhead/vue/dist/index.mjs";
import legacy from "file:///Users/lemon/Desktop/ck-mobile-template_ts/node_modules/.pnpm/@vitejs+plugin-legacy@5.4.1_terser@5.31.5_vite@5.4.0/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import vue from "file:///Users/lemon/Desktop/ck-mobile-template_ts/node_modules/.pnpm/@vitejs+plugin-vue@5.1.2_vite@5.4.0_vue@3.4.37/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///Users/lemon/Desktop/ck-mobile-template_ts/node_modules/.pnpm/unplugin-auto-import@0.17.8_@vueuse+core@10.11.1_rollup@4.20.0/node_modules/unplugin-auto-import/dist/vite.js";
import { VantResolver } from "file:///Users/lemon/Desktop/ck-mobile-template_ts/node_modules/.pnpm/unplugin-vue-components@0.27.3_rollup@4.20.0_vue@3.4.37/node_modules/unplugin-vue-components/dist/resolvers.js";
import Components from "file:///Users/lemon/Desktop/ck-mobile-template_ts/node_modules/.pnpm/unplugin-vue-components@0.27.3_rollup@4.20.0_vue@3.4.37/node_modules/unplugin-vue-components/dist/vite.js";
import { VueRouterAutoImports } from "file:///Users/lemon/Desktop/ck-mobile-template_ts/node_modules/.pnpm/unplugin-vue-router@0.10.2_rollup@4.20.0_vue-router@4.4.3_vue@3.4.37/node_modules/unplugin-vue-router/dist/index.js";
import VueRouter from "file:///Users/lemon/Desktop/ck-mobile-template_ts/node_modules/.pnpm/unplugin-vue-router@0.10.2_rollup@4.20.0_vue-router@4.4.3_vue@3.4.37/node_modules/unplugin-vue-router/dist/vite.js";
import { VitePWA } from "file:///Users/lemon/Desktop/ck-mobile-template_ts/node_modules/.pnpm/vite-plugin-pwa@0.20.1_vite@5.4.0_workbox-build@7.1.1_workbox-window@7.1.0/node_modules/vite-plugin-pwa/dist/index.js";
import Sitemap from "file:///Users/lemon/Desktop/ck-mobile-template_ts/node_modules/.pnpm/vite-plugin-sitemap@0.6.2/node_modules/vite-plugin-sitemap/dist/index.js";
import VueDevTools from "file:///Users/lemon/Desktop/ck-mobile-template_ts/node_modules/.pnpm/vite-plugin-vue-devtools@7.3.7_rollup@4.20.0_vite@5.4.0_vue@3.4.37/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import VueI18nPlugin from "file:///Users/lemon/Desktop/ck-mobile-template_ts/node_modules/.pnpm/@intlify+unplugin-vue-i18n@4.0.0_rollup@4.20.0_vue-i18n@9.13.1/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";

// build/vite/vconsole.ts
import path from "node:path";
import { viteVConsole } from "file:///Users/lemon/Desktop/ck-mobile-template_ts/node_modules/.pnpm/vite-plugin-vconsole@2.1.1/node_modules/vite-plugin-vconsole/dist/main.mjs";
function createViteVConsole() {
  return viteVConsole({
    entry: [path.resolve("src/main.ts")],
    enabled: false,
    config: {
      maxLogNumber: 1e3,
      theme: "light"
    },
    // https://github.com/vadxq/vite-plugin-vconsole/issues/21
    dynamicConfig: {
      theme: `document.documentElement.classList.contains('dark') ? 'dark' : 'light'`
    },
    eventListener: `
      const targetElement = document.querySelector('html'); // \u62E9\u8981\u76D1\u542C\u7684\u5143\u7D20
      const observerOptions = {
        attributes: true, // \u76D1\u542C\u5C5E\u6027\u53D8\u5316
        attributeFilter: ['class'] // \u53EA\u76D1\u542Cclass\u5C5E\u6027\u53D8\u5316
      };

      // \u5B9A\u4E49\u56DE\u8C03\u51FD\u6570\u6765\u5904\u7406\u89C2\u5BDF\u5230\u7684\u53D8\u5316
      function handleAttributeChange(mutationsList) {
        for(let mutation of mutationsList) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (window && window.vConsole) {
              window.vConsole.dynamicChange.value = new Date().getTime();
            }
          }
        }
      }

      // \u521B\u5EFA\u89C2\u5BDF\u8005\u5B9E\u4F8B\u5E76\u4F20\u5165\u56DE\u8C03\u51FD\u6570
      const observer = new MutationObserver(handleAttributeChange);

      // \u5F00\u59CB\u89C2\u5BDF\u76EE\u6807\u5143\u7D20
      observer.observe(targetElement, observerOptions);

      // \u5F53\u4E0D\u518D\u9700\u8981\u89C2\u5BDF\u65F6\uFF0C\u505C\u6B62\u89C2\u5BDF
      // observer.disconnect();
    `
  });
}

// build/vite/index.ts
var __vite_injected_original_import_meta_url = "file:///Users/lemon/Desktop/ck-mobile-template_ts/build/vite/index.ts";
function createVitePlugins() {
  return [
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      extensions: [".vue"],
      routesFolder: "src/pages",
      dts: "src/typed-router.d.ts"
    }),
    vue(),
    // https://github.com/jbaubree/vite-plugin-sitemap
    Sitemap(),
    // https://github.com/pengzhanbo/vite-plugin-mock-dev-server
    // mockDevServerPlugin(),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ["vue"],
      resolvers: [VantResolver()],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "src/components.d.ts"
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/
      ],
      imports: [
        "vue",
        "vitest",
        "@vueuse/core",
        VueRouterAutoImports,
        {
          "vue-router/auto": ["useLink"],
          "@/utils/i18n": ["i18n", "locale"],
          "vue-i18n": ["useI18n"]
        },
        unheadVueComposablesImports
      ],
      dts: "src/auto-imports.d.ts",
      dirs: [
        "src/composables"
      ]
    }),
    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18nPlugin({
      // locale messages resource pre-compile option
      include: resolve(dirname(fileURLToPath(__vite_injected_original_import_meta_url)), "../../src/locales/**")
    }),
    legacy({
      targets: ["defaults", "not IE 11"]
    }),
    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    // UnoCSS(),
    // https://github.com/vadxq/vite-plugin-vconsole
    createViteVConsole(),
    // https://github.com/vuejs/devtools-next
    VueDevTools(),
    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
      manifest: {
        name: "vue3-vant-mobile",
        short_name: "vue3-vant-mobile",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    })
  ];
}

// build/vite/optimize.ts
var include = [
  "axios",
  "store",
  "echarts",
  "lodash-es",
  "resize-detector",
  "store/plugins/expire",
  "vant/es/cell-group/style/index",
  "vant/es/popup/style/index",
  "vant/es/picker/style/index",
  "vant/es/cell/style/index",
  "vant/es/switch/style/index",
  "vant/es/space/style/index",
  "vant/es/button/style/index",
  "vant/es/empty/style/index",
  "vant/es/icon/style/index",
  "vant/es/stepper/style/index"
];
var exclude = [
  "@iconify-json/carbon"
];

// vite.config.ts
var __vite_injected_original_dirname = "/Users/lemon/Desktop/ck-mobile-template_ts";
var vite_config_default = ({ mode }) => {
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
        "/dev": {
          target: "http://localhost:3000",
          changeOrigin: true,
          rewrite: (path3) => path3.replace(/^\/dev/, "")
        }
      }
    },
    resolve: {
      alias: {
        "~@": path2.join(__vite_injected_original_dirname, "./src"),
        "@": path2.join(__vite_injected_original_dirname, "./src"),
        "~": path2.join(__vite_injected_original_dirname, "./src/assets")
      }
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer(),
          tailwindcss(),
          viewport({
            appSelector: "#app",
            viewportWidth: 375,
            maxDisplayWidth: 600,
            rootContainingBlockSelectorList: ["van-tabbar", "van-popup"]
          })
        ]
      }
    },
    build: {
      cssCodeSplit: false,
      chunkSizeWarningLimit: 2048
    },
    optimizeDeps: { include, exclude }
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYnVpbGQvdml0ZS9pbmRleC50cyIsICJidWlsZC92aXRlL3Zjb25zb2xlLnRzIiwgImJ1aWxkL3ZpdGUvb3B0aW1pemUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbGVtb24vRGVza3RvcC9jay1tb2JpbGUtdGVtcGxhdGVfdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9sZW1vbi9EZXNrdG9wL2NrLW1vYmlsZS10ZW1wbGF0ZV90cy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbGVtb24vRGVza3RvcC9jay1tb2JpbGUtdGVtcGxhdGVfdHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJztcblxuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tICdhdXRvcHJlZml4ZXInO1xuaW1wb3J0IHZpZXdwb3J0IGZyb20gJ3Bvc3Rjc3MtbW9iaWxlLWZvcmV2ZXInO1xuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gJ3RhaWx3aW5kY3NzJztcbmltcG9ydCB7IGxvYWRFbnYgfSBmcm9tICd2aXRlJztcblxuaW1wb3J0IHsgY3JlYXRlVml0ZVBsdWdpbnMgfSBmcm9tICcuL2J1aWxkL3ZpdGUnO1xuaW1wb3J0IHsgZXhjbHVkZSwgaW5jbHVkZSB9IGZyb20gJy4vYnVpbGQvdml0ZS9vcHRpbWl6ZSc7XG5cbmltcG9ydCB0eXBlIHsgQ29uZmlnRW52LCBVc2VyQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IG1vZGUgfTogQ29uZmlnRW52KTogVXNlckNvbmZpZyA9PiB7XG4gIGNvbnN0IHJvb3QgPSBwcm9jZXNzLmN3ZCgpO1xuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHJvb3QpO1xuXG4gIHJldHVybiB7XG4gICAgYmFzZTogZW52LlZJVEVfQVBQX1BVQkxJQ19QQVRILFxuICAgIHBsdWdpbnM6IGNyZWF0ZVZpdGVQbHVnaW5zKCksXG5cbiAgICBzZXJ2ZXI6IHtcbiAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NjI1M1x1NUYwMFx1NkQ0Rlx1ODlDOFx1NTY2OFxuICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgIGhvc3Q6IHRydWUsXG4gICAgICBwb3J0OiA4MDgwLFxuICAgICAgcHJveHk6IHtcbiAgICAgICAgJy9kZXYnOiB7XG4gICAgICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2Rldi8sICcnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICAnfkAnOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9zcmMnKSxcbiAgICAgICAgJ0AnOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9zcmMnKSxcbiAgICAgICAgJ34nOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9zcmMvYXNzZXRzJyksXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBjc3M6IHtcbiAgICAgIHBvc3Rjc3M6IHtcbiAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgIGF1dG9wcmVmaXhlcigpLFxuICAgICAgICAgIHRhaWx3aW5kY3NzKCksXG4gICAgICAgICAgdmlld3BvcnQoe1xuICAgICAgICAgICAgYXBwU2VsZWN0b3I6ICcjYXBwJyxcbiAgICAgICAgICAgIHZpZXdwb3J0V2lkdGg6IDM3NSxcbiAgICAgICAgICAgIG1heERpc3BsYXlXaWR0aDogNjAwLFxuICAgICAgICAgICAgcm9vdENvbnRhaW5pbmdCbG9ja1NlbGVjdG9yTGlzdDogWyd2YW4tdGFiYmFyJywgJ3Zhbi1wb3B1cCddLFxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgYnVpbGQ6IHtcbiAgICAgIGNzc0NvZGVTcGxpdDogZmFsc2UsXG4gICAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDIwNDgsXG4gICAgfSxcblxuICAgIG9wdGltaXplRGVwczogeyBpbmNsdWRlLCBleGNsdWRlIH0sXG4gIH07XG59O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbGVtb24vRGVza3RvcC9jay1tb2JpbGUtdGVtcGxhdGVfdHMvYnVpbGQvdml0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2xlbW9uL0Rlc2t0b3AvY2stbW9iaWxlLXRlbXBsYXRlX3RzL2J1aWxkL3ZpdGUvaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2xlbW9uL0Rlc2t0b3AvY2stbW9iaWxlLXRlbXBsYXRlX3RzL2J1aWxkL3ZpdGUvaW5kZXgudHNcIjtpbXBvcnQgeyBkaXJuYW1lLCByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJ1xuaW1wb3J0IHsgdW5oZWFkVnVlQ29tcG9zYWJsZXNJbXBvcnRzIH0gZnJvbSAnQHVuaGVhZC92dWUnXG5pbXBvcnQgbGVnYWN5IGZyb20gJ0B2aXRlanMvcGx1Z2luLWxlZ2FjeSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuLy8gaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgeyBWYW50UmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IHsgVnVlUm91dGVyQXV0b0ltcG9ydHMgfSBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyJ1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyL3ZpdGUnXG4vLyBpbXBvcnQgbW9ja0RldlNlcnZlclBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1tb2NrLWRldi1zZXJ2ZXInXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xuaW1wb3J0IFNpdGVtYXAgZnJvbSAndml0ZS1wbHVnaW4tc2l0ZW1hcCdcbmltcG9ydCBWdWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXG5pbXBvcnQgVnVlSTE4blBsdWdpbiBmcm9tICdAaW50bGlmeS91bnBsdWdpbi12dWUtaTE4bi92aXRlJ1xuaW1wb3J0IHsgY3JlYXRlVml0ZVZDb25zb2xlIH0gZnJvbSAnLi92Y29uc29sZSdcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZpdGVQbHVnaW5zKCkge1xuICByZXR1cm4gW1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3N2YS91bnBsdWdpbi12dWUtcm91dGVyXG4gICAgVnVlUm91dGVyKHtcbiAgICAgIGV4dGVuc2lvbnM6IFsnLnZ1ZSddLFxuICAgICAgcm91dGVzRm9sZGVyOiAnc3JjL3BhZ2VzJyxcbiAgICAgIGR0czogJ3NyYy90eXBlZC1yb3V0ZXIuZC50cycsXG4gICAgfSksXG5cbiAgICB2dWUoKSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qYmF1YnJlZS92aXRlLXBsdWdpbi1zaXRlbWFwXG4gICAgU2l0ZW1hcCgpLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Blbmd6aGFuYm8vdml0ZS1wbHVnaW4tbW9jay1kZXYtc2VydmVyXG4gICAgLy8gbW9ja0RldlNlcnZlclBsdWdpbigpLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICBleHRlbnNpb25zOiBbJ3Z1ZSddLFxuICAgICAgcmVzb2x2ZXJzOiBbVmFudFJlc29sdmVyKCldLFxuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS9dLFxuICAgICAgZHRzOiAnc3JjL2NvbXBvbmVudHMuZC50cycsXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tYXV0by1pbXBvcnRcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgL1xcLlt0al1zeD8kLyxcbiAgICAgICAgL1xcLnZ1ZSQvLFxuICAgICAgICAvXFwudnVlXFw/dnVlLyxcbiAgICAgIF0sXG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgICd2dWUnLFxuICAgICAgICAndml0ZXN0JyxcbiAgICAgICAgJ0B2dWV1c2UvY29yZScsXG4gICAgICAgIFZ1ZVJvdXRlckF1dG9JbXBvcnRzLFxuICAgICAgICB7XG4gICAgICAgICAgJ3Z1ZS1yb3V0ZXIvYXV0byc6IFsndXNlTGluayddLFxuICAgICAgICAgICdAL3V0aWxzL2kxOG4nOiBbJ2kxOG4nLCAnbG9jYWxlJ10sXG4gICAgICAgICAgJ3Z1ZS1pMThuJzogWyd1c2VJMThuJ10sXG4gICAgICAgIH0sXG4gICAgICAgIHVuaGVhZFZ1ZUNvbXBvc2FibGVzSW1wb3J0cyxcbiAgICAgIF0sXG4gICAgICBkdHM6ICdzcmMvYXV0by1pbXBvcnRzLmQudHMnLFxuICAgICAgZGlyczogW1xuICAgICAgICAnc3JjL2NvbXBvc2FibGVzJyxcbiAgICAgIF0sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vaW50bGlmeS9idW5kbGUtdG9vbHMvdHJlZS9tYWluL3BhY2thZ2VzL3VucGx1Z2luLXZ1ZS1pMThuXG4gICAgVnVlSTE4blBsdWdpbih7XG4gICAgICAvLyBsb2NhbGUgbWVzc2FnZXMgcmVzb3VyY2UgcHJlLWNvbXBpbGUgb3B0aW9uXG4gICAgICBpbmNsdWRlOiByZXNvbHZlKGRpcm5hbWUoZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpKSwgJy4uLy4uL3NyYy9sb2NhbGVzLyoqJyksXG4gICAgfSksXG5cbiAgICBsZWdhY3koe1xuICAgICAgdGFyZ2V0czogWydkZWZhdWx0cycsICdub3QgSUUgMTEnXSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bm9jc3NcbiAgICAvLyBzZWUgdW5vLmNvbmZpZy50cyBmb3IgY29uZmlnXG4gICAgLy8gVW5vQ1NTKCksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdmFkeHEvdml0ZS1wbHVnaW4tdmNvbnNvbGVcbiAgICBjcmVhdGVWaXRlVkNvbnNvbGUoKSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy9kZXZ0b29scy1uZXh0XG4gICAgVnVlRGV2VG9vbHMoKSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXBsdWdpbi1wd2FcbiAgICBWaXRlUFdBKHtcbiAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxuICAgICAgaW5jbHVkZUFzc2V0czogWydmYXZpY29uLnN2ZycsICdzYWZhcmktcGlubmVkLXRhYi5zdmcnXSxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIG5hbWU6ICd2dWUzLXZhbnQtbW9iaWxlJyxcbiAgICAgICAgc2hvcnRfbmFtZTogJ3Z1ZTMtdmFudC1tb2JpbGUnLFxuICAgICAgICB0aGVtZV9jb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICBpY29uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9wd2EtMTkyeDE5Mi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3B3YS01MTJ4NTEyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvcHdhLTUxMng1MTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9sZW1vbi9EZXNrdG9wL2NrLW1vYmlsZS10ZW1wbGF0ZV90cy9idWlsZC92aXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbGVtb24vRGVza3RvcC9jay1tb2JpbGUtdGVtcGxhdGVfdHMvYnVpbGQvdml0ZS92Y29uc29sZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbGVtb24vRGVza3RvcC9jay1tb2JpbGUtdGVtcGxhdGVfdHMvYnVpbGQvdml0ZS92Y29uc29sZS50c1wiO2ltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCdcclxuaW1wb3J0IHsgdml0ZVZDb25zb2xlIH0gZnJvbSAndml0ZS1wbHVnaW4tdmNvbnNvbGUnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVml0ZVZDb25zb2xlKCkge1xyXG4gIHJldHVybiB2aXRlVkNvbnNvbGUoe1xyXG4gICAgZW50cnk6IFtwYXRoLnJlc29sdmUoJ3NyYy9tYWluLnRzJyldLFxyXG4gICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICBjb25maWc6IHtcclxuICAgICAgbWF4TG9nTnVtYmVyOiAxMDAwLFxyXG4gICAgICB0aGVtZTogJ2xpZ2h0JyxcclxuICAgIH0sXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdmFkeHEvdml0ZS1wbHVnaW4tdmNvbnNvbGUvaXNzdWVzLzIxXHJcbiAgICBkeW5hbWljQ29uZmlnOiB7XHJcbiAgICAgIHRoZW1lOiBgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGFyaycpID8gJ2RhcmsnIDogJ2xpZ2h0J2AsXHJcbiAgICB9LFxyXG4gICAgZXZlbnRMaXN0ZW5lcjogYFxyXG4gICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpOyAvLyBcdTYyRTlcdTg5ODFcdTc2RDFcdTU0MkNcdTc2ODRcdTUxNDNcdTdEMjBcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXJPcHRpb25zID0ge1xyXG4gICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsIC8vIFx1NzZEMVx1NTQyQ1x1NUM1RVx1NjAyN1x1NTNEOFx1NTMxNlxyXG4gICAgICAgIGF0dHJpYnV0ZUZpbHRlcjogWydjbGFzcyddIC8vIFx1NTNFQVx1NzZEMVx1NTQyQ2NsYXNzXHU1QzVFXHU2MDI3XHU1M0Q4XHU1MzE2XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBcdTVCOUFcdTRFNDlcdTU2REVcdThDMDNcdTUxRkRcdTY1NzBcdTY3NjVcdTU5MDRcdTc0MDZcdTg5QzJcdTVCREZcdTUyMzBcdTc2ODRcdTUzRDhcdTUzMTZcclxuICAgICAgZnVuY3Rpb24gaGFuZGxlQXR0cmlidXRlQ2hhbmdlKG11dGF0aW9uc0xpc3QpIHtcclxuICAgICAgICBmb3IobGV0IG11dGF0aW9uIG9mIG11dGF0aW9uc0xpc3QpIHtcclxuICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycgJiYgbXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2NsYXNzJykge1xyXG4gICAgICAgICAgICBpZiAod2luZG93ICYmIHdpbmRvdy52Q29uc29sZSkge1xyXG4gICAgICAgICAgICAgIHdpbmRvdy52Q29uc29sZS5keW5hbWljQ2hhbmdlLnZhbHVlID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFx1NTIxQlx1NUVGQVx1ODlDMlx1NUJERlx1ODAwNVx1NUI5RVx1NEY4Qlx1NUU3Nlx1NEYyMFx1NTE2NVx1NTZERVx1OEMwM1x1NTFGRFx1NjU3MFxyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGhhbmRsZUF0dHJpYnV0ZUNoYW5nZSk7XHJcblxyXG4gICAgICAvLyBcdTVGMDBcdTU5Q0JcdTg5QzJcdTVCREZcdTc2RUVcdTY4MDdcdTUxNDNcdTdEMjBcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXRFbGVtZW50LCBvYnNlcnZlck9wdGlvbnMpO1xyXG5cclxuICAgICAgLy8gXHU1RjUzXHU0RTBEXHU1MThEXHU5NzAwXHU4OTgxXHU4OUMyXHU1QkRGXHU2NUY2XHVGRjBDXHU1MDVDXHU2QjYyXHU4OUMyXHU1QkRGXHJcbiAgICAgIC8vIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgIGAsXHJcbiAgfSlcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9sZW1vbi9EZXNrdG9wL2NrLW1vYmlsZS10ZW1wbGF0ZV90cy9idWlsZC92aXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbGVtb24vRGVza3RvcC9jay1tb2JpbGUtdGVtcGxhdGVfdHMvYnVpbGQvdml0ZS9vcHRpbWl6ZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbGVtb24vRGVza3RvcC9jay1tb2JpbGUtdGVtcGxhdGVfdHMvYnVpbGQvdml0ZS9vcHRpbWl6ZS50c1wiO2NvbnN0IGluY2x1ZGUgPSBbXG4gICdheGlvcycsXG4gICdzdG9yZScsXG4gICdlY2hhcnRzJyxcbiAgJ2xvZGFzaC1lcycsXG4gICdyZXNpemUtZGV0ZWN0b3InLFxuICAnc3RvcmUvcGx1Z2lucy9leHBpcmUnLFxuICAndmFudC9lcy9jZWxsLWdyb3VwL3N0eWxlL2luZGV4JyxcbiAgJ3ZhbnQvZXMvcG9wdXAvc3R5bGUvaW5kZXgnLFxuICAndmFudC9lcy9waWNrZXIvc3R5bGUvaW5kZXgnLFxuICAndmFudC9lcy9jZWxsL3N0eWxlL2luZGV4JyxcbiAgJ3ZhbnQvZXMvc3dpdGNoL3N0eWxlL2luZGV4JyxcbiAgJ3ZhbnQvZXMvc3BhY2Uvc3R5bGUvaW5kZXgnLFxuICAndmFudC9lcy9idXR0b24vc3R5bGUvaW5kZXgnLFxuICAndmFudC9lcy9lbXB0eS9zdHlsZS9pbmRleCcsXG4gICd2YW50L2VzL2ljb24vc3R5bGUvaW5kZXgnLFxuICAndmFudC9lcy9zdGVwcGVyL3N0eWxlL2luZGV4Jyxcbl1cblxuY29uc3QgZXhjbHVkZSA9IFtcbiAgJ0BpY29uaWZ5LWpzb24vY2FyYm9uJyxcbl1cblxuZXhwb3J0IHsgaW5jbHVkZSwgZXhjbHVkZSB9XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdULE9BQU9BLFdBQVU7QUFDalUsT0FBTyxhQUFhO0FBRXBCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sY0FBYztBQUNyQixPQUFPLGlCQUFpQjtBQUN4QixTQUFTLGVBQWU7OztBQ042UyxTQUFTLFNBQVMsZUFBZTtBQUN0VyxTQUFTLHFCQUFxQjtBQUM5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QUFBLFVBQ1g7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFDRjs7O0FFckgyVSxJQUFNLFVBQVU7QUFBQSxFQUN6VjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGO0FBRUEsSUFBTSxVQUFVO0FBQUEsRUFDZDtBQUNGOzs7QUhyQkEsSUFBTSxtQ0FBbUM7QUFhekMsSUFBTyxzQkFBUSxDQUFDLEVBQUUsS0FBSyxNQUE2QjtBQUNsRCxRQUFNLE9BQU8sUUFBUSxJQUFJO0FBQ3pCLFFBQU0sTUFBTSxRQUFRLE1BQU0sSUFBSTtBQUU5QixTQUFPO0FBQUEsSUFDTCxNQUFNLElBQUk7QUFBQSxJQUNWLFNBQVMsa0JBQWtCO0FBQUEsSUFFM0IsUUFBUTtBQUFBO0FBQUEsTUFFTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTCxRQUFRO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixjQUFjO0FBQUEsVUFDZCxTQUFTLENBQUNDLFVBQVNBLE1BQUssUUFBUSxVQUFVLEVBQUU7QUFBQSxRQUM5QztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxNQUFNQSxNQUFLLEtBQUssa0NBQVcsT0FBTztBQUFBLFFBQ2xDLEtBQUtBLE1BQUssS0FBSyxrQ0FBVyxPQUFPO0FBQUEsUUFDakMsS0FBS0EsTUFBSyxLQUFLLGtDQUFXLGNBQWM7QUFBQSxNQUMxQztBQUFBLElBQ0Y7QUFBQSxJQUVBLEtBQUs7QUFBQSxNQUNILFNBQVM7QUFBQSxRQUNQLFNBQVM7QUFBQSxVQUNQLGFBQWE7QUFBQSxVQUNiLFlBQVk7QUFBQSxVQUNaLFNBQVM7QUFBQSxZQUNQLGFBQWE7QUFBQSxZQUNiLGVBQWU7QUFBQSxZQUNmLGlCQUFpQjtBQUFBLFlBQ2pCLGlDQUFpQyxDQUFDLGNBQWMsV0FBVztBQUFBLFVBQzdELENBQUM7QUFBQSxRQUNIO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUVBLE9BQU87QUFBQSxNQUNMLGNBQWM7QUFBQSxNQUNkLHVCQUF1QjtBQUFBLElBQ3pCO0FBQUEsSUFFQSxjQUFjLEVBQUUsU0FBUyxRQUFRO0FBQUEsRUFDbkM7QUFDRjsiLAogICJuYW1lcyI6IFsicGF0aCIsICJwYXRoIl0KfQo=
