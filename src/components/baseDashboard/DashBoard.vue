<template>
    <div class='dashboard'>
        <hero-banner type='small' />

        <section class='heading flex flex-col'>
            <slot name='headding'>DashBoard:</slot>
        </section>

        <section class='min-area'>
            <slot>
                <div class='min-area flex flex-col justify-center text-center'>
                    {{ content }}
                </div>
            </slot>
        </section>
    </div>
</template>

<script>

import HeroBanner from '../../layout/hero/HeroBanner';
export default {
    components: {
        HeroBanner,
    },

    setup() {
        const content = 'Nothing here yet...';

        return {
            content,
        }
    }
}
</script>

<style scoped>
.min-area {
    min-height: 50vh;
}
</style>

