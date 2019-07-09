<template>
  <div class="post-link">
    <img src="../assets/logo.png" alt="link-img">
    <div class="description">
      <h4>Title</h4>
      <p>Short desciption of article that could also be just the first lines of the whole thing</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'post-link',
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
