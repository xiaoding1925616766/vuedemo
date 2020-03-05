<template>
  <div ref="bar"></div>
</template>

<script>
import option from '../option/3dbar'
export default {
name:'3dbar',
mounted(){
           var myChart = this.echarts.init(this.$refs.bar);
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}
}
</script>

<style>

</style>