<template>
  <base-page>
    <our-themes></our-themes>
  </base-page>
</template>

<script>
import { ref } from 'vue';
import BasePage from '@/components/BasePage.vue';
import OurThemes from '../landingPage/themes/OurThemes.vue';
export default {
  components: {
    BasePage,
    OurThemes,
  },
  setup() {
    const content = ref('Events Page');

    return {
      content,
    }
  }
}
</script>

<style scoped></style>