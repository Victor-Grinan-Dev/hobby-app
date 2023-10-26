<template>
    <div className="app-link group h-10">
        <router-link v-if='isAccessible' :to='linkTo' :class='{ "hover:text-pink-700": hoverPink }' @click='fx'>
            {{ name }}
            <div v-if='!hoverPink' className="link-underline mx-2 group-hover:border-b group hover:border-blue-50"></div>
        </router-link>
        <div v-else class='cursor-pointer capitalize' :class='{ "hover:text-pink-700": hoverPink }' @click='activateDialog'>
            {{ name }}
            <div v-if='!hoverPink' className="link-underline mx-2 group-hover:border-b group hover:border-blue-50"></div>
        </div>
    </div>
</template>

<script>
import { ref, toRefs } from 'vue';
import useDialog from '@/hooks/dialog';
export default {
    props: ['name', 'linkTo', 'isProtected', 'type', 'fx'],
    computed: {
        isLogged() {
            return this.$store.state.isLogged;
        },
        isAccessible() {
            if (this.isProtected && !this.isLogged) {
                return false;
            } else if (this.isProtected && this.isLogged) {
                return true;
            } else {
                return true;
            }
        },
        hoverPink() {
            return this.type === "hover-pink"
        }
    },

    methods: {
        showDialog() {
            this.$store.commit('showDialog');
        },

    },
    setup(props) {
        const content = ref('linkname');
        const { fx } = toRefs(props);
        const { activate } = useDialog();
        const activateDialog = () => {
            activate('Access Denied!', 'Only Logged in users can see their profiles.');
            if (fx) {
                fx.value()
            }
        }

        return {
            content,

            activateDialog,
        }
    }
}
</script>