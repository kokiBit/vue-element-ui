<template lang="pug">
  canvas#planet-chart
</template>

<script>
import Chart from 'chart.js';
import planetChartData from './chart-data.js';
export default {
  data() {
    return {
      planetChartData: planetChartData,
    }
  },
  mounted() {
    this.createChart('planet-chart', this.planetChartData);
  },
  name: 'Chart-JS',
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    }
  }
}
</script>
