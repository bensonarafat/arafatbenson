import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import vueWriter from 'vue-writer'
import router  from './router'
import anime from 'animejs'
import 'flowbite';
// import VueScrollReveal from 'vue-scroll-reveal';

createApp(App)
.use(router)
.use(anime)
.use(vueWriter)
// .use(VueScrollReveal)
.mount('#app')
