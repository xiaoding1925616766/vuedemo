<template>
  <div class="side">
    <ul>
      <li>
        <router-link :to="{name:'index'}">首页</router-link>
      </li>
      <li>
        <router-link :to="{name:'sun'}">日出日落</router-link>
      </li>
      <li>
        <router-link :to="{name:'Line'}">折线图</router-link>
      </li>
      <li>
        <router-link :to="{name:'pie'}">饼状图</router-link>
      </li>
      <li>
        <router-link :to="{name:'RichText'}">富文本</router-link>
      </li>
      <li>
        <router-link :to="{name:'Sunburst'}">旭日图</router-link>
      </li>
      <li>
        <router-link :to="{name:'Radar'}">雷达图</router-link>
      </li>
      <li>
        <router-link :to="{name:'PictorialBar'}">象形柱图</router-link>
      </li>
      <li>
        <router-link :to="{name:'Gauge'}">仪表盘</router-link>
      </li>
      <li>
        <router-link :to="{name:'Music'}">3D音频图</router-link>
      </li>
      <li>
        <router-link :to="{name:'city'}">3D城市</router-link>
      </li>
      <li>
        <router-link :to="{name:'3dbar'}">3D柱状图</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Side"
};
</script>
<style  scoped lang='less'>
.side {
  width: 240px;
  height: 100%;
  background-color: #2d2d36;
  .navleft ul {
    width: 200px;
    margin: 0 auto;
    color: #57697e;
  }
  ul li {
    height: 52px;
    line-height: 52px;
    text-indent: 3em;
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    margin-bottom: 6px;
  }
  ul li a.router-link-active {
    color: orangered;
  }
  ul li:hover {
    color: #37485d;
  }
  ul li a {
    color: #57697e;
  }
}
</style>
    