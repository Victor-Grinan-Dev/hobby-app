<template>
    <div className="app-link group h-10">
        <router-link :to='linkTo'>
            {{ name }}
            <div className=" link-underline mx-2 group-hover:border-b group hover:border-blue-50"></div>
        </router-link>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    props: ['name', 'linkTo'],
    setup() {
        const content = ref('linkname');

        return {
            content,
        }
    }
}
</script>