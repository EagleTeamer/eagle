import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/docs',
      component: () => import('../views/Main'),
      redirect: '/docs/getting-started',
      children: [
        { path: 'getting-started', component: () => import('../views/getting-started.vue') },
        { path: 'button', component: () => import('../views/button.vue') },
        { path: 'scroller', component: () => import('../views/scroller.vue') },
        { path: 'popper', component: () => import('../views/popper.vue') },
      ]
    },
    { path: '*', redirect: '/docs' }
  ]
});
