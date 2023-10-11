<template>
  <div className='md:hidden ' @click="toggleCollapse">
    <div id='menu-btn' class='hamburger z-40 block focus:outline-none border-none' :class="classNames">
      <span className="hamburger-top"></span>
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();

    const content = ref('HamburgerMenu');

    const isOpen = computed(() => {
      return store.getters.isCollapseOpen;
    });

    const classNames = computed(() => {
      return isOpen.value === true ? "open md:visible" : "md:hidden"
    });

    function toggleCollapse() {
      store.dispatch('toggleCollapse'); //dispatch the actions
    }
    return {
      content,
      classNames,
      isOpen,
      toggleCollapse,
    }
  }
}
</script>

<style scoped></style>