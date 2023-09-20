<template>
  <div className="group">
    <a href="/">
      {{ content }}
      <div className="mx-2 group-hover:border-b group hover:border-blue-50"></div>
    </a>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(){
    const content = ref('linkname');

    return {
      content,
    }
  }
}
</script>

<style scoped>
</style>