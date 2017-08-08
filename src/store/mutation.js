export default {
  SET_LINKS:(state,links)=>{
    state.links = links
  },
  SET_ARTICLES:(state,articles)=>{
    state.articles = articles
  },
  SET_ARTICLE:(state,article)=>{
    state.article = article
  },
  LOADING_TOGGLE:(state,isLoading)=>{
    state.isLoading = isLoading
  },
  SET_TOAST:(state,isToasting)=>{
    state.isToasting = isToasting
  },
  TOASTING_TOGGLE:(state,isToasting)=>{
    state.isToasting = isToasting
  },
  SET_USER:(state,user)=>{
    state.user = user
  }
}
