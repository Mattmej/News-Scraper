// In charge of front-end, non-api routes.

const express = require("express");
const router = express.Router();

// root path
router.get("/", function(req, res) {
    res.render("home");
});

// Path: /saved
router.get("/saved", function(req, res) {
    res.render("saved");
});

module.exports = router;