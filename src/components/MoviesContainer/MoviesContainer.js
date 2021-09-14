import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import PropTypes from "prop-types";

const MoviesContainer = props => {
  const { movieData } = props;

  return (
    <main className="movieContainer">
      {movieData.length !== 0
        ? movieData.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              // updateActiveMovieCallback={selectedMovie =>
              //   setActiveMovie(selectedMovie)
              // }
            />
          ))
        : null}
    </main>
  );
};

MoviesContainer.propTypes = {
  movieData: PropTypes.array,
};

export default MoviesContainer;
