<template>
    <li class='team-card-list' :style='{ backgroundColor: cardBg }'>
        <router-link :to='"/events/pooperbowl/team/" + id'>
            <div class='team-card'>
                <div class='data-container'>
                    <div class='header-container'>
                        <img src="../../../../../images/pngs/gigant-dice.png" alt="header" class='header-img'>
                    </div>
                    <div class='player-color' :style='{ "background-color": color }'>
                        <div class='team-logo-container' :style='{ backgroundColor: cardBg }'>
                            <img :src="teamLogo" alt="#" class='team-logo'>
                        </div>
                    </div>

                    <div class='team-name font-black text-lg text-white'>
                        <p :style='{ "color": white, fontSize: "16px", fontWeight: "900" }'>"{{
                            title }}"</p>
                        <p class='team-race text-xs font-mono'>{{ race }}</p>
                    </div>

                    <bars-chart :textParams='["TDs", "Cas", "Pass"]' :numericParams='[50, 72, 10]' :max='100'
                        :colors='["#63B7AF", "#E57C23", "#93BFCF"]' :chartWidth='200' :type='"integer"' :orientation='"v"'
                        :barThickness='"85px"' />
                </div>
            </div>
        </router-link>
    </li>
</template>

<script>
import { ref } from 'vue';

import BarsChart from '../../../../../components/appChart/BarsChart.vue';
export default {
    props: ["id", 'title', 'logo', 'color', 'race'],
    components: { BarsChart },
    setup(props) {
        const content = ref('Nothing here yet');
        const teamLogo = ref(require('../../../../../assets/teamLogos/' + props.logo + '.png'));
        const cardBg = ref('white')
        const archievements = [
            { title: 'tochdowns', value: 50 }, { title: 'casualties', value: 72 }, { title: 'passes', value: 10 }
        ]

        /**BADGE IDEA */
        //https://codepen.io/samratambadekar/pen/NWxxjWR
        const badges = {
            football: '🏈',
            prize: '🏆',
            firstPlace: '🥇',
            blood: '🩸',
            shield: '🛡️',
        }

        //'title', 'data', 'textParams', 'numericParams', 'max', 'colors', 'chartWidth', 'type', 'orientation'

        return {
            content,
            teamLogo,
            archievements,
            cardBg,
            badges,
        }
    }
}
</script>

<style scoped>
.team-card {
    height: 450px;
    width: 80vw;
    max-width: 300px;
    position: relative;
    /* border-radius: 5px; */
    overflow: hidden;
    padding-bottom: 1rem;
}

.data-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 100%;
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
    top: 12px;
    background-color: rgba(0, 0, 0, 0.726);
    padding: 0 5px;
}

/* .team-race { */
/* font: 8px;
    font-family: monospace; */
/* color: rgba(55, 50, 50, 0.885); */
/* text-shadow: 0 0 2px rgb(225, 223, 223); */
/* } */
.grafic-container {
    background-color: blueviolet;
    width: 90%;
    min-width: 200px;
    height: 200px;
}

.card-footer {
    background-color: black;
    color: white;
    width: 100%;
    border-radius: 5px;
}
</style>