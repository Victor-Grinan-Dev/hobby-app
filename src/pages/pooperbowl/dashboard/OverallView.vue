<template>
    <div>
        <div class='flex flex-col'>
            <bars-chart :data='monthlyGames' />
        </div>
        <div class='flex flex-col'>
            <barchart-horizontal :title='title' :data='monthlyGames' :min='min' :max='16' :chartWidth='400'
                :paramsY='monthlyGames.paramsY' :paramsX='monthlyGames.paramsX' :type='"integer"' />
        </div>

    </div>
</template>

<script>
import { ref, reactive } from 'vue';
import BarsChart from '../../../components/appChart/BarsChart';
import BarchartHorizontal from '../../../components/appChart/BarchartHorizontal.vue';

export default {
    components: {
        BarsChart,
        BarchartHorizontal,
    },
    setup() {
        const title = ref('Played Games');
        const totalGames = ref(160);
        const monthlyGames = reactive({
            paramsY: [
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
            paramsX: [
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
            min: 0,
            max: 16,
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