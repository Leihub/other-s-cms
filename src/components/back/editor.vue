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
    <button @click="save" class="saveArticle" >保存</button>
  </div>

</section>
</template>

<script>
import {mapActions,mapMutations} from 'vuex'
import marked from '../../assets/js/marked.min'
import hljs from '../../assets/js/highlight.pack'
export default {
  data(){
    return {
      inspected:false,
      markedContent:''
    }
  },
  created(){
    const id = this.$route.query.id
    if (id) return this.getArticle(id)
    this.SET_ARTICLE({date:new Date()})
  },
  updated(){
    this.highlight()
  },
  methods:{
    save(){
      this.saveArticle()
      .then(()=>this.$router.push({name:'articles'}))
      .catch(err=>console.log(err))
    },
    highlight(){
      setTimeout(()=>{
        hljs.initHighlighting.called = false
        hljs.initHighlighting()
      },0)
    },
    ...mapActions(['getArticle','saveArticle']),
    ...mapMutations(['SET_ARTICLE'])
  },
  computed:{
    content:{
      get(){
        this.markedContent = marked(
          this.$store.state.article.content || '',
          {sanitize:true}
        )
        this.highlight()
        return this.$store.state.article.content
      },
      set(value){
        this.$store.commit('UPDATE_CONTENT',value)
      }
    },
    title:{
      get(){
        return this.$store.state.article.title
      },
      set(value){
        this.$store.commit('UPDATE_TITLE',value)
      }
    }
  }
}
</script>

<style lang="css">
</style>
