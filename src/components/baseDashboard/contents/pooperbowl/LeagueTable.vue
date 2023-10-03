<template>
    <div class='league-table'>
        <h1>{{ content }}</h1>
        <br>
        <ul v-if='hasTeams'>
            <li v-for='team in filteredTeams' :key='team.id'>
                <p>{{ team.team }}</p>
            </li>
        </ul>
        <div v-else>
            <p> No teams subscribed yet... </p>
        </div>
    </div>
</template>

<script>
import { ref, reactive, computed } from 'vue';
import { useStore } from 'vuex';
export default {
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
</script>

<style scoped></style>