<template>
    <v-dialog v-model="dialog">
        <template v-slot:activator="{on}">
            <v-btn color="teal" dark v-on="on">
                Добавить новый расход<v-icon>mdi-plus</v-icon>
            </v-btn>
        </template>
        <v-card class="text-left pa-8">

            <v-menu
                v-model="calendar"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="date"
                        label="Picker without buttons"
                        prepend-icon="mdi-calendar"
                        readonly
                        color="teal"
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                </template>
                <v-date-picker
                color="teal"
                    v-model="date"
                    @input="calendar = false"
                ></v-date-picker>
            </v-menu>

            <v-select color="teal" v-model="category" label="Категория" :items="costsList"></v-select>
            <v-text-field color="teal" v-model.number="value" label="Стоимость"></v-text-field>

            <v-btn @click="addNewCosts" color="teal" dark>
                Добавить
            </v-btn>
        </v-card>
    </v-dialog>
</template>

<script>
  export default {
    name: 'ModalForm',
    data() {
        return {
            dialog: false,
            date: '',
            category: '',
            value: 0,
            calendar: false
        }
    },
    computed: {
        costsList() {
            return this.$store.getters.getCategoryList;
        },
    },
    methods: {
        addNewCosts() {
            event.preventDefault();

            this.$store.commit('addCostsList', {
                date: this.date,
                category: this.category,
                value: this.value
            });

            this.dialog = false;

            this.$emit('updatecostchart');
        }
    },
    mounted() {
        this.$store.dispatch('loadCategory');

    }
  }
</script>

<style lang="scss">

</style>