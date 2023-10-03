import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

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

      leagueTable: [
        {
          id: "aron-norse",
          team: "Aron's Team",
          race: "Norse",
          coach: "Aron",
          gamesPlayed: 0,
          w: 0,
          l: 0,
          d: 0,
          tds: 0,
          cas: 0,
          points: 0,
          color: "#376389",
        },
        {
          id: "darryn-goblins",
          team: "Batty Bay Squig Fiddlers",
          race: "Goblins",
          coach: "Darryn",
          gamesPlayed: 0,
          w: 0,
          l: 0,
          d: 0,
          tds: 0,
          cas: 0,
          points: 0,
          color: "#1ac548",
        },
        {
          id: "victor-khorne",
          team: "Bloody Balls",
          race: "Khorne",
          coach: "Victor",
          gamesPlayed: 0,
          w: 0,
          l: 0,
          d: 0,
          tds: 0,
          cas: 0,
          points: 0,
          color: "#da0000",
        },
      ],
      fixtures: {},
      matchups: {},

      skillsLeveling: {},
      injuryTables: {},
      passingCalculator: {},
    };
  },
  mutations,
  actions,
  getters,
};
