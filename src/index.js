import Vue from 'vue';
import VueRouter from 'vue-router';
import MarkdownIt from 'markdown-it';

import App from './components/App.vue';
import User from './pages/User.vue';
import Home from './pages/Home.vue';

import './optimizedScroll';

Vue.config.debug = true;
Vue.use(VueRouter);

// A simple filter to render markdown
const md = new MarkdownIt({
  linkify: true,
});
Vue.filter('markdown', (value) => md.render(value || 'Error rendering markdown'));

// Create our routes
const router = new VueRouter({
  history: true,
  linkActiveClass: 'active',
}).map({
  '/': {
    name: 'home',
    component: Home,
  },
  '/u/:username': {
    name: 'user',
    component: User,
  },
});

router.start(App, '#app');
