<template>
  <div class="about">
    <a href="/" class="primary_btn" @click="onBtnClick">Вернуться к списку</a>
    <AddForm></AddForm>
  </div>
</template>

<script>
import AddForm from '@/components/AddForm.vue';

export default {
  name: 'AddFormPage',
  components: {
    AddForm
  },
  methods: {
    onBtnClick() {
      event.preventDefault();

      this.$router.push('/');
    }
  }
}
</script>

<style scoped lang="scss">
.primary_btn {
  display: block;
  width: 260px;
  height: 40px;
  margin: 0 auto;
  line-height: 40px;
  text-decoration: none;
  box-sizing: border-box;
}
</style>