<template>
    <base-page></base-page>
</template>

<script>
import { ref } from 'vue';
import BasePage from '../../../components/BasePage';

export default {
    components: {
        BasePage,
    },
    props: ['title'],
    setup() {

        const content = ref('Nothing in the Game page yet');

        return {
            content,
        }
    }
}
</script>

<style scoped></style>
