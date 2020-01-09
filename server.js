const express = require("express");
const app = express();
const PORT = 3009;
const HOST = "192.168.100.103";

app.get("/", (req, res) => {
  res.send("Ola");
});

app.listen(PORT);
