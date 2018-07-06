var mongoose = require("mongoose");

// This is mongoose's "Schema" constructor
// Needed for making a schema.
var Schema = mongoose.Schema;

// Create a new schema
var HeadlineSchema = new Schema({

    // Article Title
    title: {
        type: String,
        required: true
    },

    // Article Description
    description: {
        type: String,
        required: true
    },

    // An object that stores a Note id
    // Also, the ref property links the ObjectId to the Note model.
    // "Note" is defined in Note.js
    // Allows us to populate article with an associated Note
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

// Creates our model from the above schema by using mongoose
var Headline = mongoose.model("Headline", HeadlineSchema);

// Exports the Headline model
module.exports = Headline;