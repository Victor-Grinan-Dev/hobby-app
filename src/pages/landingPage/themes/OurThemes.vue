<template>
    <section id='themes'>
        <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
            <div className="flex justify-center mb-20 md:justify-between">
                <h2 className="text-3xl text-center uppercase md:text-left md:text-5xl">
                    Our Themes
                </h2>
                <main-btn :caption='cta' extraClass='hidden md:block' :fx='redirectToJoinUs'></main-btn>
            </div>
            <div className="items-container">
                <theme-item v-for='event in events' :name='event.name' :id='event.id' v-bind:key='event.id'
                    :desktopImg='event.desktopImg' :mobileImg='event.mobileImg'></theme-item>
            </div>
        </div>
        <div class="flex justify-center mt-10 mb-10 mx-6 md:hidden">
            <main-btn :caption='cta' extraClass='w-full md:hidden' :fx='redirectToJoinUs'></main-btn>
        </div>
    </section>
</template>
<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import ThemeItem from './ThemeItem.vue';
import { useRouter } from 'vue-router';

export default {
    components: { ThemeItem },
    setup() {
        const store = useStore();
        const router = useRouter();
        const isOpen = ref(false);
        const cta = 'Join Us Now!'
        const events = store.getters.events;
        const redirectToJoinUs = () => {
            router.push('/joinUs');
        }
        return {
            isOpen,
            cta,
            events,
            redirectToJoinUs,
        }
    }
}

</script>