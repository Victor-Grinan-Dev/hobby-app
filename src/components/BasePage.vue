<template>
    <div>
        <hero-banner type='small' />
        <div class='content-container px-6'>
            <slot>{{ content }}</slot>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import HeroBanner from '../layout/hero/HeroBanner';
export default {
    components: {
        HeroBanner,
    },
    props: ['title'],
    setup() {
        const route = useRoute();
        const page = route.fullPath.split("/")[1]
        const content = ref('Nothing in the ' + page + ' page yet');

        return {
            content,
        }
    }
}
</script>

<style scoped></style>