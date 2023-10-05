<template>
    <li class='team-card bg-slate-500'>
        <router-link :to='"/events/pooperbowl/team/" + id'>
            <div class='team-card'>
                <div class='data-container'>
                    <div class='header-container'>
                        <img src="../../../images/pngs/gigant-dice.png" alt="header" class='header-img'>
                    </div>
                    <div class='player-color' :style='{ "background-color": color }'>
                        <div class='team-logo-container'>
                            <img :src="teamLogo" alt="#" class='team-logo'>
                        </div>
                    </div>

                    <p class='team-name' :style='{ "color": color }'>{{ title }}</p>
                    <p class='team-race'>{{ race }}</p>
                    <div class='grafic-container'>
                        win-loose chart
                    </div>
                    <div v-if='archievements' class='card-footer'>
                        <p v-for='archievement in archievements' :key='archievement'>{{ archievement.title }}: {{
                            archievement.value }}</p>
                    </div>
                </div>
            </div>
        </router-link>
    </li>
</template>

<script>
import { ref } from 'vue';

export default {
    props: ["id", 'title', 'logo', 'color', 'race'],

    setup(props) {
        const content = ref('Nothing here yet');
        const teamLogo = ref(require('../../../assets/teamLogos/' + props.logo + '.png'));
        // const teamLogo = require(teamLogo);
        console.log(props.logo)
        console.log(teamLogo)
        // console.log(teamLogo)

        const archievements = [
            { title: 'tochdowns', value: 2 }, { title: 'casualties', value: 5 }, { title: 'passes', value: 3 }
        ]

        return {
            content,
            teamLogo,
            archievements,
        }
    }
}
</script>

<style scoped>
.team-card {
    height: 65vh;
    width: 80vw;
    max-width: 300px;
    position: relative;
    /* padding: 5px; */
    border-radius: 5px;
    overflow: hidden;
}

.data-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 65vh;
}

.header-container {
    background-color: aquamarine;
    position: relative;
    top: 0;
    height: 150px;
    width: 100%;
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 0% 100%);
}

.player-color {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 80px;
}

.team-logo-container {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: aliceblue;
}

.team-name {
    font: 40px;
    font-family: monospace;
    position: relative;
    top: 25px;
    text-shadow: 0 0 2px rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.452);
    padding: 0 5px;
}

.team-race {
    font: 30px;
    font-family: monospace;
    color: rgba(55, 50, 50, 0.885);
    text-shadow: 0 0 2px rgb(225, 223, 223);
}

.grafic-container {
    background-color: blueviolet;
    width: 70%;
    height: 80px;
}

.card-footer {
    background-color: black;
    color: white;
    width: 100%;
}
</style>