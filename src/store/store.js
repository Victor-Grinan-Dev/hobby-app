import { createStore } from "vuex";

import pooperBowlModule from "./modules/pooperbowl/index";

const store = createStore({
  modules: {
    pooperBowl: pooperBowlModule,
  },
  state() {
    return {
      isOpen: false,
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
    events(state) {
      return state.events;
    },
  },
});

export default store;
