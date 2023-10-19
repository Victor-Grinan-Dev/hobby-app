<template>
    <div class='dashboard relative min-h-full flex-1 top-0 bottom-0 bg-slate-200'>
        <hero-banner type='small' />
        <section class='data-container relative top-0 bottom-0 flex flex-1'>
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

.data-container {
    min-height: 66vh;
}
</style>

