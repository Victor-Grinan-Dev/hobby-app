<template>
    <div class='league-table'>
        <h1>{{ content }}</h1>
        <br>
        <div v-for='team in filteredTeams' :key='team.id'>
            <p>{{ team.team }}</p>
            <br>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { useStore } from 'vuex';
export default {
    setup() {
        const content = ref('League Table');
        const store = useStore();
        const filteredTeams = reactive(store.getters['pooperBowl/leagueTable']);

        console.log(filteredTeams);

        return {
            content,
            filteredTeams,
        }
    }
}
</script>

<style scoped></style>