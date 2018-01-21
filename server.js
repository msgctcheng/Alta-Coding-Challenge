const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./controller/map-controller.js");
const cons = require("consolidate");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));
app.use("/", routes);
app.use(bodyParser.urlencoded({extended: false}));

app.engine("html", cons.swig);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

