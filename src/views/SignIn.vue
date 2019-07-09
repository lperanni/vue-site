<template>
  <div class="signIn">
    <h2>Establishing Connection</h2>
    <p><strong>Welcome to Blogster</strong> - Enter your credentials below</p>
    <form>
      <label for="name">Name:</label>
      <input type="text" v-model="name"><br>
      <label for="email">Email:</label>
      <input type="email" v-model="email"><br>
      <label for="password">Password:</label>
      <input type="password" v-model="password"><br>
      <div class="btns">
        <input type="submit" class="btn btn-full" value="[LOGIN]">
        <input type="submit" class="btn btn-ghost" value="[SIGNUP]">
      </div>
    </form>  
  </div>  
</template>

<script>
export default {
  name: 'sign-in',
  data(){
    return{
      name: '',
      email: '',
      password: '',
    }
  },
};
</script>

<style scoped>

  .signIn{
    margin: 120px auto;
    background-color: #091833;
    opacity: 0.9;
    padding: 50px;
    text-align: center;
    width: 50%;
  }
  .signIn *{
    color: #ea00d9;
  }

  p{
    font-size: 80%;
  }
  form{
    margin-top: 50px;
  }
  input{
    margin: 10px;
    padding: 10px;
    font-size: 80%;
    background-color: transparent;
    border: 2px solid #ea00d9;
    width: 60%;
  }
  input[type="password"]{
    margin-right: 6%;
  }
  label{
    display: inline;
  }

  /*====BUTTONS=====*/
.btn{
  width: 30%;
  color: #091833;
  margin-top: 50px;
}
.btn-full{
  background-color: #ea00d9;
}
.btn-ghost{
  border: 1px solid #ea00d9;
  color: #ea00d9;
}
.btn:hover{
  cursor: pointer;
}
.btns{
  margin-left: 6%;
}
</style>

