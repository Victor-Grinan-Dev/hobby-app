const axios = require("axios");

axios
  .get("https://wwwww.google.com")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
    console.log("Error bro!");
  })
  .then(() => {
    console.log("All done bro!");
  });
