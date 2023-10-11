<template>
    <button class='app-btn mx-1 capitalize px-2' :class='btnStyle' @click='fx'>
        <p>{{ caption || content }}</p>
    </button>
</template>

<script>
import { ref, toRefs, computed } from 'vue'
export default {
    props: ['caption', 'type', 'fx'],
    setup(props) {
        const content = ref('no caption');
        const { type } = toRefs(props);

        const btnStyles = {
            primary: "bg-teal-900 text-white",
            secundary: "bg-emerald-600 text-white",
            neutral: "bg-slate-900 text-white",
        }

        const btnStyle = computed(() => {
            return btnStyles[type.value];
        }).value;

        return {
            content,
            btnStyle,
        }
    }
}
</script>

<style scoped></style>
