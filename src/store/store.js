import { createStore } from "vuex";

import pooperBowlModule from "./modules/pooperbowl/index.js";

const store = createStore({
  modules: {
    pooperBowl: pooperBowlModule,
  },
  state() {
    return {
      isOpen: false,
      isDialogVisible: true,
      events: [
        // pooperBowlModule,
        {
          id: "pooperbowl",
          name: "pooper bowl league",
          desktopImg: "blood-bowl-desktop.jpeg",
          mobileImg: "blood-bowl-mobile.jpeg",
        },
        {
          id: "40kcampaings",
          name: "40k campaigns",
          desktopImg: "40k-desktop.jpeg",
          mobileImg: "40k-mobile.jpeg",
        },
        {
          id: "magicbrawls",
          name: "magic brawls",
          desktopImg: "magic-desktop.jpg",
          mobileImg: "magic-mobile.jpg",
        },
        {
          id: "others",
          name: "others",
          desktopImg: "stratego-desktop.png",
          mobileImg: "stratego-mobile.png",
        },
      ],
    };
  },
  mutations: {
    expandCollapse(state) {
      state.isOpen = !state.isOpen;
    },
    showDialog(state) {
      state.isDialogVisible = true;
      console.log(state.isDialogVisible);
    },
    closeDialog(state) {
      state.isDialogVisible = false;
      console.log(state.isDialogVisible);
    },
  },
  actions: {
    toogleMenu(context) {
      context.commit("expandCollapse");
    },
    showDialog(context) {
      context.commit("showDialog");
    },
    closeDialog(context) {
      context.commit("closeDialog");
    },
  },
  getters: {
    isOpen(state) {
      return state.isOpen;
    },
    events(state) {
      return state.events;
    },
    isDialogVisible(state) {
      return state.isDialogVisible;
    },
  },
});

export default store;
