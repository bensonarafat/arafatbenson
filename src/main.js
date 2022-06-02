import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueWriter from 'vue-writer'


createApp(App)
.use(VueWriter)
.mount('#app')
