import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import SignIn from './views/SignIn.vue';
import Blog from './views/Blog.vue';
import Write from './views/Write.vue';
import Article from './views/Article.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
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
      component: Blog,
    },
    {
      path: '/write',
      name: 'write',
      component: Write,
    },
    {
      path: '/article',
      name: 'article',
      component: Article,
      props: true,
    },
  ],
});
