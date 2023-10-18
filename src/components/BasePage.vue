<template>
    <div class='base-page relative'>
        <hero-banner type='small' />
        <div class='base-page-content relative content-container px-6'>
            <slot>{{ content }}</slot>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import HeroBanner from '../layout/hero/HeroBanner';
export default {
    components: {
        HeroBanner,
    },
    props: ['title'],
    setup(props) {
        const content = ref('Nothing in ' + (props.title || 'this') + ' page yet');

        return {
            content,
        }
    }
}
</script>

<style scoped></style>