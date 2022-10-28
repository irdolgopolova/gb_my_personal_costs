<template>
    <div>
        <div class="cost_list">
            <slot></slot>
            <div class="cost_list__item">
                <p class="cost_list__item__props">#</p>
                <p class="cost_list__item__props">Дата</p>
                <p class="cost_list__item__props">Категория</p>
                <p class="cost_list__item__props">Стоимость</p>
                <p class="cost_list__item__props">Действия</p>
            </div>
            <div class="cost_list__item" v-for="item in costsList" :key="item.id">
                <p class="cost_list__item__props" v-for="(prop, index) in item" :key="index">{{ prop }}</p>
                <div class="cost_list__item__props action_prop">
                    <a class="cost_list__item__props__link" @click="$modal.show(getNameForModal(item.id))">
                        <img src="./../assets/options.svg" class="cost_list__item__props__img">
                    </a>
                    <Modal :item-id="item.id" :name="getNameForModal(item.id)"></Modal>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Modal from "./Modal.vue"

export default {
    name: 'List',
    components: {
        Modal
    },
    computed: {
        costsList() {
            return this.$store.getters.getCostsList;
        },
    },
    methods: {
        getNameForModal(id) {
            return `modal_${id}`;
        },
    }
}
</script>

<style scoped lang="scss">
@import "./../scss/variables";
.cost_list {
    display: flex;
    flex-direction: column;
    width: 800px;
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

            &__link {
                text-decoration: none;
                cursor: pointer;

                &:hover {
                    color: $color_btn_dark_green;
                }

                &:active {
                    color: $color_btn_green;
                }
            }

            &__img {
                height: 20px;
            }
        }
    }

    .action_prop {
        position: relative;
    }
}
</style>
