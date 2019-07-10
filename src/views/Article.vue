<template>
  <article class="article">
    <h1>{{ title }}</h1>
    <h4>By {{ author }}</h4>
    <pre>{{ articleBody }}</pre>
  </article>
</template>

<script>

export default {
  name: 'Article',
  props: {
    title: {
      type: String,
      required: true,
    },
    articleBody: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      title: this.props.title,
      author: this.props.author,
      articleBody: this.props.articleBody,
    };
  },
};
</script>

<style scoped>

  .article{
    width: 80%;
    margin-left: 10%;
    margin-top: 2%;
    padding: 20px;
    border: 3px solid #ea00d9;
  }
  .article h4{
    margin-bottom: 100px;
  }
  pre{
    max-width: 80%;
    word-wrap: break-word;
    white-space: pre-wrap;
  }


</style>
