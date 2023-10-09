<template>
    <base-page>
        {{ content }}
    </base-page>
</template>

<script>
import { ref } from 'vue';
import BasePage from '@/components/BasePage.vue';
export default {
    components: {
        BasePage,
    },
    setup() {
        const content = ref('My Profile Page');

        return {
            content,
        }
    }
}
</script>

<style scoped></style>