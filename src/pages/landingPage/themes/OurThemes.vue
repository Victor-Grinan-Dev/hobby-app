<template>
    <section id='creations'>
        <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
            <div className="flex justify-center mb-20 md:justify-between">
                <h2 className="text-3xl text-center uppercase md:text-left md:text-5xl">
                    Our Themes
                </h2>
                <main-btn :content='cta' extraClass='hidden md:block'></main-btn>

            </div>

            <div className="items-container">

                <theme-item v-for='event in events' :name='event.name' :id='event.id' v-bind:key='event.id'
                    :desktopImg='event.desktopImg' :mobileImg='event.mobileImg'></theme-item>

                <!--
                <router-link to='/events/:pooperbowl' class='group relative overflow-hidden md:w-1/4'>

                    <img src="../../../images/blood-bowl-desktop.jpeg" alt="blood-bowl"
                        class='w-full hidden md:block group-hover:scale-110 duration-200'>

                    <img src="../../../images/blood-bowl-mobile.jpeg" alt="blood-bowl" class='md:hidden w-full'>
                    <div
                        className="gradient absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 grop-hover:from-gray-50 group-hover:to-white group-hover:opacity-70 duration-200">
                    </div>
                    <h5
                        className="absolute px-6 duration-200 w52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                        Pooper Bowl league
                    </h5>

                </router-link>

                <router-link to='/events/:40kcamp' className="group relative overflow-hidden md:w-1/4">
                    <img src="../../../images/40k-desktop.jpeg" alt="blood-bowl"
                        class='w-full hidden md:block group-hover:scale-110 duration-200'>

                    <img src="../../../images/40k-mobile.jpeg" alt="blood-bowl" class='md:hidden w-full'>
                    <div
                        className="gradient absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 grop-hover:from-gray-50 group-hover:to-white group-hover:opacity-70 duration-200">
                    </div>
                    <h5
                        className="absolute px-6 duration-200 w52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                        40K campaigns
                    </h5>

                </router-link>

                <router-link to='/events/:magic' className="group relative overflow-hidden md:w-1/4">
                    <img src="../../../images/magic-desktop.jpg" alt="blood-bowl"
                        class='w-full hidden md:block group-hover:scale-110 duration-200'>

                    <img src="../../../images/magic-mobile.jpg" alt="blood-bowl" class='md:hidden w-full'>
                    <div
                        className="gradient absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 grop-hover:from-gray-50 group-hover:to-white group-hover:opacity-70 duration-200">
                    </div>
                    <h5
                        className="absolute px-6 duration-200 w52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                        Magic Brawls
                    </h5>

                </router-link>

                <router-link to='/events/:others' className="group relative overflow-hidden md:w-1/4">
                    <img src="../../../images/stratego-desktop.png" alt="blood-bowl"
                        class='w-full hidden md:block group-hover:scale-110 duration-200'>

                    <img src="../../../images/stratego-mobile.png" alt="blood-bowl" class='md:hidden w-full'>
                    <div
                        className="gradient absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 grop-hover:from-gray-50 group-hover:to-white group-hover:opacity-70 duration-200">
                    </div>
                    <h5
                        className="absolute px-6 duration-200 w52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                        Others
                    </h5>

                </router-link>
-->
            </div>
        </div>

        <div class="flex justify-center mt-10 mb-10 mx-6 md:hidden">
            <main-btn :content='cta' extraClass='w-full md:hidden'></main-btn>
        </div>
    </section>
</template>
<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import ThemeItem from './ThemeItem.vue';

export default {
    components: { ThemeItem },
    setup() {
        const store = useStore();
        const isOpen = ref(false);
        const cta = 'Join Us Now!'
        const events = store.getters.events;
        // console.log(events[0].id);
        // console.log(events[0].name);
        // console.log(events[0].desktopImg);
        // console.log(events[0].mobileImg);

        return {
            isOpen,
            cta,
            events
        }
    }
}

//<themes-item v-for='event in events' :name='event.name' :id='event.id' v-bind:key='event.id' :desktopImg='eventdesktopImg' :mobileImg='event.mobileImg'></themes-item >
</script>