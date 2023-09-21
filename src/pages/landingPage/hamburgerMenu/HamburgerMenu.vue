<template>
      <div className='md:hidden' @click="openCloseHamburger">
        <div id='menu-btn' class='hamburger z-40 block  md:hidden focus:outline-none border-none'  :class="classNames">
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  setup(){
    const content = ref('HamburgerMenu');

    const isOpen = ref(false);

    const openCloseHamburger = () => {
      isOpen.value = !isOpen.value;
    }

    const classNames = computed(()=>{
      return ` ${isOpen.value === true ? "open" : ""}`
    })
    return {
      content,
      classNames,
      isOpen,
      openCloseHamburger,
    }
  }
}
</script>

<style scoped>
</style>