<template>
    <h1>{{ content }}</h1>
</template>

<script>
import { ref } from 'vue';
// import { useRouter } from 'vue-router';

export default {
    setup() {
        const content = ref('Team details, Nothing here yet');
        // const router = useRouter();
        return {
            content,
        }
    }
}
</script>

<style scoped></style>