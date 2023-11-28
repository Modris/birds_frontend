import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.js"
import { autoAnimatePlugin } from '../node_modules/@formkit/auto-animate/vue'

createApp(App).use(router,autoAnimatePlugin).mount('#app')
//createApp(App).mount('#app')
