<template>
  <section className='hero saturate-60' id='hero'>
    <div className="container max-w-6xl mx-auto px-6 py-12">
      <nav className="nav-logo-container flex item-center justify-between font-bold text-white">
        <img src='../../images/malditosdice.png' className="w-44 md:ml-3 z-0" alt="selected img" />
        <div className="hidden h-10 font-alata md:flex md:space-x-8">
          <div className="group">
            <a href="/">
              {{ heroLinks[0] }}
              <div className="mx-2 group-hover:border-b group hover:border-blue-50"></div>
            </a>
          </div>
          <div className="group">
            <a href="/">
              {{ heroLinks[1] }}
              <div className="mx-2 group-hover:border-b group hover:border-blue-50"></div>
            </a>
          </div>
          <div className="group">
            <a href="/">
              {{ heroLinks[2] }}
              <div className="mx-2 group-hover:border-b group hover:border-blue-50"></div>
            </a>
          </div>
          <div className="group">
            <a href="/">
              {{ heroLinks[3] }}
              <div className="mx-2 group-hover:border-b group hover:border-blue-50"></div>
            </a>
          </div>
          <div className="group">
            <a href="/">
              {{ heroLinks[4] }}
              <div className="mx-2 group-hover:border-b group hover:border-blue-50"></div>
            </a>
          </div>
        </div>
        <!-- Mobile menu -->
        <hamburger-menu />
      </nav>
      <!-- Mobile menu -->
      <div
        className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-4 md:p-10 md:m32 md:mx-0 md:text-6xl">
        You can roll like we do</div>
    </div>
  </section>
  <the-collapse></the-collapse>
</template>

<script>
import { reactive, computed } from 'vue';
import HamburgerMenu from './hamburgerMenu/HamburgerMenu.vue';
import TheCollapse from './collapse/TheCollapse';
import { links } from '../../appsetup/appSetup';

export default {
  components: {
    HamburgerMenu,
    TheCollapse,
  },
  props: ['type'],
  setup(props) {
    const heroLinks = reactive(links);
    const mode = computed(() => {
      return props.mode === 'small' ? 'container max-w-6xl h-10 mx-auto px-6 py-8' : 'container max-w-6xl mx-auto px-6 py-12'
    });

    return {
      heroLinks,
      mode,
    }
  }
}
</script>

<style scoped></style>