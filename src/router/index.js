import Vue from 'vue'
import Router from 'vue-router'
import Console from '../components/back/console.vue'
import Login from '../components/back/login.vue'
import Archive from '../components/font/Archive.vue'
import Article from '../components/font/Article.vue'
import Links from '../components/back/links.vue'
import Articles from '../components/back/Articles.vue'
import Editor from '../components/back/editor.vue'
import Account from '../components/back/account.vue'

Vue.use(Router)

export default new Router({
  mode:'history'
  routes: [
    {
      path: '/',
      component:Login,
    },
    {
      path:'/archive',
      name:'archive',
      component:Archive
    },
    {
      path:'/article',
      name:'article',
      component:Article
    },
    {
      path:'/console',
      name:'console',
      component:Console,
      children:[
        {path:'',name:'articles',component:Articles},
        {path:'links',name:'links',component:Links},
        {path:'editor',name:'editor',component:Editor},
        {path:'account',name:'account',component:Account}
      ]
    }
  ]
})
