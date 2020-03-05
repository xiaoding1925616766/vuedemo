<template>
  <div ref="Gauge"></div>
</template>

<script>
import option from '../option/Gauge'
export default {
    name:'Gauge',
    mounted(){
        var myChart = this.echarts.init(this.$refs.Gauge);
        // 使用刚指定的配置项和数据显示图表。
        setInterval(function (){
            option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
            option.series[1].data[0].value = (Math.random()*7).toFixed(2) - 0;
            option.series[2].data[0].value = (Math.random()*2).toFixed(2) - 0;
            option.series[3].data[0].value = (Math.random()*2).toFixed(2) - 0;
            myChart.setOption(option);
        },2000)
    }
}
</script>

<style>

</style>