<template>
    <div className="group relative overflow-hidden md:w-1/4">

        <!--
        <img :src="desktopImg" class='w-full hidden md:block group-hover:scale-110 duration-200'>

        <img :src="mobileImg" :alt="event.id" class='md:hidden w-full'>
        <div
            className="gradient absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 grop-hover:from-gray-50 group-hover:to-white group-hover:opacity-70 duration-200">
        </div>
        <h5
            className="absolute px-6 duration-200 w52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
            {{ event.name }}
        </h5>
-->

    </div>
</template>
<script>
// import { ref, computed } from 'vue';
export default {
    props: ['event'],
    setup(props) {
        console.log(props);

        // const desktopImg = computed(() => {
        //     return '../../../images/' + props.desktopImg;
        // });
        // const mobileImg = computed(() => {
        //     return '../../../images/' + props.mobileImg;
        // });
        // const id = ref(props.id);
        // const title = ref(props.title);

        // return {
        //     desktopImg,
        //     mobileImg,
        //     id,
        //     title,
        // }
    }
}
/**TODO */
//onclick navigate to the event page
</script>

