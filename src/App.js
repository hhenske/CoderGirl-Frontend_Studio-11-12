import React, { useState, useEffect, useReducer } from "react";
import MoviesContainer from "./components/MoviesContainer/MoviesContainer";
import "./App.css";

const movieDataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE": {
      return [...state, action.value];
    }
    default:
      return state;
  }
};

const App = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetch(
      `https://getpantry.cloud/apiv1/pantry/${process.env.REACT_APP_PANTRY_ID}/basket/movies`
    )
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setMovieData(result.movieData);
      })
      .catch(error => console.log("error", error));
  }, []);

  return (
    <div className="App">
      <MoviesContainer movieData={movieData} />
    </div>
  );
};

export default App;
