// This controller is in charge of fetching all articles.

// const express = require("express");
// const request = require("request");
// const express = require("express");

// const fetchRouter = express.Router();
// var headline = require("../models/Headline.js");
// var note = require("../models/Note.js");
const db = require("../models");
const scrape = require("../scripts/scrape");

module.exports = {
    scrapeHeadlines: function(req, res) {
        return scrapeArticles()
        .then(function(articles) {

            // create an item in the Headline schema.
            return db.Headline.create(articles);
        })
        .then(function(dbHeadline) {
            if (dbHeadline.length === 0) {
                res.json({
                    message: "No new articles at this time."
                });
            }

            else {
                res.json({
                    message: `Added ${dbHeadline.length} new articles.`
                });
            }
        })
        .catch(function(err) {
            res.json({
                message: "Scrape complete."
            });
        });
    }
};












///////////////////////////////////////////////////////////////////


// For 'routes' file?

// fetchRouter.get("/all", function(req, res) {
//     db.Headline.find({})
//     .then(function(dbArticle) {
//         res.json(dbArticle);
//     })
//     .catch(function(err) {
//         res.json(err);
//     });
// });

// module.exports = fetchRouter;

