<template>
    <base-component>

        <div class="fixtures-table flex flex-col flex-1 items-center">
            <p class='bg-teal-500'> {{ content }}</p>
            <fixture-item />
            <fixture-item />
            <fixture-item />
            <fixture-item />
        </div>

    </base-component>
</template>

<script>
import { ref } from 'vue';
import BaseComponent from '../BaseComponent.vue';
import FixtureItem from './FixtureItem.vue';
export default {
    components: {
        BaseComponent,
        FixtureItem,
    },
    setup() {
        const content = ref('Fixtures component redirects to the game feature');

        return {
            content,
        }
    }
}
</script>
<style scoped></style>