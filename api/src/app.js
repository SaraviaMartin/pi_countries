const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) =>{
  res.status(200).send("Llegue al endpoint")
});

module.exports = app;