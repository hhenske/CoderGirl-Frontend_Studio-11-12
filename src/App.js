import React, { useState, useEffect, useReducer } from "react";
import Header from "./components/Header/Header";
import MoviesContainer from "./components/MoviesContainer/MoviesContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import GENRES from "./data/genres";
import "./App.css";

const movieDataReducer = (state, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.value;
    case "FILTER_MOVIES": {
      return action.value.allMovies.filter(movie => {
        const filteredGenres = movie.genre.filter(
          genre => genre.name === action.value.selectedGenre
        );
        return filteredGenres.length !== 0 ? true : false;
      });
    }
    default:
      return state;
  }
};

const App = () => {
  const [staticMovieData, setStaticMovieData] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [movieData, dispatchMovieData] = useReducer(movieDataReducer, []);

  useEffect(() => {
    fetch(
      `https://getpantry.cloud/apiv1/pantry/${process.env.REACT_APP_PANTRY_ID}/basket/movies`
    )
      .then(response => response.json())
      .then(result => {
        setStaticMovieData(result.movieData);
        dispatchMovieData({ type: "SET_MOVIES", value: result.movieData });
      })
      .catch(error => console.log("error", error));
  }, []);

  useEffect(() => {
    if (staticMovieData.length !== 0) {
      if (selectedGenre !== "") {
        dispatchMovieData({
          type: "FILTER_MOVIES",
          value: { allMovies: staticMovieData, selectedGenre },
        });
      } else {
        dispatchMovieData({ type: "SET_MOVIES", value: staticMovieData });
      }
      setSidebarOpen(false);
    }
  }, [selectedGenre, staticMovieData]);

  return (
    <div className="App">
      <Header setSidebarOpen={setSidebarOpen} />
      {sidebarOpen && (
        <Sidebar
          genres={GENRES}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
      )}
      <MoviesContainer movieData={movieData} />
    </div>
  );
};

export default App;
