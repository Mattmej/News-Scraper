// Will get the info from the 'fetch' api and will make the info
// available to the root path.

var express = require("express");
var router = express.Router();
var fetchController = require("../../controllers/fetch");

router.get("/", fetchController.scrapeHeadlines);

module.exports = router;