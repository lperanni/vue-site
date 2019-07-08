<template>
  <div class="searchBar">
    <label for="search"><ion-icon name="search"></ion-icon><input type="text" placeholder="Search"></label>
  </div>  
</template>

<script>
export default {
  name: "search-bar"
  
}
</script>

<style scoped>

.searchBar{
  width: 50%;
  margin-left: 20%;
}
ion-icon{
  display: inline-block;
  font-size: 140%;
  vertical-align: middle;
  margin-right: 15px;
}
input{
  display: inline-block;
  padding: 10px;
  font-size: 70%;
  width: 60%; 
}

</style>
