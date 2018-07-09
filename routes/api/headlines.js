// Uses the headline controller to make api data available to
// various paths.

const express = require("express");
const router = express.Router();
var headlineController = require("../../controllers/headline");

router.get("/", headlineController.findAll);
router.delete("/:id", headlineController.delete);
router.put("/:id", headlineController.update);

module.exports = router;