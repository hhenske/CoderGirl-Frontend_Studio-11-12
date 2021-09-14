import React from "react";
import PropTypes from "prop-types";
import "./MovieCard.scss";

const MovieCard = props => {
  const { movie, updateActiveMovieCallback } = props;

  return (
    <div
      data-testid="MovieCard"
      className="moviecard" /*onClick={() => updateActiveMovieCallback(data)}*/
    >
      <div className="moviecard_img">
        <img src={movie.poster} alt="" />
      </div>
      <div className="moviecard_wrap">
        <div className="moviecard_content">
          <h2>{movie.title}</h2>
          <p className="movidecard_year">{movie.year}</p>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {};

MovieCard.defaultProps = {};

export default MovieCard;
