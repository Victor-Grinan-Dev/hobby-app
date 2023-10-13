<template>
    <div class='pooper-dashboard-container flex min-h-full flex-1 top-0 bottom-0'>

        <dash-board>
            <side-nav @switchComponent='switchComponent($event)' />
            <div class='pooper-dashboard flex flex-col w-full'>

                <h2 class='text-3xl ml-4'>{{ title }}</h2>

                <transition name="route" mode="out-in">
                    <component :is="currentComponent" class='component-area relative ml-4'>
                    </component>
                </transition>

                <!-- inner router for diferent components 
           
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
-->
            </div>
        </dash-board>
    </div>
</template>
<script>
// import { ref } from 'vue';
import DashBoard from '../../../components/baseDashboard/DashBoard';
// import BaseCard from '../../../components/baseCard/BaseCard';
// import OverallView from './OverallView';
// import LeagueTable from './LeagueTable';
import SideNav from './components/sideNav/SideNav';

import FixturesTable from './components/FixturesTable.vue';
import NewsFeed from './components/NewsFeed.vue';
import LeaderBoards from './components/LeaderBoards.vue';
import LeagueTeams from './components/LeagueTeams.vue';
export default {
    components: {
        DashBoard,
        // BaseCard,
        // OverallView,
        SideNav,

        FixturesTable,
        NewsFeed,
        LeaderBoards,
        LeagueTeams,
    },
    setup() {
        const title = "Pooper Bowl IV"
        const content = ["Fixtures & Results", "Matchups Count"];


        return {
            title,
            content,
        }
    },
    data() {
        return {
            currentComponent: "news-feed"
        }
    },
    methods: {
        switchComponent(comp) {
            this.currentComponent = comp;
        }
    }
}
</script>
<style scoped>
.route-enter-active {
    animation: slide-fade 0.4s ease-out;
}

.route-leave-active {
    animation: slide-fade 0.4s ease-in reverse;
}

@keyframes slide-fade {
    0% {
        transform: scale(0.9);
        opacity: 0;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}
</style>