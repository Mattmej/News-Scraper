const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Our scraping tools
// I will use 'request' instead of axios.

// var axios = require("axios");
const request = require("request");
const cheerio = require("cheerio");

// Require all models
var db = require("./models");

// var PORT = 3000;

const PORT = process.env.PORT || 3000;


// Initialize Express
const app = express();

//set up handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Configure middleware
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

app.use(bodyParser.json());

var routes = require("./routes");
// require("./routes")(app);
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect("mongodb://localhost:27017/week18Populater");

// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
// mongoose.Promise = Promise;
// mongoose.connect(MONGODB_URI, {
//   useMongoClient: true
// });

mongoose.connect("mongodb://localhost:27017/week18Populater");




// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
