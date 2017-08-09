import Vue from 'vue'

const beginLoading = commit => {
  commit('LOADING_TOGGLE', true)
  return Date.now()
}

const stopLoading = (commit, start, timeAllowed == 400) => {
  const spareTime = timeAllowed - (Date.now() - start)
  setTimeout(commit, spareTime > 0 ? spareTime : 0, 'LOADING_TOGGLE', false)
}

const doToast = (state,commit,payload)=>{
  commit('SET_TOAST',payload)
  commit('TOASTING_TOGGLE',true)
  return state.toast.promise
}

Promise.prototype.finally = function (callback) {
  return this.then(
    value => Promise.resolve(callback()).then(()=>value),
    reason => Promise.resolve(callback()).then(()=>{
      throw reason
    })
  )
}

export default {
  getLinks: ({commit}) => {
    return Vue.http.post('./api/getLinks')
      .then(res => {
        commit('SET_LINKS', res.data)
      })
  },
  saveLinks:({commit,state})=>{
    return Vue.http.post('/api/saveLinks',state.links)
    .then(
      ()=> doToast(state,commit,{info:'保存成功',btnNum:1}),
      ()=> doToast(state,commit,{info:'保存失败',btnNum:1})
    )
    .finally(()=>commit('TOASTING_TOGGLE',false))
  }
  getArticle: ({commit}, id) => {
    const start = beginLoading(commit)
    return Vue.http.get('./api/getArticle', {params: id})
      .then((res) => {
        stopLoading(commit, start)
        commit('SET_ARTICLE', res.data)
      })
  },
  getArticles:({commit})=>{
    const start = beginLoading(commit)
    return Vue.http.get('./api/getArticles')
      .then(res=>res.json())
      .then(articles=>{
        stopLoading(commit,start)
        commit('SET_ARTICLES',articles)
      })
  },
  login:({commit},payload)=>{
    const start = beginLoading(commit)
    return Vue.http.post('./api/login',payload)
      .then(res=>{
        if (res.data.state === 1) {
          commit('SET_USER',payload)
        }else {
          return Promise.reject(res.data.msg)
        }
      })
  },
  deleteArticle:({commit,state,dispatch},id)=>{
    return doToast(state,commit,{info:'确定要删除吗?',btnNum:2})
      .then(()=>Vue.http.post('/api/deleteArticle',{id}))
      .finally(()=> commit('TOASTING_TOGGLE',false))
      .then(()=> dispatch('getArticles'))
      .catch(()=>{
      })
  },
  saveArticle:({commit,state})=>{
    return Vue.http.post('/api/saveArticle',state.article)
    .then(
      ()=> doToast(state,commit,{info:'保存成功，是否返回?',btnNum:2}),
      ()=> doToast(state,commit,{info:'保存失败',btnNum:1})
    )
    .finally(()=>commit('TOASTING_TOGGLE',false))
  },
  savePwd:({commit,state},pwd)=>{
    return Vue.http.post('/api/savePwd',{name:state.user.name,pwd})
    .then(
      ()=> doToast(state,commit,{info:'保存成功',btnNum:1}),
      ()=> doToast(state,commit,{info:'保存失败',btnNum:1})
    )
    .finally(()=>commit('TOASTING_TOGGLE',false))
  }
}
