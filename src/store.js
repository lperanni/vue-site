import Vue from 'vue';
import Vuex from 'vuex';
// import articles from './articles';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
    user: {},
    isLoggedIn: false,
  },
  mutations: {
    addArticle(state, article) {
      state.articles.unshift(article);
    },
    logIn(state, userInfo) {
      state.user = userInfo;
      this.state.isLoggedIn = true;
    },
  },
  actions: {

  },
});
