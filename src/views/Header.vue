<template>
    <div class="header">
      <ul>
        <li><a href="javascript:" style="font-size:12px; color:red">Home</a></li>
        <li><a href="javascript:" class="icon iconfont incon-iocon">登入</a></li>
        <li><a href="javascript:" class="icon iconfont incon-jindu">注册</a></li>
        <li><a href="javascript:" class="icon iconfont incon-lingdang">博客</a></li>
        <li><a href="javascript:" class="icon iconfont incon-guanliyuanrenzheng">留言</a></li>
      </ul>
    </div>
</template>
<script>
    export default {
  name: 'Header',
  components: {
   
  }
}
</script>
<style scoped lang='less'>
.header{
    height: 60px;
    background-color: #151c31;
    -webkit-box-shadow:0 1px 2px #999;
    box-shadow:0 1px 2px #999;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  .header ul{
     display: -ms-flexbox;
     display: flex;
     color: #57697e;
  }
  .header ul li{
    width: 60px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    border: 1px solid rgba(255,255,225,0.3);
    margin-right: 16px;
  }
  .header ul li{
    color: #57697e;
  }
</style>