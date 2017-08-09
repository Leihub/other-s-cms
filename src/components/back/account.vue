<template>
<section class="account">
  <div class="title">修改密码</div>
  <div class="password">
    <i class="fa fa-key fa-fw"></i>
    <input type="password" placeholder="输入新密码" v-model = "pwdRepeat"></input>
  </div>
  <div class="panel">
    <button @click="savaPwd">保存</button>
  </div>
</section>
</template>

<script>
export default {
  data(){
    return{
      pwd:'',
      pwdRepeat:''
    }
  },
  methods:{
    savePwd(){
      if (this.pwd === this.pwdRepeat) {
        this.$store.dispatch('savePwd',this.pwd)
      }
    }
  }
}
</script>

<style lang="css">
</style>
