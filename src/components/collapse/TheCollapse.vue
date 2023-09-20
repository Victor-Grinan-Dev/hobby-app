<template>
    <div v-if="isOpen" className="absolute top-0 bottom-0 left-0 flex flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black">
        <a href="/" className="hover:text-pink-700">Profile</a>
        <a href="/" className="hover:text-pink-700">Login</a>
        <a href="/" className="hover:text-pink-700">products</a>
        <a href="/" className="hover:text-pink-700">Support</a>
        <a href="/" className="hover:text-pink-700">Events</a>
    </div>
</template>

<script>
import { ref } from 'vue;'
export default {
    setup(){
        const isOpen = ref(false);

        return {
            isOpen,
        }
    }
}
</script>