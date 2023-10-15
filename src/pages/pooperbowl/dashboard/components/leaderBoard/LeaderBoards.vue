<template>
    <base-component>
        <div class='bg-purple-700'>{{ content }} tabs/filters</div>
        <div class='bg-purple-700'> <button>teams</button> <button>players</button></div>
        <div
            class='leaderboards-container bg-slate-500 flex flex-col md:flex-row flex-wrap justify-center md:justify-start py-2 items-center md:items-start gap-1 md:px-2'>

            <div class="item" v-for='param in params' :key='param'>{{ param }}</div>

        </div>
    </base-component>
</template>

<script>
import { ref } from 'vue';
import BaseComponent from '../BaseComponent.vue';
export default {
    components: {
        BaseComponent,
    },
    data() {
        return {
            params: [
                "td(SCORER)",
                "-less recieved td (defense)",
                "cas",
                "pass",
                "points",
                "win",
                "loose",
                "Dedicated fans",
                "SPP",
                "team value",
                "performance(TD + CAS + COM + INT + INJ + D + FOU)",
                "Injuries",
                "Deaths caused",
                "Fouls",
                "Sent - offs",
                "Completions",
                "Interceptions",
                "Win / Draw ratio = stunty",
                "Consecutive wins",
                "Consecutive losses",
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
.item {
    width: 240px;
    height: 240px;
    background-color: blueviolet;
}

button {
    border-radius: 2px;
    border-color: black;
    border-width: 2px;
    padding: 0 10px;
    background-color: rgb(98, 19, 171);
}
</style>