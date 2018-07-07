// This file models a note attached to a headline.

// Each note has 
// 1. A date of creation
// 2. The actual text of the note. 

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NoteSchema = new Schema({
    // title: String,
    // body: String

    date: {
        type: Date,
        default: Date.now
    },
    body: String
});

var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;