<template>
  <div>
    <ButtonForm @showPopup="popupToggle" ></ButtonForm>
    <AddForm v-if="isPopupActive" @addNewCosts="addNewCosts"></AddForm>
    <List :items="costsList" :page="pageNumber"><h1>Мои личные расходы</h1></List>
    <Pagination :countCosts="costsList.length" @changeNumber="setPageNumber"></Pagination>
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
  methods: {
    fetchData() {
      return fetch('/db/listCosts.json')
          .then(result => result.json())
          .catch(error => console.error(error));
    },
    popupToggle() {
      this.isPopupActive = !this.isPopupActive;
    },
    addNewCosts(data) {
      this.costsList.push(Object.assign({id: this.costsList.length + 1}, data));
      this.isPopupActive = !this.isPopupActive;
    },
    setPageNumber(data) {
      this.pageNumber = data.numberPage;
    }
  },
  created() {
    this.fetchData()
      .then((data) => this.costsList = data)
      .catch(error => console.error(error));
  }

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
