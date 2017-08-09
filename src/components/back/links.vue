<template>
<section class="links">
  <div class="title">链接编辑</div>
  <table>
    <tbody>
      <tr>
        <th>链接名称</th>
        <th>链接地址</th>
      </tr>
      <tr v-for="(link,index) in links">
        <td>
        <i class="fa fa-plus-circle"
          @click="ADD_NEW_LINK(index)"
          v-if="links.length<4"
        ></i>
        <i class="fa fa-minus-circle"
        @click="REMOVE_LINK(index)"
        v-if="links.length>1"
        ></i>
        <input type="text"
               :value="link.name"
               placeholder="链接名称"
               spellcheck="false"
               @input="UPDATE_LINK_NAME({name:$event.target.value,index})"
        >
        </td>
        <td>
          <input type="text"
          :value="link.href"
          placeholder="链接地址"
          spellcheck="false"
          @input="UPDATE_LINK_HREF({href:$event.target.value,index})"
          >
        </td>
      </tr>
    </tbody>
  </table>
  <div class="panel">
    <button @click="saveLinks">保存</button>
  </div>
</section>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'

export default {
  created(){
    this.getLinks()
  },
  computed:mapState(['links']),
  methods:{
    ...mapActions(['saveLinks','getLinks'])
    ...mapMutations(['UPDATE_LINK_NAME', 'UPDATE_LINK_HREF', 'ADD_NEW_LINK', 'REMOVE_LINK'])
  }

}
</script>

<style lang="css">
</style>
