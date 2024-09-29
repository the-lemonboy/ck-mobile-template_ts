import { createHead } from '@unhead/vue';
import { createApp } from 'vue';

import App from '@/App.vue';
import router from '@/router';
import pinia from '@/stores';
import '@/router/permission';
// import 'virtual:uno.css'
import '@/styles/app.scss';
import '@/styles/tailwindcss.css';
import { i18n } from '@/utils/i18n';

// Vant 桌面端适配
import '@vant/touch-emulator';

import { worker } from './_mock';

import { VueQueryPlugin } from '@tanstack/vue-query';

/* --------------------------------
Vant 中有个别组件是以函数的形式提供的，
包括 Toast，Dialog，Notify 和 ImagePreview 组件。
在使用函数组件时，unplugin-vue-components
无法自动引入对应的样式，因此需要手动引入样式。
------------------------------------- */
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
import 'vant/es/notify/style';
import 'vant/es/image-preview/style';

worker.start({ onUnhandledRequest: 'bypass' });

const app = createApp(App);
const head = createHead();

app.use(head);
app.use(router);
app.use(pinia);
app.use(i18n);
app.use(VueQueryPlugin);
app.mount('#app');
