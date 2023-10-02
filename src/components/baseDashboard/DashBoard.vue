<template>
    <div class='dashboard relative min-h-full pb-4 '>
        <hero-banner type='small' />

        <section class='heading flex flex-col md:px-4'>
            <slot name='headding'>DashBoard:</slot>
        </section>

        <section class='dataContainer relative h-30vh flex md:px-4 '>
            <slot>
                <div class='flex flex-col justify-center items-center place-self-center mx-auto '>
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
    min-height: 40vh;
}

.dataContainer {
    min-height: 40vh;
    /* background-color: blue; */
}
</style>

