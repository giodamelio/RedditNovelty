import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './components/App.vue';
import User from './pages/User.vue';

Vue.config.debug = true
Vue.use(VueRouter);

// Create our routes
const router = new VueRouter({
  history: true,
  linkActiveClass: 'active',
}).map({
  '/u/:username': {
    component: User,
  },
});

router.start(App, '#app');
