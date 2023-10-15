<template>
    <base-component>
        <!--        <div class='bg-purple-700'>{{ content }} tabs/filters</div>
        <div class='bg-purple-700'> <button>teams</button> <button>players</button></div>-->
        <div
            class='leaderboards-container flex flex-wrap md:flex-row justify-center md:justify-start py-2 items-center md:items-start gap-1 md:px-2 mb-4'>

            <leaderboard-item class="item" v-for='param in params' :key='param' :param='param'>{{ param
            }}</leaderboard-item>

        </div>
    </base-component>
</template>

<script>
import { ref } from 'vue';
import BaseComponent from '../BaseComponent.vue';
import LeaderboardItem from './LeaderboardItem.vue';
export default {
    components: {
        BaseComponent,
        LeaderboardItem,
    },
    data() {
        return {
            params: [
                {
                    title: "best scorer",
                    param: "td"
                },
                {
                    title: "Best defence",
                    param: "-less recieved td"
                },
                {
                    title: "most agresive",
                    param: "cas"
                },
                {
                    title: "most Passes",
                    param: "pass"
                },
                {
                    title: "league leader",
                    param: "points"
                },
                {
                    title: "most wins",
                    param: "win"
                },
                {
                    title: "most lost games",
                    param: "loose"
                },
                {
                    title: "most famous",
                    param: "Dedicated fans"
                },
                {
                    title: "most experienced",
                    param: "SPP"
                },
                {
                    title: "most expensive team",
                    param: "team value"
                },
                {
                    title: "best performance",
                    param: "performance(TD + CAS + COM + INT + INJ + D + FOU)"
                },
                {
                    title: "most injured",
                    param: "Injuries"
                },
                {
                    title: "most deadly",
                    param: "Deaths caused"
                },
                {
                    title: "dertiest team",
                    param: "Faults"
                },
                {
                    title: "most indiciplinated",
                    param: "Sent - offs"
                },
                {
                    title: "most dedicated",
                    param: "completions"
                },
                {
                    title: "Interceptions",
                    param: "Interceptions"
                },
                {
                    title: "stunty?",
                    param: "Win / Draw ratio = stunty"
                },
                {
                    title: "Good streak",
                    param: "Consecutive wins"
                },
                {
                    title: "Consecutive losses",
                    param: "Consecutive losses"
                },
            ]
        }
    },
    setup() {
        const content = ref('Leader boards');

        return {
            content,
        }
    }
}
</script>

<style scoped>
button {
    border-radius: 2px;
    border-color: black;
    border-width: 2px;
    padding: 0 10px;
    background-color: rgb(98, 19, 171);
}
</style>