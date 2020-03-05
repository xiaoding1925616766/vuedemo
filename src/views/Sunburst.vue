<template>
  <div ref="Sunburst"></div>
</template>

<script>
import option from "../option/sunburst";
export default {
  name: "sunburst",
  mounted() {
    var myChart = this.echarts.init(this.$refs.Sunburst);
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
};
</script>

<style>
</style>