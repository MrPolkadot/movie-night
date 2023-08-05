let lastThreePicks = document.querySelector(".picks");
let randomMovie = document.querySelector(".random");
let randomMovieImage = document.querySelector(".random-movie-image");
let whereToWatch = document.querySelector("#stream-avail");
let myMovie = document.querySelector("#my-movie");
let pg = document.querySelector("#pg");
let pgThirteen = document.querySelector("#pg-13");
let R = document.querySelector("#r");
let anyRating = document.querySelector("#any-rating")
let family = document.querySelector("#family")
let comedy = document.querySelector("#comedy")
let thriller = document.querySelector("#thriller")
let horror = document.querySelector("#horror")
let drama = document.querySelector("#drama")
let action = document.querySelector("#action")
let ratingOptions = document.querySelector(".rating-options");
let genreOptions = document.querySelector(".genre-options");


let tmdbBaseURL = 'https://api.themoviedb.org/3';
let movieEndpoint = `${tmdbBaseURL}/discover/movie`

//An object to save and access the genre name and id
let genreOptions2 = [{ genre: "Thriller/Suspense", id: 53 }, { genre: "Drama", id: 18 }, { genre: "Action", id: 28 }, { genre: "Family/Children", id: 10751 }, { genre: "Horror", id: 27 }, { genre: "Comedy", id: 35 }]

function getGenre() {
    console.log(genreOptions.options[genreOptions.selectedIndex].text);
    for (let i = 0; i < genreOptions2.length; i++) {
        if (genreOptions.options[genreOptions.selectedIndex].text === genreOptions2[i].genre) {
            let genreId = genreOptions2[i].id;
            console.log(genreId);
            getTmdbApi(genreId);
        }
    }
}
// async function getRandomMovie() {
//     let response = await fetch(`${movieEndpoint}?api_key=${tmdbApiKey}&sort_by=popularity.desc&language=en-US&page=${Math.floor(Math.random() * 100) + 1}`);
//     let data = await response.json();
//     let movies = data.results;
//     let randomIndex = Math.floor(Math.random() * movies.length);
//     return movies[randomIndex];
// }
// function displayMovie(movie) {
//     let titleElement = document.getElementById('Title');
//     let overviewElement = document.getElementById('Overview');
//     let releaseDateElement = document.getElementById('ReleaseDate');
//     // need image as well
//     titleElement.textContent = `Title: ${movie.title}`;
//     overviewElement.textContent = `Overview: ${movie.overview}`;
//     releaseDateElement.textContent = `Release Date: ${movie.release_date}`;
// }
// document.getElementById('fetch-data').addEventListener('click', async () =>{
//     let movie = await getRandomMovie();
//     if (movie) {
//       displayMovie(movie);
//     } else {
//       alert('Failed to fetch a random movie.');
//     }
//   });

function getRating() {
    console.log(ratingOptions.options[ratingOptions.selectedIndex].text);
}
//for our localStorage array:
//randomize movieTitle array
//to pull ONE movie id from the array
//set a variable to save that one movie(id) and use it for our URL parameter
//for loop function
//for (let i = 0; i < response.releases.countries.length; i++) {
//if(selectedRating === response.releases.countries[i].certification && response.releases.countries[i].iso_3166_1 === "US") {
//push to localStorage() to house array to later set in fetch function;
// }
/* action=28, drama=18, */


let watchModeApiKey = "wAu5kPQlRNmYVkFQ8LsiMTdxEGKVm7csTHfQBB0q"; //Key works!!
let tmdbApiKey = "228bd2212e5a6adec66a6acb1d7342e2"; //Key works!
//Get my movie button will run most of our functions for our page
let buttonEl = document.querySelector("#fetch-data");
buttonEl.addEventListener("click", () => {
    //getWatchModeApi();
    //getTmdbApi();
    getGenre();
    getRating();
    //getRandomMovie();
});

//Displays the movie result
function displayMovieDetails(data) {
    let movieTitleElement = document.getElementById('my-movie');
    let movieImage = document.querySelector("#movie-img");
    let imageBaseUrl = "https://image.tmdb.org/t/p/w500";
    let movieArray = [];
    // let movieOverviewElement = document.getElementById('movieOverview');
    // let movieReleaseDateElement = document.getElementById('movieReleaseDate');
    let movieResults = data.results;  //An array of movies
    let randomizeMovie = movieResults[(Math.floor(Math.random() * movieResults.length))]; //Randomizes the array movies and returns an index number of an item from movie array
    let movieId = randomizeMovie.id;
    movieTitleElement.textContent = `Title: ${randomizeMovie.title}`; //Sets chosen element's title to the value of the index number that was returned(The movie title)

    movieImage.src = imageBaseUrl + randomizeMovie.poster_path; //Places the movie poster image in image section
    getWatchModeApi(movieId); //Calls this function in here to grab the value of movieId
    // movieOverviewElement.textContent = `Overview: ${data.overview}`;
    // movieReleaseDateElement.textContent = `Release Date: ${data.releases?.countries[0]?.release_date || 'N/A'}`;
}

//Gets the movie data from TMDB
function getTmdbApi(genreId) { //pass a parameter inside function to use the values inside this function on another function
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: tmdbApiKey
        }
    };
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=228bd2212e5a6adec66a6acb1d7342e2&with_genres=${genreId}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            displayMovieDetails(response)
        }
        )
        .catch(err => console.error(err));
}
//This will fetch our data from WatchMode
function getWatchModeApi(movieIdNum) {
    let watchModeUrl =
        `https://api.watchmode.com/v1/title/movie-${movieIdNum}/sources/?apiKey=` +
        watchModeApiKey

    // `https://api.watchmode.com/v1/title/movie-${movieIdNum}/details/?apiKey=` +
    //     watchModeApiKey +
    //     "&append_to_response=sources";

    fetch(watchModeUrl)
        .then(function (response) {
            console.log(response);
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            if (data.length === 0) {
                whereToWatch.textContent = "Movie unavailable"; //Appears if there is no streaming availability
            } else {
                let streamSources = [];
                for (let i = 0; i < data.length; i++) {
                    let streamTitles = data[i].name; //The streaming sources name
                    streamSources.push(streamTitles); //Adds the sources names into empty array
                    let filterSources = streamSources.filter((item, index) => streamSources.indexOf(item) === index); //Filters through the array to remove duplicates sources
                    whereToWatch.textContent = filterSources; //Shows the new filtered array.
                }
            }
        });
}