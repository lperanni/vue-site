<template>
  <div class="blog">
    <ul>
      <li><PostLink></PostLink></li>
      <li><PostLink></PostLink></li>
      <li><PostLink></PostLink></li>
      <li><PostLink></PostLink></li>
      <li><PostLink></PostLink></li>
      <li><PostLink></PostLink></li>
      <li><PostLink></PostLink></li>
      <li><PostLink></PostLink></li>
      <li><PostLink></PostLink></li>
    </ul>
  </div>
</template>


<script>

import articles from '../articles';
import PostLink from '../components/PostLink.vue';

export default {
  name: 'Blog',
  components: { PostLink },
  data(){
    return{
      title: articles[0].title,
    }
  },
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
