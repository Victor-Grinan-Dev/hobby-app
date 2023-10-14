
<template>
    <div class="leaderboard-component relative px-4 md:px-6">
        <slot>
            {{ content }}
        </slot>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const content = ref('base component');

        return {
            content,
        }
    }
}
</script>

<style scoped></style>