// This controller is in charge of fetching all articles.

// const express = require("express");
// var bodyParser = require("body-parser");
// const request = require("request");

// const noteRouter = express.Router();
const db = require("./models");

module.exports = {
    findOneNote: function(req, res) {
        db.Note
        .findOne(req.query)
        .then(function(dbNote) {
            res.json(dbNote);
        });
    },

    createNote: function(req, res) {
        db.Note
        .create(req.body)
        .then(function(dbNote) {
            res.json(dbNote);
        });
    },

    deleteNote: function(req, res) {
        db.Note
        .deleteOne({_id: req.params.id})
        .then(function(dbNote) {
            res.json(dbNote);
        });
    }
};















/////////////////////////////////////////////////////////////////////



// For 'routes' file?

// noteRouter.post("/articles/:id", function(req, res) {
//     db.Note.create(req.body)
//     .then(function(dbNote) {
//         return db.Headline.findOneAndUpdate({_id: req.params.id}, {note: dbNote._id}, {new: true});  
//     })
//     .then(function(dbArticle) {
//         res.json(dbArticle);
//     })
//     .catch(function(err) {
//         res.json(err);
//     });
// });

// module.exports = noteRouter;