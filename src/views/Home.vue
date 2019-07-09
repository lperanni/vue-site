<template>
  <div class="home">
    <div class="top-site">
      <div class="left-site">
        <div class="title-card">
          <h1>Welcome to Blogster</h1>
          <p>The 21st century Blog</p>
        </div>
        <About></About>
      </div>
      <FrontArticle></FrontArticle>
    </div>
  </div>
</template>

<script>
import FrontArticle  from "../components/FrontArticle";
import About from "../components/AboutBox";

export default {
  name: 'home',
  components: {FrontArticle, About},
};
</script>

<style scoped>
  
  .home{
    width: 100%;
    display: flex;
  }
  
  .top-site{
    justify-content: space-between;
    display: flex;
  }

  .left-site{
    width: 50%;
  }
  .title-card{
    width: 95%;
    border: 5px solid#ea00d9;
    padding: 40px;
    margin: 20px;
    height: 50%;
  }
</style>

