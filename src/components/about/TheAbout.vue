<template>
    <section id="features">
      <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 trext-gray-900 md:flex-row md:px-0">
        <Image type="null" name="interactive" />
        <img src="../../images/pngs/man&girl-boardgame.png" alt="nerds" >
        <div className="text-container top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
          <h2 className="max-w-lg mt-10 mb-6 font-sans text-3xl text-center text-gray-900 uppercase md:text-5xl md:text-left">
            {{ content }}
          </h2>
          <p className="max-w-md text-center md:text-left">
            Founded in 2022, MalditosDice have been creating world-class 
            events for some of the best boardgamers in Helsinki.
            Our yearly on-going events have expand the hobby of cards and boardgames
            into digital tracked experiences.
          </p>
        </div>
      </div>
    </section>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(){
    const content = ref('What about us?');

    return {
      content,
    }
  }
}
</script>

<style scoped>
</style>