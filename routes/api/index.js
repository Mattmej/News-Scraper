const express = require("express");
const router = express.Router();

const fetchRoutes = require("./fetch");
const noteRoutes = require("./notes");
const headlineRoutes = require("./headlines");


// Allows the router to use these routes to 
// affect url paths.
router.use("/fetch", fetchRoutes);
router.use("/notes", noteRoutes);
router.use("/headlines", headlineRoutes);

module.exports = router;
