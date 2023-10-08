<template>
  <div class='four-o-four flex flex-1 justify-center items-center'>
    <h1 class='text px-6'>{{ content }}</h1>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const content = ref('404 Bro! You are rolling the wrong dice.');

    return {
      content,
    }
  }
}
</script>

<style scoped>
.four-o-four {
  background-image: url('../../images/pngs/many-dice.png');
  object-fit: cover;
}

.text {
  font-family: monospace;
  font-size: 40px;
  font-weight: 900;
  /* text-shadow: 0 0 10px white; */
  background-color: rgba(240, 248, 255, 0.523);
}
</style>