import { useStore } from "vuex";

export default function useDialog() {
  const store = useStore();
  const isVisible = store.getters.isDialogVisible;
  const title = store.getters.dialogTitle;
  const content = store.getters.dialogContent;

  function show() {
    store.dispatch("showDialog");
  }
  function hide() {
    store.dispatch("hideDialog");
  }
  function setTitle(title) {
    store.dispatch("setDialogTitle", title);
  }
  function setContent(content) {
    store.dispatch("setDialogContent", content);
  }

  function activate(title, content) {
    setTitle(title);
    setContent(content);
    show();
  }

  return {
    title,
    isVisible,
    content,
    show,
    hide,
    setTitle,
    setContent,
    activate,
  };
}
