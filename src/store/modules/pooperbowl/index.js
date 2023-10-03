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
      instructions: null,

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
          logo: "norse-wolves",
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
          logo: "gobbling-jokker",
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
          logo: "khorne-deamon",
        },
      ],
      fixtures: {
        oct: [
          {
            id: 1,
            month: "oct",
            team1: "Aron's Team",
            team2: "Stinkbog Smeggers",
          },
          {
            id: 2,
            month: "oct",
            team1: "Aron's Team",
            team2: "Batty Bay Squig Fiddlers",
          },
          {
            id: 3,
            month: "oct",
            team1: "Batty Bay Squig Fiddlers",
            team2: "Bloody Balls",
          },
          {
            id: 4,
            month: "oct",
            team1: "Bloody Balls",
            team2: "Broken Tooth",
          },
        ],
        nov: [{}],
      },
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
