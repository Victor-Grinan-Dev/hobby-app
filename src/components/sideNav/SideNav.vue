<template>
    <div class="side-navs-options text-white">
        <div class='static-side-nav relative hidden  min-h-full top-0 bottom-0 bg-pink-900 md:flex flex-col px-2 py-6'>
            <div class='side-item capitalize cursor-pointer' @click='switchComponents("fixtures-table")'>fixtures</div>
            <div class='side-item capitalize cursor-pointer' @click='switchComponents("news-feed")'>news feed</div>
            <div class='side-item capitalize cursor-pointer' @click='switchComponents("leader-boards")'>leaderboard</div>
            <div class='side-item capitalize cursor-pointer' @click='switchComponents("league-teams")'>teams</div>
        </div>
        <div class='side-nav fixed top-0 bottom-0 bg-pink-900 flex flex-col px-2 py-6'
            :class='{ "-translate-x-full": isHidden }'>

            <div class='handle absolute md:hidden bg-pink-900 hover:bg-pink-700 cursor-pointer pr-1' @click='toggleSideNav'>
                {{ arrowDirection }}
            </div>

            <div class='side-item capitalize cursor-pointer' @click='switchComponents("fixtures-table")'>fixtures</div>
            <div class='side-item capitalize cursor-pointer' @click='switchComponents("news-feed")'>news feed</div>
            <div class='side-item capitalize cursor-pointer' @click='switchComponents("leader-boards")'>leaderboard</div>
            <div class='side-item capitalize cursor-pointer' @click='switchComponents("league-teams")'>teams</div>

        </div>
    </div>
</template>

<script>
export default {
    emits: ['switchComponent'],
    data() {
        return {
            isHidden: true,
        }
    },

    methods: {
        switchComponents(comp) {
            this.$emit('switchComponent', comp);
            this.toggleSideNav();
        },
        toggleSideNav() {
            this.isHidden = !this.isHidden
        }
    },
    computed: {
        arrowDirection() {
            return this.isHidden ? ">" : "<"
        },
    }
}
</script>

<style scoped>
.side-nav {
    transition: all .5s ease-in-out;
}

.handle {
    height: 25px;
    right: -15px;
    top: 10px;
    border-radius: 0 100% 100% 0;
}

.side-navs-options {
    z-index: 999;
}
</style>