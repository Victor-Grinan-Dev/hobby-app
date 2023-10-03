<template>
    <div class='flex flex-col'>
        <p>{{ title }}</p>
        <bars-chart :data='monthlyGames' />
    </div>
</template>

<script>
// import { useStore } from 'vuex';
import { ref, reactive } from 'vue';
import BarsChart from '../../../appChart/BarsChart.vue';

export default {
    components: {
        BarsChart,
    },
    setup() {
        const title = ref('Overall view');
        const totalGames = ref(160);
        const monthlyGames = reactive([
            { month: 'oct', playedGames: 0 },
            { month: 'nov', playedGames: 0 },
            { month: 'dic', playedGames: 0 },
            { month: 'ene', playedGames: 0 },
            { month: 'feb', playedGames: 0 },
            { month: 'mar', playedGames: 0 },
            { month: 'apr', playedGames: 0 },
            { month: 'may', playedGames: 0 },
            { month: 'jun', playedGames: 0 },
            { month: 'jul', playedGames: 0 },
        ]);

        // const store = useStore();
        // function setIstr() {
        //     store.dispatch('setInstructions');
        // }
        return {
            title,
            totalGames,
            monthlyGames,
            // setIstr,
        }

    }
}
</script>

<style scoped></style>