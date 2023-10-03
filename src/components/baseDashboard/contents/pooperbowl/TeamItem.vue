<template>
    <li class='team-card bg-slate-500 mb-4'>
        <router-link :to='"/events/pooperbowl/team/" + id'>
            {{ title }}
            <div class='team-logo-container bg-orange-100 relative'>
                <img :src="teamLogo" :alt="logo" class='object-fit'>
            </div>
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