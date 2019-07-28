<template>
 <div class="article" @click="gotoArticle">
   <div class="article-text">
    <h2>{{ title }}</h2>
    <p>{{ shortText }}</p>
   </div>
  <div class="goto-btn">
    <button>Read</button>
  </div>
 </div>
</template>

<script>

import store from '../store';
import router from '../router';

export default {
  name: 'FrontArticle',
  data() {
    return {
      title: store.state.articles[0].title,
      text: store.state.articles[0].shortDesctription,
    };
  },
  methods: {
    gotoArticle() {
      router.push({ name: 'article', params: { title: this.title, articleBody: this.text, author: store.state.user.userName } });
    },
  },
  computed: {
    shortText() {
      if (this.text.length > 300) {
        return `${this.text.substring(0, 300)}...`;
      }
      return this.text;
    },
  },
};
</script>

<style scoped>

  .article{
    border: 5px solid #ea00d9;
    justify-content: flex-end;
    width: 50%;
    margin: 20px;
    padding: 50px;
    height: fit-content;
  }

  .article-text h2{
    margin-bottom: 50px;
  }

  .article-text{
    font-size: 90%;
    display: inline-block;
    width: 100%;
    margin-right: 20px;
  }

  .article-text p{
    line-height: 30px;
    word-wrap: break-word;
    max-width: 90%;
  }

  .goto-btn{
    display: inline-block;
    margin-top: 40px;
    vertical-align: baseline;
  }

  button{
    font-size: 120%;
    padding: 20px;
    background-color: #711c91;
    border: none;

  }
  button:hover{
    cursor: pointer;
  }

</style>
