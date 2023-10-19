const express = require("express");
const PORT = 3000;

const app = express();

//logger
function logger(req, res, next) {
  console.log(`[${Date.now()}] ${req.method} ${req.url}`);
  next();
}
app.use(logger);

//setting sample routes
app.get("/", (_, res) => {
  res.json({ ok: true });
});
app.get("/greet/:name", (req, res) => {
  res.json({ greeting: `Hello ${req.params.name}!` });
});

app.listen(PORT, () => console.log(`Server is listening in port ${PORT}`));
