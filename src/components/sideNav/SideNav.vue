<template>
    <div class='side-nav'>
        <h1>{{ content }}</h1>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const content = ref('side nav');

        return {
            content,
        }
    }
}
</script>

<style scoped></style>