<template>
    <div class='league-table'>
        <h1>{{ content }}</h1>
        <br>
        <ul v-if='hasTeams' class='teams-container flex flex-wrap justify-center gap-2'>
            <!-- <p> Could this be a carrousel ????? </p> -->
            <team-item v-for='team in filteredTeams' :key='team.id' :id='team.id' :title='team.team' :logo='team.logo'
                :color='team.color' :race='team.race' />
        </ul>
        <div v-else>
            <p> No teams subscribed yet... </p>
        </div>

        <!--TODO:
            <div class="carousel">
                <button class="appButton carousel__button carousel__button--left is-hidden">&#60;</button>
                    <div class="carousel__track-container">
                        <ul class="carousel__track"></ul>
                        <div class="carousel__nav"></div>
                    </div>
                <button class="appButton carousel__button carousel__button--right">&#62;</button>
            </div>
        -->
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