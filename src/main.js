import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

import App from './App.vue';
import BaseHome from './pages/BaseHome.vue';
import BaseStartups from './pages/BaseStartups.vue';
import BaseTreks from './pages/BaseTreks.vue';
import BaseTrekPost from './pages/BaseTrekPost.vue';
import BaseAbout from './pages/BaseAbout.vue';
import NotFound from './pages/NotFound.vue';

import './css/main.css'

const routes = [
  { path: '/', component: BaseHome },
  { path: '/startups', component: BaseStartups },
  { path: '/treks', component: BaseTreks },
  { path: '/treks/exploring-high-sierra-trail', component: BaseTrekPost },
  { path: '/treks/random-walk-in-sierras', component: BaseTrekPost },
  { path: '/treks/from-happy-isles-to-reds-meadow', component: BaseTrekPost },
  { path: '/about', component: BaseAbout },
  { path: "/:catchAll(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)
app.mount('#app')

