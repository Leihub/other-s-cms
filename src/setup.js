import Vue from 'vue'
import VueResource from 'vue-resource'


Vue.use(VueResource);

new Vue({
  data:{
    name:'',
    pwd:'',
    info:'',
    rpwd:''
  },
  methods:{
    submit(){
      if (!this.name.length) {
        return this.info = "用户名不能为空"
      }
      if(this.pwd != this.rpwd){
        return this.info = "两次密码不一致，请重新输入"
      }
      if (this.pwd.length <6) {
        return this.info="密码太短，请重新输入"
      }

      this.$http.post('/api/setup',{name:this.name,pwd:this.pwd})
          .then(()=>{
            this.info = "创建成功，等待页面跳转",
            setTimeout(() => window.location.reload(), 2500)
          })
          .catch(()=>{
            this.info = "创建失败"
          })
    },
    clearInfo(){
      this.info = " "
    }
  },
  watch:{
    name:'clearInfo',
    pwd:'clearInfo',
    rpwd:'clearInfo'
  }
}).$mount('#setup')
