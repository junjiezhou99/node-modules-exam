import moviesModel from '../models/moviesModel.js';
import actorsModel from '../models/actorsModel.js';
import moviePojo from '../models/moviePojo.js';
import actorPojo from '../models/actorPojo.js';

/*
  Utilitzar throw new Error("missatge") per gestionar posibles errors o missatges

   if ()
   throw new Error('parameter id not exist');

   exemple:
    if (pelicula no existeix)
        throw new Error('¡Ups! id of movie not found');
*/

const getAllMovies = (data_movie) => {
    // ...
    if (!data_movie.req) throw new Error("¡Ups! id of movie not found");
    const movies = moviesModel.getMovies();
    const actors = actorsModel.getActors();
    if (typeof movies == "undefined" || typeof actors == "undefined")
    {
        throw new Error("¡Ups! id of movie not found");
    }
    for (let i=0; i<movies.length; i++)
    {
        movies[i].actors = actors[i].actors;
    }
    // data_movie.res.push(movies);
}

const getMovieById = (data_movie) => {
    // ...
    if (!data_movie.req) throw new Error("¡Ups! id of movie not found");
    let movies = [];
    movies.push(moviesModel.getMovieById(data_movie.req.id));
    const actors = actorsModel.getActorsById(data_movie.req.id);
    if (typeof movies == "undefined" || typeof actors == "undefined")
    {
        throw new Error("¡Ups! id of movie not found");
    }
    movies.forEach(element => {
        element.actors = actors.actors;
    });
    data_movie.res.push(movies);
}

const removeMovie = (data_movie) => {
    // ...
    if (!data_movie.req) throw new Error("¡Ups! id of movie not found");
    const moviesDelete = moviesModel.removeMovie(data_movie.req.id);
    const actorsDelete = actorsModel.removeActors(data_movie.req.id);

    const movies = moviesModel.getMovies();
    const actors = actorsModel.getActors();
    if (typeof movies == "undefined" || typeof actors == "undefined")
    {
        throw new Error("¡Ups! id of movie not found");
    }
    for (let i=0; i<movies.length; i++)
    {
        movies[i].actors = actors[i].actors;
    }
    data_movie.res.push(movies);
}

const createMovie = (data_movie) => {
    // Puede usar ../models/moviePojo para crear una Movies 
    // Puede usar ../models/actorPojo para crear un Actor
    // ...
    if (!data_movie.req) throw new Error("¡Ups! id of movie not found");
    const moviesPj = moviePojo(data_movie.req);
    const actorsPj = actorPojo(data_movie.req);
    const moviesCreate = moviesModel.createMovie(moviesPj);
    const actorsCreate = actorsModel.createActors(actorsPj);
    if (typeof moviesCreate == "undefined" || typeof actorsCreate == "undefined")
    {
        throw new Error("¡Ups! id of movie not found");
    }
    const movies = moviesModel.getMovies();
    const actors = actorsModel.getActors();
    for (let i=0; i<movies.length; i++)
    {
        movies[i].actors = actors[i].actors;
    }
    data_movie.res.push(movies);
}

const updateMovie = (data_movie) => {
    // Puede usar ../models/moviePojo para actualizar una Movies 
    // Puede usar ../models/actorPojo para actualizar un Actor
    // ...
    if (!data_movie.req) throw new Error("¡Ups! id of movie not found");
    const moviesPj = moviePojo(data_movie.req);
    const actorsPj = actorPojo(data_movie.req);
    const moviesCreate = moviesModel.updateMovie(moviesPj);
    const actorsCreate = actorsModel.updateActors(actorsPj);
    if (typeof moviesCreate == "undefined" || typeof actorsCreate == "undefined")
    {
        throw new Error("¡Ups! id of movie not found");
    }
    const movies = moviesModel.getMovies();
    const actors = actorsModel.getActors();
    for (let i=0; i<movies.length; i++)
    {
        movies[i].actors = actors[i].actors;
    }
    data_movie.res.push(movies);
}

const getMovieBy = (data_movie) => {
    // ...
    if (!data_movie.req) throw new Error("¡Ups! id of movie not found");
    const moviesGetBy = moviesModel.getMovieBy(data_movie.req);
    const actorsGetBy = actorsModel.getActorsBy(data_movie.req);

    if (actorsGetBy.length == 0)
    {
        let actorsFind = [];
        for (let i=0; i<moviesGetBy.length; i++)
        {
            const actors = actorsModel.getActors();
            actorsFind.push(actors.find(e => e.id == moviesGetBy[i].id));
        }
        for (let i=0; i<moviesGetBy.length; i++)
        {
            moviesGetBy[i].actors = actorsFind[i].actors;
        }
        data_movie.res.push(moviesGetBy);
    }
    else if (moviesGetBy.length == 0)
    {
        let moviesFind = [];
        for (let i=0; i<actorsGetBy.length; i++)
        {
            const actors = actorsModel.getActors();
            moviesFind.push(actors.find(e => e.id == actorsGetBy[i].id));
        }
        for (let i=0; i<actorsGetBy.length; i++)
        {
            actorsGetBy[i].actors = moviesFind[i].actors;
        }
        data_movie.res.push(actorsGetBy);
    }
    else throw new Error("¡Ups! id of movie not found");
}

const updateActors = (data_movie) => {
    // ...
    if (!data_movie.req) throw new Error("¡Ups! id of movie not found");
    const movies = moviesModel.getMovies();
    const actors = actorsModel.getActors();
    for (let i=0; i<movies.length; i++)
    {
        movies[i].actors = actors[i].actors;
        if (movies[i].id == data_movie.req.id)
        {
            movies[i].actors.push(data_movie.req.value);
        }
    }
    data_movie.res.push(movies);
}

export default {
    getAllMovies,
    getMovieById,
    removeMovie,
    createMovie,
    updateMovie,
    getMovieBy,
    updateActors
}