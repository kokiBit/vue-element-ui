<template lang="pug">
  canvas#rader-chart
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
    this.createChart('rader-chart');
  },
  name: 'Radar',
  methods: {
    createChart(chartId) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
            datasets: [{
                data: [20, 10, 4, 2]
            }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }
  }
}
</script>
