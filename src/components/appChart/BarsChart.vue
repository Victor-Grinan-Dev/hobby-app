<template>
    <div class=''>

        <div>
            <h3>{{ title }}</h3>
        </div>

        <div>
            <canvas id="myChart" class='bg-blue-200'></canvas>
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
            title: "My chart",
        }
    },
}
</script>

<style scoped></style>