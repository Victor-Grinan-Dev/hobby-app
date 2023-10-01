import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      data: {
        id: "pooperbowl",
        name: "pooper bowl league",
        desktopImg: "blood-bowl-desktop.jpeg",
        mobileImg: "blood-bowl-mobile.jpeg",
        maxPlayers: 12,
        minplayers: 2,
        startDate: "",
        endDate: "",
        players: [],
      },

      leagueTable: {},
      fixtures: {},
      matchups: {},
      rules: {
        skillsLeveling: {},
        injuryTables: {},
        passingCalculator: {},
      },
    };
  },
  mutations,
  actions,
  getters,
};
