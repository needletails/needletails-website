import { createApp } from 'vue';
import App from './App.vue';
import store from './store/store.js';
import router from './router/router.js';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { i18n } from './plugins/i18n.js';
import ScrollAnimation from './directives/scrollanimation.js';
import { createHead } from '@vueuse/head';
import IconButton from '../src/components/controls/IconButton.vue';
import SVGIcon from '../src/components/controls/SVGIcon.vue';

const head = createHead();

const app = createApp(App);
app.directive('scrollanimation', ScrollAnimation);
app.component('IconButton', IconButton);
app.component('Icon', SVGIcon);
app.component('IconButton', IconButton);
app.use(head);
app.use(store);
app.use(router);
app.use(VueAxios, axios);
app.use(i18n);
app.config.productionTip = false;
router.isReady().then(() => {
  app.mount('#app');
});
