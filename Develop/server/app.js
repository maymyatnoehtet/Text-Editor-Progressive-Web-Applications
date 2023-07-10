const express = require("express");
const morgan = require("morgan");

const app = express();

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

app.use(express.static("../client/dist"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/htmlRoutes")(app);

module.exports = app;
