<template>
  <hero-banner/>
  <about-us/>
  <the-collapse/>

</template>

<script>
import { ref } from 'vue';
import HeroBanner from '../../components/hero/HeroBanner';
import AboutUs from '../../components/about/TheAbout';
import TheCollapse from '../../components/collapse/TheCollapse'
export default {
  components:{
    HeroBanner,
    AboutUs,
    TheCollapse,
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