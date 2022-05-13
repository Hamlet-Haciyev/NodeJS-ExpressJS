const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./Router/presentations");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/presentations", router);

// app.use(express.json());
// app.use(bodyParser);
// app.use(express.urlencoded({ extended: false }));
app.listen(5050);
