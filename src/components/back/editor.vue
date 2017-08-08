<template>
<section class="editor">
  <input type="text" class="title" placeholder="标题" v-model = "title">
  <div :class="inspected? 'inspect':'edit'">
    <textarea v-model="article.content" spellcheck="false"></textarea>
    <button class="toggle" @click="inspected = !inspected">
    <i class="fa fa-chevron-left fa-fw" v-show="!inspected"></i>
    <i class="fa fa-chevron-right fa-fw" v-show="inspected"></i>
  </button>
  <article id="a" v-html="markedContent">
  </article>
  </div>
  <div class="panel">
    <button @click="save" class="saveArticle" ></button>
  </div>

</section>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
