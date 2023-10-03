<template>
    <div class='league-table'>
        <h1>{{ content }}</h1>
        <br>
        <ul v-if='hasTeams'>
            <!-- <p> Could this be a carrousel ????? </p> -->
            <team-item v-for='team in filteredTeams' :key='team.id' :id='team.id' :title='team.team' :logo='team.logo' />
        </ul>
        <div v-else>
            <p> No teams subscribed yet... </p>
        </div>
    </div>
</template>

<script>
import { ref, reactive, computed } from 'vue';
import { useStore } from 'vuex';
import TeamItem from './TeamItem.vue';

export default {
    components: {
        TeamItem,
    },
    setup() {
        const content = ref('League Table');
        const store = useStore();
        const teams = reactive(store.getters['pooperBowl/leagueTable']);
        const filteredTeams = computed(() => {
            return store.getters['pooperBowl/leagueTable'];
        })
        const hasTeams = computed(() => {
            return store.getters['pooperBowl/hasTeams'];
        })

        console.log(teams);

        return {
            content,
            filteredTeams,
            hasTeams,
        }
    }
}
/**             <team-item v-for='team in filteredTeams' :key='team.id' :id='team.id' :title='team.team' :logo='team.logo'>

            </team-item> */
</script>

<style scoped></style>