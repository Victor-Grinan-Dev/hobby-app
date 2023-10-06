<template>
    <div
        class='group rounded  py-4 px-1 md:px-6 flex justify-center items-center bg-slate-200 relative shadow-xl w-full max-w-6xl mx-auto '>
        <!--hover:shadow-lg hover:scale-105-->
        <slot>inside content</slot>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    props: ['item'],
    setup() {
        const content = ref('Nothing here yet');

        return {
            content,
        }
    }
}
</script>

<style scoped></style>