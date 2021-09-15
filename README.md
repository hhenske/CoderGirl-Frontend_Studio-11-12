# CoderGirl-Frontend_Studio-11-12
This studio is based off section 10 of your Udemy course - useEffect, useReducer and the Context API. This studio is built to be completed over 2 class periods. As of 9/15/21, I've only prepared the first class's studio.
I've also added some practice and new skills for common use cases you'll experience when working.

You are building a Movie Library. You'll first fetch data from a separate source, then display the data in a series of components. You'll also add logic to filter the movies shown based on what genre the user selects.

**ADD IMAGE FOR FINAL PROJECT HERE*/

## Getting Started

### A. Fork & clone the repository from GitHub.

- [ ] Navigate to the [CoderGirl-FrontEnd_Studio-11-12 project repository](https://github.com/kirbykatie/CoderGirl-Frontend_Studio-11-12).
- [ ] Fork the repository to your own account, then grab the link from the green Code dropdown.
- [ ] In your terminal, go to the folder where you want your project to be. Use git clone to create your local copy.

### B. Get the project ready to code.

- [ ] In VSCode (or the IDE of your choice), open the project so you can view the code. You should already be in the main branch, which is where the starter code resides.
- [ ] Open a terminal inside your VSCode. Your terminal should already be inside the CoderGirl-FrontEnd_Studio6 directory. Then use the command npm install to download any required dependencies.
- [ ] Now use the command npm start to serve the project to your browser. You should see a purple bar at the top that says 'Movie Library' and a menu open icon.

## Part 1 - Fetching Movie Data & Displaying It

### A - Fetching Data
In many web apps, you'll need to fetch data from another source - whether it be your project's backend service, a 3rd-party source, or something else. We want to put this fetch inside a `useEffect()` hook that only runs **once**. If the fetch is outside of the useEffect, the data saved to state will trigger a re-render, which will cause the app to fetch the data again and save it to state, and thus creating an infinite loop. The `staticMovieData` state variable has already been created for you

- [ ] Create a useEffect() that runs once. Inside the body, fetch from the following URL: `https://getpantry.cloud/apiv1/pantry/5daec432-c358-442e-bbac-be944968a126/basket/movies`. Recall there's 2 steps when handling the data received from a fetch. The code will look like this:
```javascript
fetch(url)
   .then(res => res.json())
   .then(res => console.log(res)) //or do whatever you want to the data
   .catch(err => console.error(err => console.error(err));  //It's always good to add error handling when dealing with external calls
```
- [ ] Once the data is received, save it to the `staticMovieData` variable. IMPORTANT - the data received from the API is actually {movieData: []} instead of just the array of elements. However, we want the array to be saved to state, not the object holding the array. Make sure to use `response.movieData` when setting your state.
- [ ] Check your work. When you look at the React Dev Tools, do you see a state variable of an array with 66 elements?
- [ ] Take a look at the data we're getting from the API - it's pretty complex! We'll be using it as we go through both studios.

### B - Setting up the Movie Container
There is a `MovieContainer` component file already created. This component will hold all the MovieCards that represent each movie.
- [ ] Import the `MovieContainer` component into the `App.js` file. 
- [ ] In App's `return` JSX, under `<Header />`, add the `MovieContainer` component to the JSX. Pass one prop in `movieData` that will be equal to `staticMovieData`. Note: As we go through this studio, the value we're passing as `movieData` will change!
- [ ] Inside `MovieContainer.js`, first destructure the `props` object so you can access `movieData` directly. That will look something like this:
```javascript
const { movieData } = props;
```
- [ ] Update the `MovieContainer.propTypes` object to type check that the `movieData` value is always an array and is always required.
- [ ] Check your work - There won't be any visual changes in the DOM, but you can check the React Dev Tools to see if the Movie Container is added and is receiving the movie data as a prop.

**ADD THE MovieContainer_virtual-dom.png **

### C - Setting up the Movie Cards
Each `MovieCard` holds one movie. In class 1 of the studio, it's going to show only the poster, and then the movie title & year on hover. In class 2, we're going to add a modal that will display additional movie data once clicked. For now, let's just focus on setting up the cards
- [ ] Check out `MovieCard.js` - it's already been written for you! 
- [ ] Go back to `MovieContainer.js`. Inside the `<main></main>` elements, map over all the movie objects inside the `movieData` array and return JSX that will render the `MovieCard` component. Each component should receive the prop `movie` and get a movie object.
When this is complete, you should see all 66 movies rendered in your browser! If you hover over a poster, you should see the movie's title and release year.

**ADD after-MovieCards.png **
