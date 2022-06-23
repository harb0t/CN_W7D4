require("./db/connection")
const mongoose = require("mongoose");
const yargs = require("yargs");
///curly bracks for multiple functions
const {addFilm, listFilms} = require ("./films/filmMethods");

const app = async (yargsObj) => {
    try {
        if (yargsObj.add) {
            await addFilm({ title: yargsObj.title, actor: yargsObj.actor})
            console.log(await listFilms());
        } else if (yargsObj.list){
            console.log(await listFilms());
        } else {
            console.log("Incorrect command");
        }
        await mongoose.disconnect()
    } catch (error) {
        console.log(error);
    }
};

app(yargs.argv);

// await