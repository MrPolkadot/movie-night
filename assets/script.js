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
let tmdbBaseURL= 'https://api.themoviedb.org/3';
let movieEndpoint= `${tmdbBaseURL}/discover/movie`
let genreOptions2= [{genre:"Thriller",id:53},{genre:"Drama",id:18},{genre:"Action",id:28},{genre:"Family",id:10751},{genre:"Horror",id:27},{genre:"Comedy", id:35}]


array.forEach(genreOptions2 => {
    
});
async function getRandomMovie(){
    
        let response = await fetch(`${movieEndpoint}?api_key=${tmdbApiKey}&sort_by=popularity.desc&language=en-US&page=${Math.floor(Math.random() * 100) + 1}`);
        let data = await response.json();
        let movies = data.results;
        let randomIndex = Math.floor(Math.random() * movies.length);
        return movies[randomIndex];
      }

      function displayMovie(movie) {
        let titleElement = document.getElementById('Title');
        let overviewElement = document.getElementById('Overview');
        let releaseDateElement = document.getElementById('ReleaseDate');
        // need image as well
      
        titleElement.textContent = `Title: ${movie.title}`;
        overviewElement.textContent = `Overview: ${movie.overview}`;
        releaseDateElement.textContent = `Release Date: ${movie.release_date}`;
      }
// document.getElementById('fetch-data').addEventListener('click', async () =>{
//     let movie = await getRandomMovie();
//     if (movie) {
//       displayMovie(movie);
//     } else {
//       alert('Failed to fetch a random movie.');
//     }
//   });


let selectObject = {
    rating: [pg, pgThirteen, R, anyRating],
    genre: [family, comedy, thriller, horror, drama, action]
}

function getRating() {
    console.log(ratingOptions.options[ratingOptions.selectedIndex].text);
    //make an empty array for movie rating
    //for loop function
    //for (let i = 0; i < response.releases.countries.length; i++) {
        //if(selectedRating === response.releases.countries[i].certification && response.releases.countries[i].iso_3166_1 === "US") {
            //push to localStorage() to house array to later set in fetch function;
        }
        
        //for our localStorage array:
        //randomize movieTitle array
        //to pull ONE movie id from the array
        //set a variable to save that one movie(id) and use it for our URL parameter
        
        
        
        
function getGenre() {
    console.log(genreOptions.options[genreOptions.selectedIndex].text);
    //for loop function
    //for (let i = 0; i < response.releases.countries.length; i++) {
        //if(selectedRating === response.releases.countries[i].certification && response.releases.countries[i].iso_3166_1 === "US") {
            //push to localStorage() to house array to later set in fetch function;
        }
        
        /* action=28, drama=18, */
        
        // function getRating() {
            //     for (let i = 0; i < ratingOptions.length; i++) {
                //         //if (ratingOptions[i]) {
                    //         console.log(ratingOptions[i].value);
                    //         //Input the rating value into our fetch function
                    //         //}
                    //     }
                    // }
                    // // function getGenre(){
                        // //     for(let i = 0; i < genreOptions.length; i++){
                            // //         console.log(genreOptions[i].value);
                            // //     }
                            // // }
                            
                            //Event listener for our dropdown menu
var select = document.querySelector(".select");
// select.addEventListener("click", function (event) {
//     event.stopPropagation();
//     select.classList.toggle("is-active");
// });

let watchModeApiKey = "UZsT73vA3Tb6Sarx9DpPKtRWdc3u4qXCdT9vB3Zp"; //Key works!!


let tmdbApiKey = "228bd2212e5a6adec66a6acb1d7342e2"; //Key works!



//Get my movie button will run most of our functions for our page
let buttonEl = document.querySelector("#fetch-data");
buttonEl.addEventListener("click", () => {
    getWatchModeApi();
    getTmdbApi();
    getGenre();
    getRating();
    getRandomMovie();
    
});
function displayMovieDetails(data) {
    let movieTitleElement = document.getElementById('my-movie');
    // let movieOverviewElement = document.getElementById('movieOverview');
    // let movieReleaseDateElement = document.getElementById('movieReleaseDate');
  
    movieTitleElement.textContent = `Title: ${data.title}`;
    // movieOverviewElement.textContent = `Overview: ${data.overview}`;
    // movieReleaseDateElement.textContent = `Release Date: ${data.releases?.countries[0]?.release_date || 'N/A'}`;
  }

//Gets the movie data from TMDB
function getTmdbApi() { 
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: tmdbApiKey
        }
    };

    fetch('https://api.themoviedb.org/3/movie/550?api_key=228bd2212e5a6adec66a6acb1d7342e2&append_to_response=releases', options)
        .then(response => response.json())
        .then(response => {console.log(response)
        displayMovieDetails(response)}
            )
        .catch(err => console.error(err));
    // getGenre();
}

//This will fetch our data from WatchMode
function getWatchModeApi() {
    let watchModeUrl =
        "https://api.watchmode.com/v1/title/movie-550/details/?apiKey=" +
        watchModeApiKey +
        "&append_to_response=sources";
    fetch(watchModeUrl)
        .then(function (response) {
            console.log(response);
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            for (let i = 0; i < data.sources.length; i++) {
                let streamTitles = data.sources[i].name;
                whereToWatch.textContent = streamTitles;//WORK ON THIS (HOW TO SELECT ALL THE STREAMING OPTIONS OF THE MOVIE);
            }
        });
}

