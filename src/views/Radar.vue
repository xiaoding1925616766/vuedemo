<template>
  <div ref="Radar"></div>
</template>

<script>
import option from "../option/Radar";
export default {
  name: '"Radar',
  mounted() {
    var myChart = this.echarts.init(this.$refs.Radar);
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
};
</script>

<style>
</style>