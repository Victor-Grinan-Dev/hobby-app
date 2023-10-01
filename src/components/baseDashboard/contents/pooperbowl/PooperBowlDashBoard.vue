<template>
    <dash-board>
        <div class='min-h-screen flex flex-col align-top flex-wrap justify-center text-center'>
            {{ content }}
        </div>
    </dash-board>
</template>
<script>
import DashBoard from '../../DashBoard.vue';
export default {
    components: {
        DashBoard,
    },
    setup() {
        const content = "Pooper Bowl IV"
        return {
            content,
        }
    }
}
</script>