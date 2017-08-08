import Vue from 'vue'
import Vuex from 'vuex'
import mutations from 'mutation'
import actions from 'action'
import getters from 'getter'

VUE.use(Vuex)

const store = new Vuex.Store({
  state:{
    isLoading:false,
    isToasting:false,
    articles:[],
    article:{},
    links:[],
    user:{name:'',pwd:''},
    toast:{
      promise:null,
      info:'',
      btnNum:1,
      toastResolve(){},
      toastReject(){}
    }
  },
  getters,
  actions,
  mutations
})

export default store
