<template>
<div class="warp">
  <myHeader></myHeader>
  <section class="archive">
    <ul>
      <li class="item" v-for="year in archive.years">
        <p>{{year}}</p>
        <ul>
          <li v-for="article in archive.articleInYear[year]">
            <span class="date">
              {{article.date |toDate}}
            </span>
            <router-link :to="{path:'/article',query:{id:article._id}}" tag="span" class="title">
              {{article.title}}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </section>
  <myFooter></myFooter>

</div>
</template>

<script>
import myHeader from './header.vue'
import myFooter from './footer.vue'
import Spinner from '../share/Spinner.vue'
import {mapState,mapGetters,mapActions} from 'vuex'

export default {
  components:{
    myHeader,
    myFooter,
    Spinner
  },
  created(){
    this.getArticles()
  },
  methods:{
    getArticles(){
      return this.$store.dispatch('getArticles')
    }
  },
  computed:{
    ...mapState(['articles']),
    ...mapGetters(['archive'])
  }
}
</script>

  <style lang="sass" rel="stylesheet/scss" scoped>
    main.wrap {
      min-height: 100%;
      position: relative;
    }

    section.archive {
      padding-bottom: 160px;
      ul {
        padding: 0;
        li {
          list-style: none;
          padding: 2px 0 0 40px;
          p {
            font-size: 20px;
            color: #34495e;
          }
          span {
            display: block;
            margin: 4px 0;
          }
          span.date {
            float: left;
            width: 125px;
            color: #7f8c8d;
          }
          span.title {
            margin-left: 130px;
            color: #42b983;
            cursor: pointer;
            word-break: break-all;
            &:hover {
              color: #267B54;
            }
          }
        }
      }
    }

  </style>
