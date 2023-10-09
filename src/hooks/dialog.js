import { ref } from "vue";

export const useDialog = (startVisibility = false) => {
  const isVisible = ref(startVisibility);

  function showDialog() {
    isVisible.value = true;
  }
  function hideDialog() {
    isVisible.value = false;
  }

  return [isVisible, showDialog, hideDialog];
};
