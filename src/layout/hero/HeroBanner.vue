<template>
  <section className='hero saturate-60 navContainer max-w-6xl mx-auto px-6 min' id='hero' :class="mode">

    <nav className="nav-logo-container flex item-center justify-between font-bold text-white mr-6">

      <!--malditos dice logo-->
      <router-link to='/'>
        <img src='../../images/malditosdice.png' className="w-44 ml-6 z-0" alt="selected img" />
      </router-link>

      <!-- desktop menu -->

      <div className="hidden h-10 font-alata md:flex md:space-x-8">

        <app-link v-for='link in heroLinks' :key='link.id' :name='link.name' :linkTo='link.linkTo'
          :isProtected='link.isProtected' />

      </div>
      <!-- Mobile menu -->
      <hamburger-menu />
    </nav>

    <div v-if='type === "full"'
      className="max-w-lg mt-32 mx-6 mb-32 p-4 font-sans text-4xl text-white uppercase border-4 md:p-10 md:m32 md:text-4xl">
      You can roll like we do
    </div>
  </section>
  <the-collapse></the-collapse>
</template>

<script>
import { ref, reactive, computed } from 'vue';
import HamburgerMenu from './hamburgerMenu/HamburgerMenu.vue';
import TheCollapse from './collapse/TheCollapse';
// import { links } from '../../appsetup/appSetup';
import { appLinks } from '@/appsetup/appSetup';
import useDialog from '../../hooks/dialog';
import AppLink from '@/components/appLink/AppLink.vue';

export default {
  components: {
    HamburgerMenu,
    TheCollapse,
    AppLink,

  },

  props: ['type'],

  data() {
    return {
    }
  },

  computed: {
    isVisible() {
      return this.$store.state.isVisible;
    },
    isLogged() {
      return this.$store.state.isLogged;
    }
  },

  methods: {
    showDialog() {
      this.$store.commit('showDialog');
    }
  },

  setup(props) {
    const heroLinks = reactive(appLinks);
    const recievedMode = ref(props.type).value;
    const { activate } = useDialog();
    const mode = computed(() => {
      let finalMode;
      if (recievedMode === 'small') {
        finalMode = { small: true, full: false }
      } else if (recievedMode === 'full') {
        finalMode = { small: false, full: true };
      }
      return finalMode;
    }).value;

    const activateDialog = () => {
      activate('Access Denied!', 'Only Logged in users can see their profiles.')
    }
    return {
      activateDialog,
      heroLinks,
      mode,
    }
  }
}
</script>

<style scoped>
#hero {
  background-image: url('../../images/pngs/gigant-dice.png');
  background-repeat: no-repeat;
  background-size: cover;
}

@media(max-width:576px) {
  #hero {
    background-image: url('../../images/pngs/gigant-dice.png');
    background-size: center;
  }
}

.small {
  height: 8rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.full {
  padding-top: 3rem;
  padding-bottom: 3rem;
  height: 30rem;
}
</style>