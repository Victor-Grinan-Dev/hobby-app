<template>
  <hero-banner/>
  <about-us/>
  <the-collapse/>
  <our-themes/>
</template>

<script>
import { ref } from 'vue';
import HeroBanner from '../../components/hero/HeroBanner';
import AboutUs from '../../components/about/TheAbout';
import TheCollapse from '../../components/collapse/TheCollapse';
import OurThemes  from '../../components/themes/OurThemes';
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