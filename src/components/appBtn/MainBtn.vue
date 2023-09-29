<template>
    <button
        class="btn px-10 py-2 my-0 font-bold tracking-widest uppercase border-2 border-black font-alata hover:bg-black hover:text-white"
        :class='extraClass || ""' @click='fx'>
        {{ content }}
    </button>
</template>

<script>
export default {
    props: ['content', 'fx', 'extraClass'],
}
</script>