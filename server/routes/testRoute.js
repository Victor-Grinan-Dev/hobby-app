const express = require("express");
const router = express.Router();

router.get("/", (_, res) => {
  res.send("planets");
});
router.get("/", (_, res) => {
  res.send("planets");
});

module.exports(router);
