<template>
  <div class="about">
    <h3>About the blog</h3>
    <div class="content-box">
      <h4>A Blog for Enthusiasts</h4>
      <p>
        This blog is a place to express your thoughts in a relaxing way.
        Feel free to sign up and write up an article of your own.
      </p>
    </div>
  </div>
</template>


<script>
export default {
  name: 'about',
};
</script>

<style scoped>

  .about{
    border: 5px solid black;
    justify-content: space-between;
    display: block;
    width: 95%;
    margin: 20px;
    height: 75%;
    background-color: rgb(7, 6, 6);

  }

  .about h3{
    color: #ea00d9;
    text-align: center;
    padding: 10px;
    background: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), #711c91;
    border-bottom: 5px solid black;
  }

  h4{
    margin-bottom: 50px;
  }

  .content-box{
    margin: 10px;
    padding: 10px;
    height: 70%;
  }
</style>
