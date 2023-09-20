<template>
  <hero-banner/>
  <about-us/>
</template>

<script>
import { ref } from 'vue';
import HeroBanner from '../../components/hero/HeroBanner';
import AboutUs from '../../components/about/TheAbout';
export default {
  components:{
    HeroBanner,
    AboutUs,
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