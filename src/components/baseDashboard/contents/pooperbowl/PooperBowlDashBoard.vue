<template>
    <dash-board>
        <div class='pooper-dashboard'>
            <h2 class='text-3xl'>{{ title }}</h2>
            <div class=' flex align-top flex-wrap justify-start  items-start text-center gap-4'>
                <base-card type='full'>
                    <overall-View></overall-View>
                </base-card>
                <base-card type='full'>
                    <league-table></league-table>
                </base-card>
                <base-card v-for='item in content' v-bind:key='item' :data='item' type='full'>
                    <p> {{ item }}</p>
                </base-card>

            </div>
        </div>
    </dash-board>
</template>
<script>
import DashBoard from '../../DashBoard.vue';
import BaseCard from '../../../baseCard/BaseCard';
import OverallView from './OverallView';
import LeagueTable from './LeagueTable';

export default {
    components: {
        DashBoard,
        BaseCard,
        OverallView,
        LeagueTable,
    },
    setup() {
        const title = "Pooper Bowl IV"
        const content = ["Fixtures & Results", "Matchups Count"];

        return {
            title,
            content,
        }
    }
}
</script>