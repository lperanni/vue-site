import Vue from 'vue';
import Vuex from 'vuex';
import articles from './articles';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [...articles],
  },
  mutations: {
    addArticle(state, article) {
      state.articles.unshift(article);
    },
  },
  actions: {

  },
});
