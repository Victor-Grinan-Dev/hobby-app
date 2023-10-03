// const baseUrl = "https://docs.google.com/spreadsheets/d/";
const sheetId = "1Z2CthPCjLsbVtx2g_48U73XzGq9B0qRvK9xl-R-B9gg";
// const constant = "/gviz/tq?sheet=";
import axios from "axios";
export default {
  async loadInstructions(context) {
    const sheetTitle = "Instructions";
    const sheetRange = "A1:M10";

    axios
      .get(
        "https://docs.google.com/spreadsheets/d/" +
          sheetId +
          "/gviz/tq?sheet=" +
          sheetTitle +
          sheetRange
      )
      .then((res) => {
        const parsedData = JSON.parse(res.data.substring(47).slice(0, -2)).table
          .rows;

        const test1 = {
          pageTitle: parsedData[0].c[0].v,
          table: [
            {
              title: parsedData[1].c[0].v,
              content: [
                parsedData[1].c[1].v,
                parsedData[2].c[1].v,
                parsedData[3].c[1].v,
              ],
            },
            {
              title: parsedData[4].c[0].v,
              content: [parsedData[4].c[1].v],
            },
            {
              title: parsedData[5].c[0].v,
              content: [parsedData[5].c[1].v],
            },
            {
              title: parsedData[6].c[0].v,
              content: [parsedData[6].c[1].v, parsedData[7].c[1].v],
            },
          ],
        };
        // console.log(test1);
        context.commit("setInstruction", test1);
      });
  },
};
