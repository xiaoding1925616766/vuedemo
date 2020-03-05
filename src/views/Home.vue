<template>
 <div class="index">
   <Side />
   <div class="content">
     <router-view></router-view>
   </div>
 </div>
</template>

<script>
import Side from './Side'
export default {
  name: 'home',
  components: {
    Side
  }
}
</script>
<style scoped lang='less'>
  .index{
    height: 100%;
    display: flex;
    overflow: hidden;
    .content{
      width: calc( 100vw - 240px);
      height: 100%;
      & > div{
        width: 100%;
        height: 100%;
      }
    }
  }
 
</style>