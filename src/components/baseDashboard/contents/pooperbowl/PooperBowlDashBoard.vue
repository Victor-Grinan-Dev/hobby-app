<template>
    <dash-board>
        <div class='pooper-dashboard'>
            <h2 class='text-3xl'>{{ title }}</h2>
            <div class=' flex align-top flex-wrap justify-start  items-start text-center gap-4'>
                <base-card>
                    <overall-View></overall-View>
                </base-card>
                <base-card v-for='item in content' v-bind:key='item' data='item' type='full'>
                    {{ item }}
                </base-card>

            </div>
        </div>
    </dash-board>
</template>
<script>
import DashBoard from '../../DashBoard.vue';
import BaseCard from '../../../baseCard/BaseCard';
import OverallView from './OverallView';

export default {
    components: {
        DashBoard,
        BaseCard,
        OverallView,
    },
    setup() {
        const title = "Pooper Bowl IV"
        const content = ["League table", "Fixtures & Results", "Matchups Count"];

        return {
            title,
            content,
        }
    }
}
</script>