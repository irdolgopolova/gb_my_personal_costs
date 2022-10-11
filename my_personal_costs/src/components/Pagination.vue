<template>
    <div class="pagination" v-if="pageNumbers">
        <button
            class="primary_btn"
            @click="previousPage"
            :disabled='currentPageNumber == 1'
        >
            &lt;
        </button>

        <button
            class="primary_btn"
            v-for="number in pageNumbers" :key="number"
            :page="number"
            @click="openPage(number)"
        >
            {{number}}
        </button>

        <button
            class="primary_btn"
            href="#" @click="nextPage"
            :disabled='currentPageNumber == lastPage'
        >
            &gt;
        </button>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    data() {
        return {
            currentPageNumber: 1,
            lastPage: 1
        }
    },
    props: {
        countCosts: {
            type: Number,
            default: 0
        },
    },
    computed: {
        pageNumbers: function () {
            let countPages = ~~(this.countCosts / 5) + 1;
            let pageNumbers = Array.from({length: countPages}, (x, i) => i + 1);
            this.lastPage = pageNumbers.slice(-1);

            return pageNumbers;
        }
    },
    methods: {
        _setActiveClassForBtn() {
            let currentActivePageNumberBtn = document.querySelector('button.active');
            if (currentActivePageNumberBtn) {
                currentActivePageNumberBtn.classList.remove('active');
            }

            let pageNumberBtn = document.querySelector(`button[page="${this.currentPageNumber}"]`);
            pageNumberBtn.classList.add('active');
        },
        _eventChangeNumber(number) {
            this.currentPageNumber = number;

            this._setActiveClassForBtn();

            this.$emit('changeNumber', {
                numberPage: number
            });
        },
        previousPage() {
            event.preventDefault();
            this._eventChangeNumber(this.currentPageNumber - 1);
        },
        openPage(number) {
            event.preventDefault();
            this._eventChangeNumber(number);
        },
        nextPage() {
            event.preventDefault();
            this._eventChangeNumber(this.currentPageNumber + 1);
        }
    },
    mounted() {
        this._setActiveClassForBtn();
    }
}
</script>

<style scoped lang="scss">
@import "./../scss/variables";

.pagination {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: fit-content;
    height: 40px;
    margin: 20px auto 0;
    padding: 4px 16px;

    border:  $dark_green_border;
    border-radius: 4px;

    background-color: $color_btn_white;
    color: $color_btn_green;

    .primary_btn {
        width: 30px;
        height: 30px;
        margin: 0 8px;
    }
    .active {
        background-color: $color_btn_white !important;
        color: $color_btn_green !important;
    }
}

</style>
