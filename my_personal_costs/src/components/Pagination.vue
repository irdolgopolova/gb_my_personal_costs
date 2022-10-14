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
            :disabled='currentPageNumber == pageNumbers'
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
        }
    },
    computed: {
        pageNumbers: function () {
            return this.$store.getters.getPageCount;
        },
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
        _eventChangePage(number) {
            event.preventDefault();

            this.currentPageNumber = number;
            this.$store.commit('setPage', this.currentPageNumber);
            this._setActiveClassForBtn();
        },
        previousPage() {
            this._eventChangePage(--this.currentPageNumber);
        },
        openPage(number) {
            this._eventChangePage(number);
        },
        nextPage() {
            this._eventChangePage(++this.currentPageNumber);
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
