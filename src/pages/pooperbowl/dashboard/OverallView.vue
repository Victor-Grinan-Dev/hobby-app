<template>
    <div class='flex flex-wrap justify-center gap-4 w-full'>
        <div class='flex flex-col'>
            <barchart-horizontal :title='title' :data='monthlyGames' :min='min' :max='16' :chartWidth='200'
                :paramsY='monthlyGames.paramsY' :paramsX='monthlyGames.paramsX' :type='"percent"' />
        </div>
        <div class='flex flex-col'>
            <barchart-horizontal :title='title' :data='monthlyGames' :min='min' :max='16' :chartWidth='200'
                :paramsY='monthlyGames.paramsY' :paramsX='monthlyGames.paramsX' :type='"percent"' />
        </div>

    </div>
</template>

<script>
import { ref, reactive } from 'vue';
import BarchartHorizontal from '../../../components/appChart/BarchartHorizontal.vue';

export default {
    components: {
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