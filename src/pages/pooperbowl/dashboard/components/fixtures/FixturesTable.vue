<template>
    <base-component>
        <p class='bg-teal-500'> {{ content }}</p>
    </base-component>
</template>

<script>
import { ref } from 'vue';
import BaseComponent from '../BaseComponent.vue';
export default {
    components: {
        BaseComponent,
    },
    setup() {
        const content = ref('Fixtures component');

        return {
            content,
        }
    }
}
</script>