<template>
 <div class="article">
   <div class="article-text">
    <h2>{{ title }}</h2>
    <p>{{ shortDesc }}</p>
   </div>
  <div class="goto-btn">
    <button>Read</button>
  </div>
 </div>
</template>

<script>

import articles from "../articles";

export default {
  name: "FrontArticle",
  data(){
    return{
      title: articles[0].title,
      shortDesc: articles[0].articleText,
    }
  }
}
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
