<template>
    <div class="side-navs-options relative text-white text-sm">
        <div class='static-side-nav relative hidden  min-h-full top-0 bottom-0 bg-pink-900 md:flex flex-col px-2 py-6'>
            <!-- TODO: MAP THIS MESS (multiple levels of emit)
            <SideNavItem v-for='tab in tabs' :key='tab' :name='tab.name' :code='tab.code'
                :isSelected='currentTab === tab.code' :fn='switchComponents(tab.code, false)' />
            -->
            <div class='side-item capitalize cursor-pointer px-1 rounded'
                :class='{ "bg-pink-700": currentTab === "news-feed" }' @click='switchComponents("news-feed", false)'>news
                feed</div>
            <div class='side-item capitalize cursor-pointer px-1 rounded'
                :class='{ "bg-pink-700": currentTab === "fixtures-table" }'
                @click='switchComponents("fixtures-table", false)'>fixtures
            </div>
            <div class='side-item capitalize cursor-pointer px-1 rounded'
                :class='{ "bg-pink-700": currentTab === "leader-boards" }'
                @click='switchComponents("leader-boards", false)'>leaderboard
            </div>
            <div class='side-item capitalize cursor-pointer px-1 rounded'
                :class='{ "bg-pink-700": currentTab === "league-teams" }' @click='switchComponents("league-teams", false)'>
                teams</div>
        </div>
        <div class='side-nav fixed top-0 bottom-0 bg-pink-900 flex flex-col px-2 py-6'
            :class='{ "-translate-x-full": isHidden }'>

            <div class='handle absolute md:hidden bg-pink-900 hover:bg-pink-700 cursor-pointer pr-1' @click='toggleSideNav'>
                {{ arrowDirection }}
            </div>

            <div class='side-item capitalize cursor-pointer px-1 rounded'
                :class='{ "bg-pink-700": currentTab === "news-feed" }' @click='switchComponents("news-feed", true)'>news
                feed</div>
            <div class='side-item capitalize cursor-pointer px-1 rounded'
                :class='{ "bg-pink-700": currentTab === "fixtures-table" }'
                @click='switchComponents("fixtures-table", true)'>fixtures
            </div>
            <div class='side-item capitalize cursor-pointer px-1 rounded'
                :class='{ "bg-pink-700": currentTab === "leader-boards" }' @click='switchComponents("leader-boards", true)'>
                leaderboard
            </div>
            <div class='side-item capitalize cursor-pointer px-1 rounded'
                :class='{ "bg-pink-700": currentTab === "league-teams" }' @click='switchComponents("league-teams", true)'>
                teams</div>

        </div>
    </div>
</template>

<script>
// import SideNavItem from './SideNavItem.vue';
export default {
    // components: { SideNavItem, },
    emits: ['switchComponent'],
    data() {
        return {
            isHidden: true,
            currentTab: "news-feed",
            tabs: [
                {
                    name: "feed",
                    code: "news-feed"
                },
                {
                    name: "fixtures",
                    code: "fixtures-table"
                },
                {
                    name: "leaderboards",
                    code: "leader-boards"
                },
                {
                    name: "teams",
                    code: "league-teams"
                },
            ]
        }
    },

    methods: {
        switchComponents(comp, toggle) {
            this.$emit('switchComponent', comp);
            this.currentTab = comp;
            if (toggle) {
                this.toggleSideNav();
            }

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