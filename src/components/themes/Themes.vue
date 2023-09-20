<template>
     <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        <div className="flex justify-center mb-20 md:justify-between">
            <h2 className="text-3xl text-center uppercase md:text-left md:text-5xl">
                Our Themes
            </h2>
        </div>
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