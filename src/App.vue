<template>
  <div id="app">
    <Header />
   <div class="main">
     <router-view></router-view>
   </div>
  </div>
</template>
<script>
  import Header from './views/Header.vue'
  export default{
    components:{
     Header
    }
  }
</script>
<style lang="less">
.main{
 height: calc(100vh - 60px);
}
</style>
