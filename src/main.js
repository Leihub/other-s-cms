// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import {mapState} from 'vuex'

import Spinner from './components/share/spinner.vue'
import Toast from './components/share/toast.vue'
import MyCanvas from './components/share/MyCanvas.vue'


import store from './store'
import router from './router'

Vue.config.productionTip = false

Vue.filter('toDate',date =>{
  const d = new Date(date)
  return d.getFullYear()+'年'+
  (d.getMonth()+1)+'月'+
  d.getDate()+'日'
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  computed:mapState(['isLoading','isToasting']),
  components: { Spinner,Toast,MyCanvas }
}).$mount("#CMS2")
