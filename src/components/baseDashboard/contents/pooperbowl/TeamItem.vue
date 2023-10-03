<template>
    <li class='team-card bg-slate-500'>
        <router-link :to='"/events/pooperbowl/team/" + id'>
            {{ title }}
        </router-link>
    </li>
</template>

<script>
import { ref, computed } from 'vue'
export default {
    props: ["id", 'title', 'logo'],
    setup(props) {
        const content = ref('Nothing here yet');
        const logoURL = computed(() => {
            return '../../../../assets/teamLogos/' + props.logo + '.png';
        })
        // const teamLogo = require(logoURL);
        console.log(props.logo)
        console.log(logoURL)
        // console.log(teamLogo)

        return {
            content,

        }
    }
}
</script>

<style scoped></style>