const ip_grabber = require("./abstractapi.js");
const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  ip_grabber.get_ip();
  res.status(200).sendFile("/index.html", { root: __dirname });
  //   res.status(200).send({
  // status: "you done did it",
  //   });
});

app.listen(PORT, () => console.log(`It's active on https://localhost:${PORT}`));