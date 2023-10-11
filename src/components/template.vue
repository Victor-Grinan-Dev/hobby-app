<template>
  <div>
    <h1>{{ content }}</h1>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const content = ref('Nothing here yet');

    return {
      content,
    }
  }
}
</script>

<style scoped></style>
