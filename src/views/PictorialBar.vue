<template>
  <div ref="PictorialBar"></div>
</template>

<script>
import option from '../option/pictorialbar'
export default {
 name:'PictorialBar',
 mounted(){
     var myChart = this.echarts.init(this.$refs.PictorialBar);
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
 }
}
</script>

<style>

</style>