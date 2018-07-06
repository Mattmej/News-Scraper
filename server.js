var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Our scraping tools
// I will use 'request' instead of axios.

// var axios = require("axios");
var request = require("request");
var cheerio = require("cheerio");

// Require all models
var db = require("./models");

// var PORT = 3000;

var PORT = process.env.PORT || 3000;


// Initialize Express
var app = express();

//set up handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Configure middleware
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

require("./routes")(app);

// Connect to the Mongo DB
// mongoose.connect("mongodb://localhost:27017/week18Populater");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});




// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
