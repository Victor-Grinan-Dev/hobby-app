<template>
  <h1>{{ content }}</h1>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(){
    const content = ref('Footer');

    return {
      content,
    }
  }
}
</script>

<style scoped>
</style>