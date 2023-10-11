import { createStore } from "vuex";

import pooperBowlModule from "./modules/pooperbowl/index.js";

const store = createStore({
  modules: {
    pooperBowl: pooperBowlModule,
  },
  state() {
    return {
      isCollapseOpen: false,
      /*** DIALOG ***/
      isDialogVisible: false,
      dialogContent: "test content",
      isLogged: false,
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
    toggleCollapse(state) {
      state.isCollapseOpen = !state.isCollapseOpen;
    },

    /*** DIALOG ***/
    showDialog(state) {
      state.isDialogVisible = true;
    },
    hideDialog(state) {
      state.isDialogVisible = false;
    },
    setDialogContent(state, payload) {
      state.dialogContent = payload;
    },
  },
  actions: {
    toggleCollapse(context) {
      context.commit("toggleCollapse");
    },

    /*** DIALOG ***/
    showDialog(context) {
      context.commit("showDialog");
    },
    hideDialog(context) {
      context.commit("hideDialog");
    },
    setDialogContent(context, payload) {
      context.commit("setDialogContent", payload);
    },
  },
  getters: {
    isCollapseOpen(state) {
      return state.isCollapseOpen;
    },
    events(state) {
      return state.events;
    },

    /*** DIALOG ***/
    isDialogVisible(state) {
      return state.isDialogVisible;
    },
    dialogContent(state) {
      return state.dialogContent;
    },
  },
});

export default store;
