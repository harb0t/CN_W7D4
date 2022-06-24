require ("./db/connection");

//importing mongoose
const mongoose = require("mongoose");

//importing yargs
const yargs = require("yargs");

//importing methods
const { addFilm, listFilms, deleteOne, updateFilm } = require("./films/filmMethods");

//importing schema (keys and values)
const Film = require ("./films/filmModels");


const app = async (yargsObj) => {
    try{
        if (yargsObj.add) {
            await addFilm({title: yargsObj.title, actor: yargsObj.actor, director: yargsObj.director})
            console.log(await listFilms());

        } else if (yargsObj.list) {
            console.log(await listFilms());

        } else if (yargsObj.delete){ 
        let titleToDelete = {
            title: yargsObj.delete
        }
            await deleteOne(Film, titleToDelete);
            console.log("film deleted");

        } else if (yargsObj.update){
            await updateFilm({title:yargsObj.update}, {title: yargsObj.title, actor: yargsObj.actor, director: yargsObj.director});
            console.log(await listFilms());

        } else {
            console.log("Incorrect command");
        } 
        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
    }
};


app(yargs.argv);