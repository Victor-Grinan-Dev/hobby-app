export default {
  setTeams(state, payload) {
    state.leagueTable = payload;
  },
  registerTeam(state, payload) {
    state.leagueTable.push(payload);
  },
  setInstruction(state, payload) {
    state.instructions = payload;
  },
};
