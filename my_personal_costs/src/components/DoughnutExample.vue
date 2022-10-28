<template>
    <Doughnut
      :chart-options="chartOptions"
      :chart-data="chartData"
      :key="componentKey"
    />
  </template>

  <script>
  import { Doughnut } from 'vue-chartjs/legacy'

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale
  } from 'chart.js'

  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

  export default {
    name: 'DoughnutChart',
    components: {
      Doughnut
    },
    props: {
      chartId: {
        type: String,
        default: 'doughnut-chart'
      },
      datasetIdKey: {
        type: String,
        default: 'label'
      },
      width: {
        type: Number,
        default: 400
      },
      height: {
        type: Number,
        default: 400
      },
      cssClasses: {
        default: '',
        type: String
      },
      styles: {
        type: Object,
        default: () => {}
      },
      plugins: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false
        },
        componentKey: true
      }
    },
    props: {
        chartData: Object
    },
    methods: {
        test() {
            console.log(this.$store.getters.getChartData.datasets[0].data);
            this.componentKey += 1;
        }
    },
    mounted() {
      this.$store.dispatch('featchData');
    }
  }
  </script>
