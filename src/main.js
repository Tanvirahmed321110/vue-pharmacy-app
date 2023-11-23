import { createApp } from 'vue'
import router from './router.js'
import mitt from 'mitt'
import App from './App.vue'
import store from './store'
import './assets/css/style.css'


const eventBus = mitt()
const app = createApp(App)
app.config.globalProperties.$eventBus = eventBus


app.use(store).use(router).mount('#app')
