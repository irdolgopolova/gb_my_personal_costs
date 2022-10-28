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
      update() {
        this.componentKey += 1;
      }
    },
    mounted() {
      this.$store.dispatch('featchData');
    }
  }
  </script>
