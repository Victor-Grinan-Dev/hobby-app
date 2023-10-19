<template>
    <div v-if="isOpen" @scroll='disableScroll'
        class="fixed top-0 bottom-0 left-0 flex flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black z-10">
        <router-link v-for='link in appLinks' :key='link' class='hover:text-pink-700' :to='evaluatedLink(link)'
            @click='closeCollapse(link)'>{{ link }}
        </router-link>
    </div>
</template>

<script>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { links } from '../../../appsetup/appSetup';
import useDialog from '../../../hooks/dialog';
export default {
    setup() {
        const store = useStore();
        const { activate } = useDialog();
        const isLogged = store.getters.isLogged;
        const isOpen = computed(() => {
            return store.getters.isCollapseOpen;
        });

        const appLinks = reactive(links);

        function disableScroll() {
            document.body.scrollTop = 0;
        }

        function enableScroll() {
            window.onscroll = function () { };
        }
        function closeCollapse(link) {

            store.commit('toggleCollapse');

            if (link === 'profile' && !isLogged) {
                activate('Access denied', 'You must be logged in first');
            }
        }
        const evaluatedLink = (link) => {
            let finalLink;
            if (link === 'profile') {
                finalLink = "/";
            } else {
                finalLink = "/" + link;
            }
            return finalLink;
        }

        return {
            isOpen,
            appLinks,
            disableScroll,
            enableScroll,
            evaluatedLink,
            closeCollapse,
        }
    }
}


//TODO: error fix when collapse is open and windows gets resized to big the close collapse button desapairs (hambrgr menu)
</script>