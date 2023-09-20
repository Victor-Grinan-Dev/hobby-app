<template>
    <button className="hidden md:block">
       {{ content }}
    </button>
</template>

<script>
    import { ref } from 'vue';
    export default {
        setup(){
            const content = ref('see all');

            return{
                content
            }
        }
    }
</script>