import { useStore } from "vuex";

export default function useDialog() {
  const store = useStore();
  const isVisible = store.getters.isDialogVisible;

  function showDialog() {
    store.dispatch("showDialog");
  }
  function closeDialog() {
    store.dispatch("closeDialog");
  }

  return [isVisible, showDialog, closeDialog];
}
