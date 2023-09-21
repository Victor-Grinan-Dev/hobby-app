
<template>
    <div v-if="isOpen" className="absolute top-0 bottom-0 left-0 flex flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black">
        <a href="/" className="hover:text-pink-700">{{ appLinks[0] }}</a>
        <a href="/" className="hover:text-pink-700">{{ appLinks[1] }}</a>
        <a href="/" className="hover:text-pink-700">{{ appLinks[2] }}</a>
        <a href="/" className="hover:text-pink-700">{{ appLinks[3] }}</a>
        <a href="/" className="hover:text-pink-700">{{ appLinks[4] }}</a>
    </div>
</template>

<script>
import { ref, reactive } from 'vue';
import  { links }  from '../../../appsetup/appSetup';

export default {
    setup(){
        const isOpen = ref(false); //get thid value from the VUEX store
        const appLinks = reactive(links);

        return {
            isOpen,
            appLinks,
        }
    }
}
</script>