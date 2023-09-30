<template>
  <about-us />
  <our-themes />
</template>

<script>
import AboutUs from './about/TheAbout';
import OurThemes from './themes/OurThemes';
export default {
  components: {
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