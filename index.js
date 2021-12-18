const express = require("express");
const serverless = require("serverless-http");
const app = express();
const PORT = 8080;

const ip_grabber = require("./public/geolocationGrabber.js");

app.get("/", (req, res) => {
  ip_grabber.get_ip();
  // setTimeout(() => console.log(ip_grabber.ip), 3000);

  res.status(200).sendFile("/public/index.html", { root: __dirname });
});

app.listen(PORT, () => console.log(`It's active on https://localhost:${PORT}`));
app.use(express.static("public"));
