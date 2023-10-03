const baseUrl = "https://docs.google.com/spreadsheets/d/";
const sheetId = "1Z2CthPCjLsbVtx2g_48U73XzGq9B0qRvK9xl-R-B9gg";
const constant = "/gviz/tq?sheet=";

export default {
  async loadInstructions() {
    const sheetTitle = "Instructions";
    const sheetRange = "A1:M10";

    await fetch(baseUrl + sheetId + constant + sheetTitle + sheetRange).then(
      (res) => {
        // parsedData = JSON.parse(res.data.substring(47).slice(0, -2)).table.rows;
        console.log(res.data);
      }
    );
    // context.commit("pooperBowl/setInstructions", data);
  },

  //   async loadTeams(context) {
  //     /**FETCH HERE */
  //     const response = await fetch(url);
  //     const resposeData = await response.json();
  //     if (!response.ok) {
  //       /** handle error */
  //     }
  //     const teams = [];
  //     /** CONVERT DATA IN RIGHT FORMAT */
  //     for (const key in resposeData) {
  //       const team = {
  //         id: resposeData[key].id,
  //         team: resposeData[key].team,
  //         race: resposeData[key].race,
  //         coach: resposeData[key].coach,
  //         gamesPlayed: resposeData[key].gamesPlayed,
  //         w: resposeData[key].w,
  //         l: resposeData[key].l,
  //         d: resposeData[key].d,
  //         tds: resposeData[key].tds,
  //         cas: resposeData[key].cas,
  //         points: resposeData[key].points,
  //         color: resposeData[key].color,
  //         logo: resposeData[key].logo,
  //       };

  //       teams.push(team);
  //     }

  //     context.commit("setTeams", teams);
  //   },
};
