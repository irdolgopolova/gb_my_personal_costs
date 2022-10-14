<template>
    <div>
        <div class="cost_list">
            <slot></slot>
            <div class="cost_list__item">
                <p class="cost_list__item__props">#</p>
                <p class="cost_list__item__props">Дата</p>
                <p class="cost_list__item__props">Категория</p>
                <p class="cost_list__item__props">Стоимость</p>
            </div>
            <div class="cost_list__item" v-for="item in costsList" :key="item.id">
                <p class="cost_list__item__props" v-for="(prop, index) in item" :key="index">{{ prop }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'List',
    computed: {
        costsList() {
            return this.$store.getters.getCostsList;
        },
    }
}
</script>

<style scoped lang="scss">
@import "./../scss/variables";
.cost_list {
    display: flex;
    flex-direction: column;
    width: 600px;
    margin: 0 auto;

    &__item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        height: 60px;
        border-bottom: $gray_border_bottom;
        text-align: center;

        &__props {
            width: 150px;
        }
    }
}
</style>
