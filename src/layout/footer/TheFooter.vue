<template>
  <footer id="footer w-full px-6">
    <div className="py-10 px-6 mx-auto bg-black w-full">
      <div
        className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
        <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
          <div className="logo h-8">
            <router-link to='/'>
              <img src='../../images/malditosdice.png' className="w-44" alt="selected img" />
            </router-link>

          </div>
          <div
            className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6">

            <app-link v-for='link in footerlinks' :key='link.id' :name='link.name' :linkTo='link.linkTo'
              :isProtected='link.isProtected' />

          </div>
        </div>
        <div className="flex flex-col items-start justify-between space-y-4-tex-gray-500">
          <div className="flex items-center w-full justify-center space-x-4 md:justify-end md:mx-0">
            <div className="h-8 group">
              <a href="/">
                <img src='../../images/icon-facebook.svg' alt="selected img" />
              </a>
            </div>
            <div className="h-8 group">
              <a href="/">

                <img src='../../images/icon-twitter.svg' alt="selected img" />
              </a>
            </div>
            <div className="h-8 group">
              <a href="/">

                <img src='../../images/icon-pinterest.svg' alt="selected img" />
              </a>
            </div>
            <div className="h-8 group">
              <a href="/">

                <img src='../../images/icon-instagram.svg' alt="selected img" />
              </a>
            </div>
          </div>

          <div className="text-gray-500 mt-4">
            &copy; {{ year }} MalditosDice. All rights reserved
          </div>

        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref, reactive, computed } from 'vue';
import { appLinks } from '../../appsetup/appSetup';
import AppLink from '@/components/appLink/AppLink.vue';
import useDialog from '@/hooks/dialog';
export default {
  components: {
    AppLink,
  },
  computed: {
    isVisible() {
      return this.$store.state.isVisible;
    },
    isLogged() {
      return this.$store.state.isLogged;
    }
  },
  setup() {
    const { activate } = useDialog();
    const content = ref('Footer');
    const year = computed(() => {
      {
        return new Date().getFullYear();
      }
    });
    const footerlinks = reactive(appLinks);

    const activateDialog = () => {
      activate('access denied!', 'You must be logged in to see the your profile');
    }
    return {

      activateDialog,
      content,
      year,
      footerlinks,
    }
  }
}
</script>

<style scoped></style>