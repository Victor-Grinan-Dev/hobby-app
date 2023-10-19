<template>
  <hero-banner type='full' />
  <about-us />
  <our-themes />
</template>

<script>
import HeroBanner from '../../layout/hero/HeroBanner';
import AboutUs from './about/TheAbout';
import OurThemes from './themes/OurThemes';
export default {
  components: {
    HeroBanner,
    AboutUs,
    OurThemes,
  },
  setup() {
    return {
    }
  }
}
</script>

<style scoped></style>