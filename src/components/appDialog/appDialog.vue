<template>
  <teleport to="body">
    <div v-if="isDialog" @click="hideDialog" class="backdrop"></div>
    <transition name="dialog">
      <dialog open v-if="isDialog">
        <header>
          <slot name="header">
            <h2>{{ title }}</h2>
          </slot>
        </header>
        <section>
          <slot>
            {{ content }}
          </slot>
        </section>

        <section>
          <slot name="actions">
            <main-btn content='close test' :fx='hideDialog'></main-btn>
          </slot>
        </section>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
import useDialog from '../../hooks/dialog';
import MainBtn from '../../components/appBtn/MainBtn.vue'
import { ref, reactive, } from 'vue';

/** TAKE THE VALUES ISIDE THIS DIALOG FROM STORE */

export default {
  comsponents: { MainBtn, },
  computed: {
    isDialog() {
      return this.$store.getters['isDialogVisible'];
    }
  },
  setup() {
    const { isVisible, content, showDialog, hideDialog, setContent } = reactive(useDialog());
    const defaultCaption = 'close';
    const title = ref('Test dialog');
    return {
      title,
      isVisible,
      content,
      showDialog,
      hideDialog,
      setContent,
      defaultCaption,
    }

  }
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}

header {
  background-color: #3a0061;
  color: white;
  width: 100%;
  padding: 1rem;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.dialog-leave-from,
.dialog-enter-active {
  transition: all 0.3s ease-out;
}

.dialog-leave-active {
  transition: all 0.3s ease-in;
}

.dialog-enter-to {
  opacity: 1;
  transform: scale(1);
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>
