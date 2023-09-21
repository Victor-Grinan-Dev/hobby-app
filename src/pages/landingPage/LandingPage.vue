<template>
  <hero-banner/>
  <about-us/>
  <the-collapse/>
  <our-themes/>
</template>

<script>
import { ref } from 'vue';
import HeroBanner from './hero/HeroBanner';
import AboutUs from './about/TheAbout';
import TheCollapse from './collapse/TheCollapse';
import OurThemes  from './themes/OurThemes';
export default {
  components:{
    HeroBanner,
    AboutUs,
    TheCollapse,
    OurThemes,
  },
  setup(){
    const content = ref('Landing Page');

    return {
      content,
    }
  }
}
</script>

<style scoped>
</style>