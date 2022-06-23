const mongoose = require("mongoose")
const Film = require("./filmModels");

/// add film function
exports.addFilm = async (filmObj) => {
    try {
        await Film.create(filmObj)
    } catch (error) {
        console.log (error);
    }
};

/// reads doc in database
exports.listFilms = async () => {
    try {
        return await Film.find({});
    } catch (error) {
        console.log(error);
    }
};

// create an update one or update many function

// create a delete one or delete many function