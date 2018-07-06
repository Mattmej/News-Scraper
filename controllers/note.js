// This controller is in charge of fetching all articles.

const express = require("express");
// var bodyParser = require("body-parser");
const request = require("request");

const noteRouter = express.Router();
const db = require("./models");

noteRouter.post("/articles/:id", function(req, res) {
    db.Note.create(req.body)
    .then(function(dbNote) {
        return db.Headline.findOneAndUpdate({_id: req.params.id}, {note: dbNote._id}, {new: true});  
    })
    .then(function(dbArticle) {
        res.json(dbArticle);
    })
    .catch(function(err) {
        res.json(err);
    });
});

module.exports = noteRouter;