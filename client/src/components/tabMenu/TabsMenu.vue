

<template>
    <div class='tabs-menu bg-red-300 flex justify-around md:justify-start'>
        <div v-if='tabs && tabs.lenght > 0' class="tabs-container  bg-red-200 flex justify-around md:justify-start">
            <div v-for='tab in tabs' class="tap bg-slate-500 w-16 flex items-center justify-center mx-1 text-xs">
                {{ tab }}
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    props: ['tabs'],
    setup() {
        const content = ref('Nothing here yet');

        return {
            content,
        }
    }
}
</script>

<style scoped></style>