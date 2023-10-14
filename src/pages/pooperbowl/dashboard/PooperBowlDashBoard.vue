<template>
    <div class='pooper-dashboard-container flex min-h-full flex-1 top-0 bottom-0'>

        <dash-board>
            <side-nav @switchComponent='switchComponent($event)' />
            <div class='pooper-dashboard flex flex-col w-full'>

                <h2 class='text-3xl ml-4'>{{ title }}</h2>

                <transition name="component" mode="out-in">
                    <component :is="currentComponent" class='component-area relative ml-4'>
                    </component>
                </transition>

                <!-- inner componentr for diferent components 
           
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
import LeaderBoards from './components/leaderBoard/LeaderBoards.vue'
import FixturesTable from './components/fixtures/FixturesTable.vue';
import NewsFeed from './components/newsFeed/NewsFeed.vue';
import LeagueTeams from './components/leagueTeams/LeagueTeams.vue';
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
        return {
            title,
        }
    },
    data() {
        return {
            currentComponent: "league-teams",
            /**
                name: "feed",
                code: "news-feed"
                name: "fixtures",
                code: "fixtures-table"
                name: "leaderboards",
                code: "leader-boards"
                name: "teams",
                code: "league-teams"
             */
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
.component-enter-active {
    animation: slide-fade 0.4s ease-out;
}

.component-leave-active {
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