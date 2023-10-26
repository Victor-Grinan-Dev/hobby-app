import { createStore } from "vuex";

import pooperBowlModule from "./modules/pooperbowl/index";

const store = createStore({
  modules: {
    pooperBowl: pooperBowlModule,
  },
  state() {
    return {
      /*** MENU COLLAPSE ***/
      isCollapseOpen: false,

      /*** DIALOG ***/
      dialogTitle: "testing warning!",
      isDialogVisible: false,
      dialogContent: "test content",

      /*** Auth ***/
      isLogged: false,

      /*** EVENTS ***/
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
    setDialogTitle(state, payload) {
      state.dialogTitle = payload;
    },
    setDialogContent(state, payload) {
      state.dialogContent = payload;
    },
  },
  actions: {
    /*** MENU COLLAPSE ***/
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
    setDialogTitle(context, payload) {
      context.commit("setDialogTitle", payload);
    },
    setDialogContent(context, payload) {
      context.commit("setDialogContent", payload);
    },

    /*** Auth ***/

    /*** EVENTS ***/
  },
  getters: {
    /*** MENU COLLAPSE ***/
    isCollapseOpen(state) {
      return state.isCollapseOpen;
    },

    /*** DIALOG ***/
    isDialogVisible(state) {
      return state.isDialogVisible;
    },
    dialogTitle(state) {
      return state.dialogTitle;
    },
    dialogContent(state) {
      return state.dialogContent;
    },

    /*** Auth ***/

    /*** EVENTS ***/
    events(state) {
      return state.events;
    },
  },
});

export default store;
