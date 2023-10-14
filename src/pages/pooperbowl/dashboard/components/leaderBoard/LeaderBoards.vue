<template>
    <div class="leaderboard-component pr-2 md:pr-10">

        <div class='bg-purple-700'>{{ content }} tabs/filters</div>
        <div
            class='leaderboards-container bg-slate-500 flex flex-col md:flex-row flex-wrap justify-center md:justify-start py-2 items-center md:items-start gap-1 md:px-2'>

            <div class="item">item</div>
            <div class="item">item</div>
            <div class="item">item</div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const content = ref('Leader boards');

        return {
            content,
        }
    }
}
</script>

<style scoped>
.item {
    width: 250px;
    height: 250px;
    background-color: blueviolet;
}
</style>