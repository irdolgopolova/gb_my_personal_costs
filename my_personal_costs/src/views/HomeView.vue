<template>
  <v-container>
    <v-row>
      <v-col :cols="8">
        <div class="text-h5 text-sm-h3 mb-8">Мои личные расходы</div>
        <ModalForm @updatecostchart="updateChart"/>
        <PaymentsDisplay />
        <template>
          <div class="text-center">
            <v-pagination
              v-model="page"
              :length="pageNumbers"
              color="teal"
            ></v-pagination>
          </div>
        </template>
      </v-col>
      <v-col :cols="4">
        <DoughnutChart
          ref="costs_chart"
          :chart-data="chartData"
        ></DoughnutChart>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import PaymentsDisplay from "@/components/PaymentsDisplay"
  import ModalForm from "@/components/ModalForm"
  import DoughnutChart from "@/components/DoughnutChart"

  export default {
    name: 'Home',
    components: {
      PaymentsDisplay,
      ModalForm,
      DoughnutChart
    },
    data() {
      return {
        page: 1,
      }
    },
    computed: {
      pageNumbers: function () {
        return this.$store.getters.getPageCount;
      },
      chartData: function () {
        return this.$store.getters.getChartData;
      }
    },
    methods: {
      updateChart() {
        this.$refs.costs_chart.update();
      }
    },
    updated() {
      this.$store.commit('setPage', this.page);
    },
    mounted() {
      this.$store.dispatch('loadChartData');
    }
  }
</script>
