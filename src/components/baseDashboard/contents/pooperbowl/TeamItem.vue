<template>
    <li class='team-card bg-slate-500'>
        <router-link :to='"/events/pooperbowl/team/" + id'>
            {{ title }}
            <img :src="teamLogo" alt="">
        </router-link>
    </li>
</template>

<script>
import { ref } from 'vue'
export default {
    props: ["id", 'title', 'logo'],
    setup(props) {
        const content = ref('Nothing here yet');
        const teamLogo = ref(require('../../../../assets/teamLogos/' + props.logo + '.png'));
        return {
            content,
            teamLogo,
        }
    }
}
</script>

<style scoped></style>