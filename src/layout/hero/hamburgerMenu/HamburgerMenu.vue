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

<style scoped>
.hamburger {
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: all 0.25s;
  position: relative;
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
  position: absolute;
  width: 24px;
  height: 2px;
  left: 0;
  top: 0;
  background: #fff;
  transform: rotate(0);
  transition: all .5s;
}

.hamburger-middle {
  transform: translateY(7px);
}

.hamburger-bottom {
  transform: translateY(14px);
}

.open {
  transform: rotate(90deg);
  position: fixed;
  right: 30px;
  visibility: visible;
}

.closed {
  display: none;
}

.open .hamburger-top {
  transform: rotate(45deg) translateY(6px) translateX(6px)
}

.open .hamburger-middle {
  display: none
}

.open .hamburger-bottom {
  transform: rotate(-45deg) translateY(6px) translateX(-6px)
}
</style>