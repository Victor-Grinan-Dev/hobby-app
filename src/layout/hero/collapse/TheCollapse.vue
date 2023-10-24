<template>
    <div v-if="isOpen" @scroll='disableScroll'
        class="fixed top-0 bottom-0 left-0 flex flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black z-10">
        <!--        <router-link v-for='link in collLinks' :key='link.id' class='hover:text-pink-700' :to='evaluatedLink(link.linkTo)'
            @click='closeCollapse(link.name)'>{{ link.name }}
        </router-link>-->

        <app-link v-for='link in collLinks' :key='link.id' :name='link.name' :linkTo='link.linkTo'
            :isProtected='link.isProtected' type='hover-pink' :fx='closeCollapse' />
    </div>
</template>

<script>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { appLinks } from '../../../appsetup/appSetup';
import useDialog from '../../../hooks/dialog';
import AppLink from '@/components/appLink/AppLink.vue';
export default {
    components: {
        AppLink,
    },
    setup() {
        const store = useStore();
        const { activate } = useDialog();
        const isLogged = store.getters.isLogged;
        const isOpen = computed(() => {
            return store.getters.isCollapseOpen;
        });

        const collLinks = reactive(appLinks);

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
            collLinks,
            disableScroll,
            enableScroll,
            evaluatedLink,
            closeCollapse,
        }
    }
}


//TODO: error fix when collapse is open and windows gets resized to big the close collapse button desapairs (hambrgr menu)
</script>