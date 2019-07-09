<template>
  <div class="blog">
    <ul>
      <li v-for="article in articles" :key="article.title"><PostLink :article="article"></PostLink></li>
    </ul>
  </div>
</template>


<script>


import PostLink from '../components/PostLink.vue';
import store from '../store';

export default {
  name: 'Blog',
  components: { PostLink },
  computed: {
    articles(){
      return store.state.articles;
    }
  }
};
</script>

<style scoped>
  .blog{
    height: 100%;
    padding: 20px;
  }
  ul{
    list-style: none;
  }
  li{
    margin-bottom: 20px;
  }
</style>
