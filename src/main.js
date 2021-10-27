import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store.js';
import router from './router/router.js';
import axios from 'axios'
import VueAxios from 'vue-axios'
import { i18n } from './plugins/i18n.js'
import ScrollAnimation from './directives/scrollanimation.js'
import { createHead } from '@vueuse/head'
import IconButton from '../src/components/controls/IconButton.vue'
import VueIcon from '../src/components/controls/VueIcon.vue'
import SVGIcon from '../src/components/controls/SVGIcon.vue'
import ListButton from '../src/components/controls/ListButton.vue'
import TextField from '../src/components/controls/TextField.vue'
const head = createHead()

const app = createApp(App)
app.directive('scrollanimation', ScrollAnimation)
app.component('icon-button', IconButton)
app.component('list-button', ListButton)
app.component('vue-icon', VueIcon)
app.component('icon', SVGIcon)
app.component('text-field', TextField)
app.use(head)
app.use(store)
app.use(router)
app.use(VueAxios, axios)
app.use(i18n)
app.config.productionTip = false
router.isReady().then(() => {
    app.mount('#app');
})
