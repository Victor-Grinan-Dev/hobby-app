<template>
    <div class=''>

        <div>
            <h3>{{ title }}</h3>
        </div>

        <div class='flex justify-center items-center'>
            <canvas id="myChart" class='bg-blue-200 ' width='200' height='150'></canvas>
        </div>
    </div>
</template>

<script>

// import { ref } from 'vue';

export default {
    components: {
    },
    props: ['data'],
    data() {
        return {
            title: "League Progress Chart",
        }
    },
}
</script>

<style scoped></style>