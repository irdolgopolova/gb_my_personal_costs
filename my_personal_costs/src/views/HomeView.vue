<template>
  <div class="home">
    <ButtonForm ></ButtonForm>
    <List></List>
    <Pagination></Pagination>
  </div>
</template>

<script>
import ButtonForm from '@/components/ButtonForm.vue';
import List from '@/components/List.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'HomeView',
  components: {
    ButtonForm,
    List,
    Pagination
  },
  data() {
    return {
      costsList: [],
      pageNumber: 1
    }
  },
  mounted() {
    this.$store.dispatch('featchData');
  },
  methods: {
    setPageNumber(data) {
      this.pageNumber = data.numberPage;
    }
  },
}
</script>
