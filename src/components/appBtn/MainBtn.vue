<template>
    <button
        class="btn px-10 py-2 my-0 font-bold tracking-widest uppercase border-2 border-black font-alata hover:bg-black hover:text-white"
        :class='extraClass || ""' @click='fx'>
        {{ caption }}
    </button>
</template>

<script>
// import { toRefs } from 'vue';
// import { useRouter } from 'vue-router';

export default {
    props: ['caption', 'fx', 'extraClass', 'routeTo'],
    // setup(props) {
    //     const { fx: action } = toRefs(props);
    //     return {
    //         action,
    //     }
    // }
}
</script>