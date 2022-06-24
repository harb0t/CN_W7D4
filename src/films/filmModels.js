const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    actor:{
        type: String,
        required: false,
        default: "No info",
    },
    director: {
        type: String,
        required: false,
        default: "No info",
    },

    

});

const Film = mongoose.model("Film", filmSchema);

module.exports = Film;