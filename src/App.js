import React, { useState, useEffect, useReducer } from "react";
import Header from "./components/Header/Header";
//Import Sidebar and MovieContainer
import GENRES from "./data/genres";
import "./App.css";

const movieDataReducer = (state, action) => {
  switch (action.type) {
    //SET_MOVIES will completely replace the current state with the value passed via `action.value`
    case "SET_MOVIES":
      return null;
    case "FILTER_MOVIES":
      return null;
    default:
      return state;
  }
};

const App = () => {
  const [staticMovieData, setStaticMovieData] = useState([]);

  //Part 1.a
  //Add a useEffect to fetch the movie data and update the staticMovieData state
  //This useEffect should only run once

  //Part 4.b
  //Add a useEffect that will update the movieData reducer state to only hold movies that
  //have the selected genre. It should run whenever selectedGenre is changed AND when staticMovieData changes

  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default App;
