const express = require("express");
const bodyParser = require("body-parser");
const connectMongo = require("./init/mongodb");
const routerTodo = require("./routes/todo");
const env = require("dotenv");
const app = express();
const path = require("path");

env.config();

connectMongo(); // mongodb connection

// view engine
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); // incase public css, images, js is used
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routerTodo);

module.exports = app;
