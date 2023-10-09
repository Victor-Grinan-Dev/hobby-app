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

            <div className="h-10 group">
              <router-link :to='footerlinks[0]'>
                {{ footerlinks[0] }}
                <div className="group-hover:border-b group hover:border-blue-50"></div>
              </router-link>
            </div>
            <div className="h-10 group">
              <router-link :to='footerlinks[1]'>
                {{ footerlinks[1] }}
                <div className="group-hover:border-b group hover:border-blue-50"></div>
              </router-link>
            </div>
            <div className="h-10 group">
              <router-link :to='footerlinks[2]'>
                {{ footerlinks[2] }}
                <div className="group-hover:border-b group hover:border-blue-50"></div>
              </router-link>
            </div>
            <div className="h-10 group">
              <router-link :to='footerlinks[3]'>
                {{ footerlinks[3] }}
                <div className="group-hover:border-b group hover:border-blue-50"></div>
              </router-link>
            </div>
            <div className="h-10 group">
              <router-link :to='footerlinks[4]'>
                {{ footerlinks[4] }}
                <div className="group-hover:border-b group hover:border-blue-50"></div>
              </router-link>
            </div>
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
import { links } from '../../appsetup/appSetup';
export default {
  setup() {
    const content = ref('Footer');
    const year = computed(() => {
      {
        return new Date().getFullYear();
      }
    });
    const footerlinks = reactive(links);

    return {
      content,
      year,
      footerlinks,
    }
  }
}
</script>

<style scoped></style>