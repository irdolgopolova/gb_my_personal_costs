<template>
    <transition name="fade">
        <div class="modal" v-if="isShow">
             <div class="modal__group_btn">
                 <a class="modal__group_btn__close" @click="$modal.hide(name)">&#10006;</a>
                 <a @click="updateCost">Редактировать</a>
                 <a @click="deleteCost">Удалить</a>
             </div>
         </div>
    </transition>
</template>

<script>
export default {
    name: "Modal",
    props: {
        itemId: Number,
        name: String
    },
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        show(name) {
            if (this.name === name) {
                this.isShow = true;
            }
        },
        hide(name) {
            if (this.name === name) {
                this.isShow = false;
            }
        },
        updateCost() {
            event.preventDefault();
            this.$router.push(`/update/payment/${this.itemId}`);
            this.isShow = false;
        },
        deleteCost() {
            event.preventDefault();

            this.$store.commit('deleteCost', {id: this.itemId});

            this.isShow = false;
        }
    },
    mounted() {
        this.$modal.EventBus.$on('show', this.show);
        this.$modal.EventBus.$on('hide', this.hide);
    }
}
</script>

<style scoped lang="scss">
@import "./../scss/variables";

.modal {
    position: absolute;
    width: 250px;
    height: 80px;
    background-color: $color_background_modal;
    border: $dark_green_border;
    border-radius: 4px;
    right: 34px;
    top: 24px;
    z-index: 1;

    &__group_btn {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;

        a {
            cursor: pointer;

            &:hover {
                color: $color_btn_dark_green;
            }

            &:active {
                color: $color_btn_green;
            }
        }

        &__close {
            position: absolute;
            right: 12px;
            top: 12px;
            cursor: pointer;
        }
    }
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>