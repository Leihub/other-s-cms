<template>
<section class="articles">
  <router-link :to="{name:'editor'}" tag="button">
    新增文章
  </router-link>
  <table>
    <tbody>
      <tr>
        <th>标题</th>
        <th>日期</th>
        <th>选项</th>
      </tr>
      <tr v-for="article in articles">
        <router-link :to="{name:'article',query:{id:article._id}}" tag="td">
          {{article.title}}
        </router-link>
        <td>{{article.date || toDate}}</td>
        <td>
        <router-link class="fa fa-fa-pencil-square-o"
        :to="{name:'editor',query:{id:article._id}}"tag="i"
        ></router-link>
        <i class="fa fa-trash" @click="deleteArticle(article._id)"></i>
        </td>
      </tr>
    </tbody>
  </table>
</section>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  methods:...mapActions(['getArticles,deleteArticle']),
  created(){
    this.getArticles()
  },
  computed:mapState(['articles'])
  }
}
</script>

<style lang="css">
</style>
