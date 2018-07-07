// This controller is responsible for grabbing a specific Article by id.

const express = require("express");
const request = require("request");

const headlineRouter = express.Router();
// var headline = require("../models/Headline.js");
// var note = require("../models/Note.js");
const db = require("./models");

headlineRouter.get("/articles/:id", function(req, res) {
    db.Headline.findOne({_id: req.params.id})
    .populate("note")
    .then(function(dbArticle) {
        res.json(dbArticle);
    })
    .catch(function(err) {
        res.json(err);
    });
});

module.exports = headlineRouter;