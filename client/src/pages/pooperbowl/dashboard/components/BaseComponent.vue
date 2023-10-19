
<template>
    <div class="base-component relative top-0 bottom-0 flex flex-col pr-4 md:px-6 flex-1 min-h-full ">
        <slot class='w-full flex-1'>
            {{ content }}
        </slot>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const content = ref('base component');

        return {
            content,
        }
    }
}
</script>

<style scoped></style>