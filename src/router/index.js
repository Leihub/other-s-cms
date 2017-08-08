import Vue from 'vue'
import Router from 'vue-router'
import Console from '../components/back/console.vue'
import Login from '../components/back/login.vue'
import Archive from '../components/font/Archive.vue'
import Article from '../components/font/Article.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
