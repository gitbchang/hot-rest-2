var express = require('express');
var app = express();
var PORT = process.env.PORT || 1234;
var bodyParser = require("body-parser");
var path = require("path");
var mysql = require("mysql");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
// parse application/json
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// including the routing files
// make sure to include api routes first as we are pulling in
// this data to display inside HTML pages
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);



var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "162605",
    database: "hotrestaurant_db"
});

connection.connect(function(err) {
    console.log("Database connected");
});


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
