<template>
  <div ref="line"></div>
</template>

<script>
import option from '@/option/line'
export default {
    name:'line',
    mounted(){
         var myChart = this.echarts.init(this.$refs.line);
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
}
</script>

<style scoped>

</style>