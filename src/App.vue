<template>
  <div class="container">
    <nav class="nav">
      <img src="./assets/logo.png" alt="logo" class="logo">
      <div class="nav-list">
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/blog">Blog</router-link>
        <router-link class="link" to="/">Write</router-link>
        <router-link class="link" to="/signIn">Sign up</router-link>
      </div>
      <SearchBar></SearchBar>
    </nav>
    <router-view/>
  </div>
</template>

<script>

import SearchBar from './components/SearchBar';

export default {
  components:{SearchBar},
  
}
</script>


<style scoped>
  .container{
    max-width: 100vw;
  }
  .logo{
    height: 50px;
    width: auto;
    justify-content: flex-start;
  }

  .nav{
    width: 100%;
    height: 80px;
    margin-bottom: 20px;  
    background-color: #091833;
    padding: 20px;
    display: flex;
  }

  .nav-list{
    margin-left: 30%;
    width: 60%;
  }
  .link {
    padding: 10px;
    display: inline-block;
    text-decoration: none;
    font-size: 80%;
    transition: color 0.4s;
    border: 3px solid #ea00d9;
    border-radius: 2px;
    color: #ea00d9;
    margin-right: 20px;
    box-shadow: 1px 2px 4px rgb(110, 109, 109);
  }
  .link:hover{
    cursor: pointer;
    box-shadow: none;
   
  }
</style>
