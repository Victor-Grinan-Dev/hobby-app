<template>
    <li class='team-card bg-slate-500'>
        <router-link :to='"/events/pooperbowl/team/" + id'>
            <div class='team-card'>
                <div class='data-container'>
                    <div class='header-container'>
                        <img src="#" alt="#" class='header-img'>
                    </div>
                    <div class='team-logo-container'>
                        <img :src="logoURL" alt="#" class='team-logo'>
                    </div>
                    <p class='team-name'>Team name</p>
                    <p class='team-race'>Team race</p>
                    <div class='grafic-container'>
                        grafic
                    </div>
                    <div class='card-footer'>
                        card footer
                    </div>
                </div>
            </div>
        </router-link>
    </li>
</template>

<script>
import { ref } from 'vue';

export default {
    props: ["id", 'title', 'logo'],

    setup(props) {
        const content = ref('Nothing here yet');
        const logoURL = require(ref('../../../../assets/teamLogos/' + props.logo + '.png'));
        // const teamLogo = require(logoURL);
        console.log(props.logo)
        console.log(logoURL)
        // console.log(teamLogo)

        return {
            content,
            logoURL,
        }
    }
}
</script>

<style scoped>
.team-card {
    margin: 5px;
    height: 50vh;
    width: 80vw;
    max-width: 400px;
}
</style>