const express = require("express");
const bodyParse = require("body-parser");
const cors = require("cors");

const database = require("./src/db/database");
const router = require("./src/routes/prodRoute");

const PORT = 3009;
const HOST = "192.168.100.103";

// iniciando o app
const app = express();
app.use(cors());

app.use(
  bodyParse.urlencoded({
    extended: false
  })
);
app.set("json spaces", 2);
app.use(express.json());

router(app);

app.get("/", (req, res) =>
  res.send("Api em node criado por: Alexandre Jose Dos Santos")
);

database.connect().then(() => {
  app.listen(PORT, HOST, () =>
    console.log(`Api Rodando em http://${HOST}:${PORT}`)
  );
});
