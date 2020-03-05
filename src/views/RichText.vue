<template>
  <div ref="RichText"></div>
</template>

<script>
import option from '../option/richtext'
export default {
    name:'RichText',
    mounted(){
          var myChart = this.echarts.init(this.$refs.RichText);
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
}
</script>

<style>

</style>