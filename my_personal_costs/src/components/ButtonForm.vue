<template>
    <div>
        <a class="primary_btn" @click="onBtnClick">Добавить новый расход</a>
        <ul class="group_payment_link">
            <li><a @click="onBtnClick" data-category="Еда" data-value="200">Новый расход (Еда 200)</a></li>
            <li><a @click="onBtnClick" data-category="Транспорт" data-value="50">Новый расход (Транспорт 50)</a></li>
            <li><a @click="onBtnClick" data-category="Обучение" data-value="2000">Новый расход (Обучение 2000)</a></li>
            <li><a @click="onBtnClick" data-category="Здоровье">Неполная ссылка</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ButtonForm',
    methods: {
        onBtnClick() {
            event.preventDefault();

            let params = {
                path: '/add/payment',
                query: {}
            };

            if (event.target.dataset.category) {
                params.path += `/${event.target.dataset.category}`;
            }

            if (event.target.dataset.value) {
                params.query['value'] = event.target.dataset.value;
            }

            this.$router.push(params);
        }
    }
}
</script>

<style scoped lang="scss">
@import "./../scss/variables";

.primary_btn {
    display: block;
    width: 260px;
    height: 40px;
    margin: 0 auto;
    line-height: 40px;
    text-decoration: none;
    box-sizing: border-box;
}

.group_payment_link {
    width: 400px;
    margin: 24px auto;
    list-style-type: none;
    text-align: left;

    a {
        color: black;

        &:hover {
            color: $color_btn_dark_green;
        }

        &:active {
            color: $color_btn_green;
        }
    }
}
</style>
