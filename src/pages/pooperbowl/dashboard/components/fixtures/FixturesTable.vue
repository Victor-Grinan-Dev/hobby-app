<template>
    <div class='fixtures-container bg-teal-500'>
        {{ content }}
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const content = ref('Fixtures');

        return {
            content,
        }
    }
}
</script>

<style scoped></style>