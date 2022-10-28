<template>
    <v-container>
        <v-row>
            <v-col :cols="1">#</v-col>
            <v-col :cols="4">Дата</v-col>
            <v-col :cols="5">Категория</v-col>
            <v-col :cols="2">Стоимость</v-col>
        </v-row>
        <v-row
            v-for="payment in paymentsList" :key="payment.id"
        >
            <v-col :cols="1">{{ payment.id }}</v-col>
            <v-col :cols="4">{{ payment.date }}</v-col>
            <v-col :cols="5">{{ payment.category }}</v-col>
            <v-col :cols="2">{{ payment.value }}</v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "PaymentsDisplay",
    computed: {
        paymentsList() {
            return this.$store.getters.getCostsList;
        },
    },
}

</script>

<style scoped lang="scss">
</style>