<template>
    <div class='side-scroll min-w-screen'>
        {{ content }}
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const content = ref('side scroll');

        return {
            content,
        }
    }
}
</script>

<style scoped></style>