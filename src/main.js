import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

import App from './App.vue';
import BaseHome from './pages/BaseHome.vue';
import BaseWork from './pages/BaseWork.vue';
import BaseAbout from './pages/BaseAbout.vue';
import NotFound from './pages/NotFound.vue';

import './css/main.css'

const routes = [
  { path: '/', component: BaseHome },
  { path: '/work', component: BaseWork },
  { path: '/about', component: BaseAbout },
  { path: "/:catchAll(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, top: 30, }
    }
  },
})

const app = createApp(App)

app.use(router)
app.mount('#app')

