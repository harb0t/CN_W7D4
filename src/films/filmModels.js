const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema({
    // rules
    title: {
        type: String,
        //Can't have duplicates
        unique: true,
        required: true,
    },
    actor: {
        type: String,

    },
    
});

const Film = mongoose.model("Film", filmSchema);

module.exports = Film;