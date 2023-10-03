<template>
    <li>{{ content }}</li>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const content = ref('Nothing here yet');

        return {
            content,
        }
    }
}
</script>

<style scoped></style>