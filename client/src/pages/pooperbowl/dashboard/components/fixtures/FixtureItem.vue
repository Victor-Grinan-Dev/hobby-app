<template>
    <router-link to='/events/pooperbowl/game'>
        <div class='fixture-item my-1 rounded-3xl overflow-hidden flex items-center justify-between w-full'>

            <div class="img-border">
                <div class='team-1 team-image'></div>
            </div>
            <div class="img-border">
                <div class='team-2 team-image'></div>
            </div>
        </div>
    </router-link>
</template>

<script>
import { ref } from 'vue';
// import BaseComponent from '../BaseComponent.vue';
export default {
    // components: {
    //     BaseComponent,
    // },
    setup() {
        const content = ref('Fixtures component');
        const fixtureImg = require('../../../../../assets/vs_image_thinner.jpg')
        return {
            content,
            fixtureImg,
        }
    }
}
</script>

<style scoped>
.fixture-item {
    background-image: url('../../../../../assets/vs_image_shortest.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 80vw
}

/* .img-border {
    height: 120px;
    width: 120px;
    @apply bg-teal-200 rounded-full flex items-center justify-center my-2 mx-10 w-14 h-14;
} */
.team-image {
    width: 110px;
    height: 110px;
    @apply bg-teal-600 rounded-full w-12 h-12 my-2 mx-4 md:h-24 md:w-24 md:mx-10 lg:w-32 lg:h-32;
}
</style>
