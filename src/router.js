import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import SignIn from './views/SignIn.vue';
import Articles from './views/Articles.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: SignIn,
    },
    {
      path: '/blog',
      name: 'blog',
      component: Articles,
    },
  ],
});
