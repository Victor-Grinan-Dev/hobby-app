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
            </div>
        </dash-board>
    </div>
</template>
<script>
// import { ref } from 'vue';
import DashBoard from '../../../components/baseDashboard/DashBoard';
import SideNav from './components/sideNav/SideNav';
import LeaderBoards from './components/leaderBoard/LeaderBoards.vue'
import FixturesTable from './components/fixtures/FixturesTable.vue';
import NewsFeed from './components/newsFeed/NewsFeed.vue';
import LeagueTeams from './components/leagueTeams/LeagueTeams.vue';

export default {
    components: {
        DashBoard,
        SideNav,
        FixturesTable,
        NewsFeed,
        LeaderBoards,
        LeagueTeams,
    },
    setup() {
        const title = "Pooper Bowl IV";
        const store = useStore();
        const page = computed(() => {
            return store.getters['pooperBowl/dashboardTab']
        });
        console.log(page.value)
        return {
            title,
            page,
        }
    },
    data() {
        return {
            currentComponent: "news-feed",
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