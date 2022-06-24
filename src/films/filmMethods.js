const mongoose = require("mongoose");
const Film = require("./filmModels");

exports.addFilm = async (filmObj) => {
    try{
        await Film.create(filmObj)
    } catch (error) {
        console.log(error);
    }
};

exports.listFilms = async () => {
try{
    return await Film.find({});
} catch (error) {
    console.log(error);
}
};

// create a delete one or delete many function
exports.deleteOne = async (Film, titleToDelete) => {
    try {
        return Film.deleteOne(titleToDelete);
} catch (error) {
    console.log(error);
}
};


// create an update one or update many function

exports.updateFilm = async (updateTitle, newUpdate) => {
    try {
        return Film.updateOne(updateTitle, newUpdate);
    } catch (error) {
        console.log(error);
    }
};