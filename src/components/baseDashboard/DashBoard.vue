<template>
    <div class='dashboard relative min-h-full pb-4'>
        <hero-banner type='small' />
        <section class='dataContainer relative flex'>
            <slot>
                <div class='flex flex-col justify-center items-center place-self-center mx-auto max-w-6xl'>
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

