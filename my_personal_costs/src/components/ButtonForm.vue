<template>
    <button class="primary_btn" @click="onBtnClick">Добавить новый расход</button>
</template>

<script>
export default {
    name: 'ButtonForm',
    methods: {
        onBtnClick() {
            this.$emit('showPopup');
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
}
</style>
