<template>
    <router-link :to='"/events/" + id' className="group relative overflow-hidden md:w-1/4 z-0">

        <img :src="deskImg" :alt="deskImg" class='w-full hidden md:block group-hover:scale-110 duration-200'>

        <img :src="mobImg" :alt="mobImg" class='md:hidden w-full'>
        <div
            className="gradient absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 grop-hover:from-gray-50 group-hover:to-white group-hover:opacity-70 duration-200">
        </div>
        <h5
            className="absolute px-6 duration-200 w52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
            {{ name }}
        </h5>


    </router-link>
</template>
<script>
import { ref } from 'vue';
export default {
    props: [
        'name',
        'id',
        'desktopImg',
        'mobileImg',
    ],
    setup(props) {

        const deskImg = ref(require('/src/images/' + props.desktopImg));
        const mobImg = ref(require('../../../images/' + props.mobileImg));

        return {
            deskImg,
            mobImg,
        }
    }
}
/**TODO */
//onclick navigate to the event page
</script>

