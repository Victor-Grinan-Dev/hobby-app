<template>
    <base-page>

        <img :src='vs_img_thinner'>
        <p class='marker text-purple-900'>3-3</p>


    </base-page>
</template>

<script>
import { ref } from 'vue';
import BasePage from '../../../components/BasePage';


export default {
    components: {
        BasePage,
    },
    props: ['title'],
    setup() {
        const vs_img = require('../../../assets/vs_image.jpg');
        const vs_img_thin = require('../../../assets/vs_image_thin.jpg');
        const vs_img_thinner = require('../../../assets/vs_image_thinner.jpg');
        const content = ref('Nothing in the Game page yet');

        return {
            content,
            vs_img,
            vs_img_thin,
            vs_img_thinner,
        }
    }
}
</script>

<style scoped>
.marker {
    font-size: 30px;
}
</style>
