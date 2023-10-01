<template>
    <div class='dashboard'>
        <hero-banner type='small' />
        {{ content }}
    </div>
</template>

<script>

import HeroBanner from '../../layout/hero/HeroBanner';
export default {
    components: {
        HeroBanner,
    },
    props: ['eventTitle'],
    setup() {
        const content = 'Dashboard'
        return {
            content,
        }
    }
}
</script>