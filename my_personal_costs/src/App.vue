<template>
  <div>
    <ButtonForm @showPopup="popupToggle" ></ButtonForm>
    <AddForm v-if="isPopupActive"></AddForm>
    <List><h1>Мои личные расходы</h1></List>
    <Pagination></Pagination>
  </div>
</template>

<script>
import List from './components/List.vue';
import ButtonForm from './components/ButtonForm.vue'
import AddForm from './components/AddForm.vue';
import Pagination from './components/Pagination.vue';

export default {
  name: 'App',
  components: {
    AddForm,
    List,
    Pagination,
    ButtonForm
  },
  data() {
    return {
      costsList: [],
      isPopupActive: false,
      pageNumber: 1
    }
  },
  mounted() {
    this.$store.dispatch('featchData');
  },
  methods: {
    popupToggle() {
      this.isPopupActive = !this.isPopupActive;
    },
    addNewCosts(data) {
      console.log(this.costsList);
      // this.costsList.push(Object.assign({id: this.costsList.length + 1}, data));
      this.isPopupActive = !this.isPopupActive;
    },
    setPageNumber(data) {
      this.pageNumber = data.numberPage;
    }
  },
}
</script>

<style lang="scss">
@import "./scss/variables";

.primary_btn {
  border: $dark_green_border;
  border-radius: 4px;
  background-color: $color_btn_green;
  color: $color_btn_white;
  text-transform: uppercase;

  &:hover {
    background-color: $color_btn_dark_green;
  }

  &:active {
    background-color: $color_btn_white;
    color: $color_btn_green;
  }

  &:disabled {
    background-color: $color_btn_white;
    color: $color_btn_gray;
    border-color: $color_btn_gray;
  }
}

</style>
