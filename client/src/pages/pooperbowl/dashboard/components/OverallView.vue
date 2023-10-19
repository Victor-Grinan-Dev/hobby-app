<template>
    <div class='flex flex-wrap justify-center gap-4 w-full'>
        <div class='flex flex-col'>
            <bar-chart orientation='h' :title='title' :data='monthlyGames' :max='16' :chartWidth='200'
                :textParams='monthlyGames.months' :numericParams='monthlyGames.playedGames' :type='"percent"'
                :colors='["#3d9970"]' />
        </div>
        <div class='flex flex-col'>
            <bar-chart orientation='v' :title='title' :data='monthlyGames' :max='16' :chartWidth='200'
                :textParams='monthlyGames.months' :numericParams='monthlyGames.playedGames' :type='"percent"'
                :colors='monthlyGames.colors' />
        </div>
        <div class='flex flex-col'>
            <bar-chart orientation='v' :title='title' :data='monthlyGames' :max='16' :chartWidth='200'
                :textParams='monthlyGames.months' :numericParams='monthlyGames.playedGames' :type='"percent"'
                :colors='["#b44c4c"]' />
        </div>
        <div class='flex flex-col'>
            <bar-chart orientation='h' :title='title' :data='monthlyGames' :max='16' :chartWidth='200'
                :textParams='monthlyGames.months' :numericParams='monthlyGames.playedGames' :type='"percent"'
                :colors='["#CD5C08", "#F5E8B7", "#C1D8C3", "#3d9970", "#b44c4c",]' />
        </div>

    </div>
</template>

<script>
import { ref, reactive } from 'vue';
import BarChart from '../../../../components/appChart/BarsChart.vue';

export default {
    components: {
        BarChart,
    },
    setup() {
        const title = ref('Played Games');
        const totalGames = ref(160);
        const monthlyGames = reactive({
            months: [
                'oct',
                'nov',
                'dic',
                'ene',
                'feb',
                'mar',
                'apr',
                'may',
                'jun',
                'jul',
            ],
            playedGames: [
                10,
                12,
                1,
                15,
                0,
                16,
                16,
                8,
                2,
                13,
            ],
            max: 16,
            colors: ['blue', 'red', 'green']
        },
        );

        return {
            title,
            totalGames,
            monthlyGames,
        }
    }
}
</script>

<style scoped></style>