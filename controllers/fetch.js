// This controller is in charge of fetching all articles.

var express = require("express");
var request = require("request");

var router = express.Router();
// var headline = require("../models/Headline.js");
// var note = require("../models/Note.js");
var db = require("./models");

router.get("/all", function(req, res) {
    db.Headline.find({})
    .then(function(dbArticle) {
        res.json(dbArticle);
    })
    .catch(function(err) {
        res.json(err);
    });
});

