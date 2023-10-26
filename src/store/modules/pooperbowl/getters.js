export default {
  /* this is all the meta data of the event */
  data(state) {
    return state.data;
  },

  rules(state) {
    return state.rules;
  },

  /** league table */
  leagueTable(state) {
    return state.leagueTable;
  },
  hasTeams(state) {
    return state.leagueTable && state.leagueTable.length > 0;
  },

  /** fixtures */
  fixtures(state) {
    return state.fixtures;
  },

  /** matchups */
  matchups(state) {
    return state.matchups;
  },
  //Cant make this work
  dashboardTab(state) {
    return state.dashboardTab;
  },
};
