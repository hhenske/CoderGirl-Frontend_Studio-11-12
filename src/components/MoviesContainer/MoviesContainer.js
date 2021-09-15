import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import PropTypes from "prop-types";

const MoviesContainer = props => {
  const { movieData } = props;

  return (
    <main className="movieContainer">
      {movieData.length !== 0
        ? movieData.map(movie => <MovieCard key={movie.id} movie={movie} />)
        : null}
    </main>
  );
};

MoviesContainer.propTypes = {
  movieData: PropTypes.array,
};

export default MoviesContainer;
