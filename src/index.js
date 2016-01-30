import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './components/App.vue';

Vue.use(VueRouter);

const Foo = Vue.extend({
  template: '<p>This is foo!</p>',
});

const Bar = Vue.extend({
  template: '<p>This is bar!</p>',
});

// Create our routes
const router = new VueRouter({
  history: true,
}).map({
  '/foo': {
    component: Foo,
  },
  '/bar': {
    component: Bar,
  },
});

router.start(App, '#app');
