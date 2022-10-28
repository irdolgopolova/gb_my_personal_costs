<template>
  <v-container>
    <v-row>
      <v-col :cols="8">
        <div class="text-h5 text-sm-h3 mb-8">Мои личные расходы</div>
        <ModalForm />
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
        <DoughnutExample
          ref="skills_chart"
          :chart-data="chartData"
          >
        </DoughnutExample>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import PaymentsDisplay from "@/components/PaymentsDisplay"
  import ModalForm from "@/components/ModalForm"
  import DoughnutExample from "@/components/DoughnutExample"

  export default {
    name: 'Home',
    components: {
      PaymentsDisplay,
      ModalForm,
      DoughnutExample
    },
    data() {
      return {
        page: 1,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            animateRotate: false
          }
        }
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
    updated() {
      this.$store.commit('setPage', this.page);
      console.log(this.$refs.skills_chart.test())
    },
    mounted() {
      this.$store.dispatch('loadChartData');
    }
  }
</script>
