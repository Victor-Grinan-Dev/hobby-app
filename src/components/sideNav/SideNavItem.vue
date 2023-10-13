<template>
    <div class='side-item capitalize cursor-pointer px-1 rounded' :class='{ "bg-pink-700": isSelected }'>
        {{
            name
        }}
    </div>
</template>

<script>
export default {
    props: ['name', 'code', 'fn', 'isSelected'],
    methods: {
        emitCode(code) {
            this.$emit('clicked', code);
        }
    }
}

</script>

<style scoped></style>