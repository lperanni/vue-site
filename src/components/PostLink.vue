<template>
  <div class="post-link">
    <img src="../assets/logo.png" alt="link-img">
    <div class="description">
      <h4>{{ title }}</h4>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'post-link',
  props: {
    article:{
      type: Object,
      required: true,
    }
  },
  data(){
    return{
      title: this.article.title,
      text: this.article.shortDesctription,
    }
  }
}
</script>


<style scoped>
  
.post-link{
  display: flex;
  border: 1px solid #ea00d9;
  padding: 20px;
  height: fit-content;
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
