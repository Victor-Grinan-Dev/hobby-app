<template>
  <div class='four-o-four h-40 flex justify-center items-center'>
    <h1 class='text'>{{ content }}</h1>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const content = ref('404 Bro!');

    return {
      content,
    }
  }
}
</script>

<style scoped>
.four-o-four {
  background-image: url('../../images/pngs/many-dice.png');
}

.text {
  font-family: monospace;
  font-size: 40px;
  font-weight: 900;
  text-shadow: 0 0 10px white;
}
</style>