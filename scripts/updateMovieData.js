import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import staticData from "../src/data/staticData.js";

const apiKey = process.env.MOVIEDB_API;

async function main() {
  async function fetchData(id) {
    try {
      const getIdRequest = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
      const response = await fetch(getIdRequest);
      const data = await response.json();
      console.log(`${data.title} raw data received from API`);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function createNewMovieList() {
    const movieArr = [];
    for await (const movie of staticData) {
      await timeout(500);
      const data = await fetchData(movie.id);
      let movieObj;
      if (data) {
        movieObj = {
          id: data.id,
          title: data.title,
          description: data.overview,
          year: data.release_date.slice(0, 4),
          release_date: data.release_date,
          genre: data.genres,
          runtime: data.runtime,
          poster: `http://image.tmdb.org/t/p/w500${data.poster_path}`,
          backdrop: `http://image.tmdb.org/t/p/w1280${data.backdrop_path}`,
        };
      }
      if (movieObj) {
        movieArr.push(movieObj);
      } else {
        console.log(
          `\n\n--------------------\n\nError adding ${movie.title} to list\n\n--------------------\n\n`
        );
      }
    }
    return movieArr;
  }

  const finalMovieList = await createNewMovieList();
  //console.log(finalMovieList);

  const __dirname = path.resolve();
  fs.writeFile(
    __dirname + "/src/data/staticData_new.js",
    `const movies = 
      ${JSON.stringify(finalMovieList)}
    export default movies`,
    err => {
      if (err) console.error(err);
      else {
        console.log("File written successfully\n");
      }
    }
  );
}

main();

//node --require dotenv/config scripts/updateMovieData.js node scripts/updateMovieData.js
