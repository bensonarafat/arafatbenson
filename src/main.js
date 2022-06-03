import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueWriter from 'vue-writer'
import router  from './router'
import anime from 'animejs'

createApp(App)
.use(router)
.use(anime)
.use(VueWriter)
.mount('#app')
