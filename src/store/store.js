import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      isOpen: false,
    };
  },
  mutations: {
    expandCollapse(state) {
      state.isOpen = !state.isOpen;
    },
  },
  actions: {
    toogleMenu(context) {
      context.commit("expandCollapse");
    },
  },
  getters: {
    isOpen(state) {
      return state.isOpen;
    },
  },
});

export default store;
