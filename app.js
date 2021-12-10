import data_movie from './share/data-movies.js';
import moviesController from './controllers/moviesController.js';
import { new_movie } from './data/newMovie.js';
import { new_movie_update } from './data/newMovie.js';

//CRUD
// Create / Read / Update / Delete

let allMovies = function (data_movie) {
    moviesController.getAllMovies(data_movie);
    console.log("\n__________________Devuelve todas las peliculas (1pto)____________________\n")
    data_movie.res.forEach((e) => console.log(e));
}


let getMovieId = function (data_movie) {
    moviesController.getMovieById(data_movie);
    console.log("\n__________________Película con id:2 (1pto) ____________________\n")
    data_movie.res.forEach((e) => console.log(e));
}

let createMovie = function (data_movie) {
    moviesController.createMovie(data_movie);
    console.log("\n__________________ Añade una nueva película (1pto) ____________________\n")
    data_movie.res.forEach((e) => console.log(e));
}

let removeMovie = function (data_movie) {
    moviesController.removeMovie(data_movie);
    console.log("\n__________________Eliminar la película con id:2 (1pto) ____________________\n")
    data_movie.res.forEach((e) => console.log(e));
}

let updateMovie = function (data_movie) {
    moviesController.updateMovie(data_movie);
    console.log("\n__________________Modifica la película con id:3 (1pto) ____________________\n")
    data_movie.res.forEach((e) => console.log(e));
}


let getMovieBy = function (data_movie) {
    moviesController.getMovieBy(data_movie);
    console.log("\n_________________Todas las peliculas del año 1994 (1pto) ____________________\n")
    data_movie.res.forEach((e) => console.log(e));
}

let updateActors = function (data_movie) {
    moviesController.updateActors(data_movie);
    console.log("\n_________________Añadir un actor a la pelicula id:4 (1pto)____________________\n")
    data_movie.res.forEach((e) => console.log(e));
}


try {

    //Película con id:2 (1pto)
    data_movie.req = { id: 2 };
    getMovieId(data_movie);

    // Eliminar la película con id:2 (1pto)
    data_movie.req = { id: 2 };
    removeMovie(data_movie);

    // // Añade una nueva película (1pto)
    // data_movie.req = new_movie;
    // createMovie(data_movie);

    // // Modifica la película con id:3 (1pto)
    // data_movie.req = new_movie_update;
    // updateMovie(data_movie);

    //Devuelve todas las peliculas (1pto)
    // allMovies(data_movie);

    //Todas las peliculas del año 1994 (1pto)
    // data_movie.req = { key: "year", value: 1994 };
    // getMovieBy(data_movie);

    // //Añadir un actor a la pelicula id:4 (1pto)
    // data_movie.req = { id: 4, value: 'Ricard el profe' };
    // updateActors(data_movie);

    // // Película con id:20  (1pto)
    // data_movie.req = { id: 20 };
    // getMovieId(data_movie);


} catch (error) {
    console.log(error.message);
}




