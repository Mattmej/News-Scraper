// This controller is in charge of fetching all articles.

const express = require("express");
const request = require("request");

const fetchRouter = express.Router();
// var headline = require("../models/Headline.js");
// var note = require("../models/Note.js");
const db = require("./models");

fetchRouter.get("/all", function(req, res) {
    db.Headline.find({})
    .then(function(dbArticle) {
        res.json(dbArticle);
    })
    .catch(function(err) {
        res.json(err);
    });
});

module.exports = fetchRouter;

