import { createApp } from 'vue'
import router from './router.js'
import mitt from 'mitt'
import App from './App.vue'
import store from './store'
import './assets/css/style.css'
import '@fortawesome/fontawesome-free/css/all.css'
import {FontAwesomeIcon} from '@fortawesome/fontawesome-free'


const eventBus = mitt()
const app = createApp(App)
app.config.globalProperties.$eventBus = eventBus
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(store).use(router).mount('#app')
