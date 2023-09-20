<template>
  <hero-banner/>
</template>

<script>
import { ref } from 'vue';
import HeroBanner from '../../components/hero/HeroBanner';
export default {
  components:{
    HeroBanner,
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