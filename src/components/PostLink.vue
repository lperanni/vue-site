<template>
  <div class="post-link" @click="gotoArticle">
    <img src="../assets/logo.png" alt="link-img">
    <div class="description">
      <h4>{{ title }}</h4>
      <p>{{ shortText }}</p>
    </div>
  </div>
</template>

<script>

import router from '../router';
import store from '../store';

export default {
  name: 'post-link',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      title: this.article.title,
      text: this.article.shortDesctription,
    };
  },
  computed: {
    shortText() {
      if (this.text.length > 100) {
        return `${this.text.substring(0, 100)}...`;
      }
      return this.text;
    },
  },
  methods: {
    gotoArticle() {
      router.push({ name: 'article', params: { title: this.title, articleBody: this.text, author: store.state.user.userName } });
    },
  },
};
</script>


<style scoped>

.post-link{
  display: flex;
  border: 1px solid #ea00d9;
  padding: 20px;
  height: fit-content;
}
.post-link:hover{
  cursor: pointer;
}
img{
  height: 50px;
  width: 50px;
  margin-right: 50px;
  justify-content: space-between;
}
.description{
  justify-content: space-between;
}
.description h4{
  margin-bottom: 10px;
}
</style>
