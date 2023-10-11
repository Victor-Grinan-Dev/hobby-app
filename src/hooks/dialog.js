import { useStore } from "vuex";

export default function useDialog() {
  const store = useStore();
  const isVisible = store.getters.isDialogVisible;
  const content = store.getters.dialogContent;

  function showDialog() {
    store.dispatch("showDialog");
  }
  function hideDialog() {
    store.dispatch("hideDialog");
  }
  function setContent(content) {
    store.dispatch("setDialogContent", content);
  }

  return { isVisible, content, showDialog, hideDialog, setContent };
}
