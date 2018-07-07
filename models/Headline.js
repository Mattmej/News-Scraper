// This file models our headlines.

// Each headline has
// 1. A title
// 2. A description
// 3. The url of the article
// 4. A value of 'saved: true' or 'saved: false'
// 5. An attached note

const mongoose = require("mongoose");

// This is mongoose's "Schema" constructor
// Needed for making a schema.
const Schema = mongoose.Schema;

// Create a new schema
const HeadlineSchema = new Schema({

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

    url: {
        type: String,
        required: true
    },

    saved: {
        type: Boolean,
        default: false
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
const Headline = mongoose.model("Headline", HeadlineSchema);

// Exports the Headline model
module.exports = Headline;