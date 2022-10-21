<template>
    <div class="modal">
        <form id="add_form" class="modal__add_form" action="#">
            <label for="cost_date">Дата</label>
            <input type="date" id="cost_date" v-model="cost_date" />

            <label for="cost_category">Категория</label>
            <input type="text" id="cost_category" v-model="cost_category" />

            <label for="cost_price">Стоимость</label>
            <input type="number" id="cost_price" v-model="cost_price" />

            <div class="modal__errors" v-if="formModalErrors">
                {{formModalErrors}}
            </div>

            <button class="primary_btn" type="submit" @click="addNewCosts">
                Добавить
            </button>
        </form>
    </div>
</template>

<script>

export default {
    name: 'AddForm',
    data() {
        return {
            cost_date: '',
            cost_category: '',
            cost_price: '',
            formModalErrors: ''
        }
    },
    methods: {
        _formatedDate() {
            let dateObject = new Date(this.cost_date);
            let month = dateObject.getMonth() + 1;
            if (month < 10) {
                month = `0${month}`;
            }

            return `${dateObject.getDate()}.${month}.${dateObject.getFullYear()}`;
        },
        addNewCosts() {
            event.preventDefault();
            this.formModalErrors = '';

            if (!this.cost_date || !this.cost_category || !this.cost_price) {
                this.formModalErrors = 'Заполните форму полностью, пожалуйста';
                return;
            }

            this.$emit('addNewCosts', {
                cost_date: this._formatedDate(this.cost_date),
                cost_category: this.cost_category,
                cost_price: this.cost_price
            });
        }
    }
}
</script>

<style scoped lang="scss">
@import "./../scss/variables";

.modal {
    position: absolute;
    top: 8vh;
    left: calc(50% - 300px);

    width: 600px;
    height: fit-content;

    background-color: $color_background_modal;
    border: $green_border;
    border-radius: 9px;

    &__add_form {
        display: flex;
        flex-direction: column;
        padding: 24px;

        label {
            font-size: 18px;
            line-height: 22px;
            font-weight: 700;
        }

        input {
            height: 36px;
            font-size: 16px;
            line-height: 20px;
            padding: 0 16px;
            margin: 0 0 16px;
        }

        .primary_btn {
            width: 260px;
            height: 40px;
            margin: 0 auto;
        }
    }

    &__errors {
        margin: 0 0 20px;
        padding: 8px 16px;

        background-color: $color_error_background;
        border: $red_border;
        border-radius: 4px;
        color: $color_error;
    }
}

</style>

