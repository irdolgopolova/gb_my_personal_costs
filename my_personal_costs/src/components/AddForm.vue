<template>
    <div class="form">
        <form id="add_form" class="form__add_form" action="#">
            <label for="cost_date">Дата</label>
            <input type="date" id="cost_date" v-model="cost.date" />

            <label for="cost_category">Категория</label>
            <div class="category_list">
                <div class="category_list__select_list" v-if="!isShowForm">
                    <select class="category_list__select" v-model="cost.category">
                        <option v-for="(category, index) in categoryList" :key="index" :value="category" >
                            {{category}}
                        </option>
                    </select>
                    <button class="category_list__btn primary_btn" @click="isShowForm = !isShowForm">
                        Добавить новую категорию
                    </button>
                </div>
                <div v-else>
                    <input type="text" id="category_name" class="category_list__input" v-model="cost.category" />
                </div>
            </div>

            <label for="cost_price">Стоимость</label>
            <input type="number" id="cost_price" v-model="cost.price" />

            <div class="form__errors" v-if="formModalErrors">
                {{formModalErrors}}
            </div>

            <button class="primary_btn" type="submit" @click="addNewCosts(cost)">
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
            cost: {
                date: '',
                category: '',
                price: '',
            },
            isShowForm: false,
            formModalErrors: ''
        }
    },
    computed: {
        categoryList() {
            return this.$store.getters.getCategoryList;
        },
    },
    methods: {
        _formatedDate() {
            let dateObject = new Date(this.cost.date);
            let month = dateObject.getMonth() + 1;
            if (month < 10) {
                month = `0${month}`;
            }

            return `${dateObject.getDate()}.${month}.${dateObject.getFullYear()}`;
        },
        _checkCategory() {
            if (this.categoryList.includes(this.cost.category)) return;

            this.$store.commit('addNewCategory', this.cost.category);
        },
        _validate() {
            this.formModalErrors = '';

            if (!this.cost.date || !this.cost.category || !this.cost.price) {
                this.formModalErrors = 'Заполните форму полностью, пожалуйста';
                return false;
            }

            return true;
        },
        addNewCosts() {
            event.preventDefault();

            if (this._validate()) {
                this._checkCategory();

                this.$store.commit('addCostsList', {
                    date: this._formatedDate(),
                    category: this.cost.category,
                    price: this.cost.price
                });

                this.$router.push('/');
            }
        },
        _setPostParams() {
            this.isShowForm = true;

            let dateObject = new Date();
            let month = dateObject.getMonth() + 1;
            if (month < 10) {
                month = `0${month}`;
            }

            this.cost.date = `${dateObject.getFullYear()}-${month}-${dateObject.getDate()}`;

            if (this.$route.params.category) {
                this.cost.category = this.$route.params.category;
            }

            if (this.$route.query.value) {
                this.cost.price = this.$route.query.value;
            }

            document.querySelector('button[type="submit"]').click();
        }
    },
    mounted() {
        if (this.$route.params.category) {
            this._setPostParams();
        }

        this.$store.dispatch('loadCategory');
    }
}
</script>

<style scoped lang="scss">
@import "./../scss/variables";

.form {
    width: 600px;
    margin: 0 auto;

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
            width: 100%;
            height: 36px;
            box-sizing: border-box;
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

    .category_list {
        &__select {
            width: 60%;
            height: 40px;

            &_list {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: 100%;
                margin: 0 0 16px;
            }
        }

        &__btn {
            width: 38%;
            height: 40px;
            font-size: 12px;
            line-height: 22px;
        }
    }
}

</style>

