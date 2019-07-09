<template>
  <div class="write">
    <h2>Write Your Article</h2>
    <form action="">
      <input type="text" placeholder="title"><br>
      <textarea name="text" placeholder="text"></textarea>
      <input type="submit" value="Post">
    </form> 
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .write{
    margin-top: 20px;
    background: rgba(0,0,0,0.1);;
    width: 70%;
    margin-left: 15%;
    border: 5px solid black;
  }
  .write h2{
    padding: 20px 45px;
    background: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), #711c91;
    border-bottom: 5px solid black;
    margin-bottom: 0;
  }
  form{
    border: 1px solid black;
    padding: 40px;
    background-color: rgba(0,0,0,0.6);
  }

  input, textarea{
    background: transparent;
    border: 3px solid #ea00d9;
  }
  input{
    margin-bottom: 30px;
    width: 100%;
    padding: 10px;
    font-size: 110%;  
    
  }
  textarea{
    width: 100%;
    height: 400px;
    padding: 20px;
    font-size: 80%;
  }

  input[type="submit"]{

    margin-top: 50px;
    background: #711c91;
    margin-bottom: 0;
    color: white;
  }
  input[type="submit"]:hover{
    cursor: pointer;
  }

</style>
