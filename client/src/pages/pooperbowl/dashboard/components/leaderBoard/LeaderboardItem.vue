<template>
    <div class='item  bg-slate-300 mb-4 rounded '>
        <h3 class='capitalize text-center bg-slate-700'>{{ param.title || content }}</h3>
        <div class='list-container flex flex-col gap-1'>

            <div v-for='(team, index) in orederdTeams' :key='team.id'
                class='flex flex-col justify-between top-0 bottom-0 h-full'>
                <router-link :to='"/events/pooperbowl/team/" + team.id'>
                    <div class='team-item flex p-2 bg-slate-400 rounded'>
                        <div class='team-item-logo w-6 h-6 rounded-full flex items-center justify-center text-white mx-1'
                            :style='{ "background-color": team.color }'>
                            {{ index + 1 }}</div>
                        <p>{{ team.team }}</p>
                    </div>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
export default {

    props: ['param'],
    setup() {
        const content = ref('Nothing here yet');

        const orederdTeams = computed(() => {
            return store.getters['pooperBowl/leagueTable'];
        });

        const store = useStore();
        store.getters['pooperBowl/leagueTable'];
        return {
            content,
            orederdTeams,
        }
    }
}
</script>

<style scoped>
.item {
    width: 240px;
    min-height: 240px;
}
</style>