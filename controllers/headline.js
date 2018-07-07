// This controller defines functions that help perform
// CRUD operations on the headlines.

// const express = require("express");
// const request = require("request");

// const headlineRouter = express.Router();

const db = require("./models");

module.exports = {

    // function to find all articles
    findAll: function(req, res) {
        db.Headline.find(req.query)
        .sort({date: -1})
        .then(function(dbHeadline) {
            res.json(dbHeadline);
        });
    },

    delete: function(req, res) {
        db.Headline.remove({_id: req.params.id})
        .then(function(dbHeadline) {
            res.json(dbHeadline);
        });
    },

    update: function(req, res) {
        db.Headline.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, {new: true})
        .then(function(dbHeadline) {
            res.json(dbHeadline);
        });
    }

};













///////////////////////////////////////////////////////////////////






// For 'routes' file?

// headlineRouter.get("/articles/:id", function(req, res) {
//     db.Headline.findOne({_id: req.params.id})
//     .populate("note")
//     .then(function(dbArticle) {
//         res.json(dbArticle);
//     })
//     .catch(function(err) {
//         res.json(err);
//     });
// });

// module.exports = headlineRouter;