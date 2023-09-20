<template>
  <h1>{{ content }}</h1>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(){
    const content = ref('404 Not found');

    return {
      content,
    }
  }
}
</script>

<style scoped>
</style>