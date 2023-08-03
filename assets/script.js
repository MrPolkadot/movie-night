//to Joe: READ THIS!!!
//https://developer.themoviedb.org/reference/discover-movie



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


//Might not need this code 
let selectObject = {
    rating: [pg, pgThirteen, R, anyRating],
    genre: [family, comedy, thriller, horror, drama, action]
}

let movieIds = [];




//Ideas -
//for our localStorage array:
//randomize movieTitle array
//to pull ONE movie id from the array
//set a variable to save that one movie(id) and use it for our URL parameter



//Saves our selected rating and genre into localStorage for later use.
function saveOptions() {

    localStorage.setItem("rating", ratingOptions.options[ratingOptions.selectedIndex].text);

    localStorage.setItem("genre", genreOptions.options[genreOptions.selectedIndex].text);

}




//Shows which option we choose from the dropdown
function getRating() {
    console.log(ratingOptions.options[ratingOptions.selectedIndex].text);
}

function getGenre() {
    console.log(genreOptions.options[genreOptions.selectedIndex].text);
}

/* action=28, drama=18, */


let watchModeApiKey = "UZsT73vA3Tb6Sarx9DpPKtRWdc3u4qXCdT9vB3Zp"; //Key works!!


let tmdbApiKey = "228bd2212e5a6adec66a6acb1d7342e2"; //Key works!



//Get my movie button will run most of our functions for our page
let buttonEl = document.querySelector("#fetch-data");
buttonEl.addEventListener("click", () => {
    getMovieApi();
    getWatchModeApi();
    //getTmdbApi();
    getGenre();
    getRating();
    saveOptions();
});

//Gets the movie data from TMDB
//function getTmdbApi() { //How to convert this function syntax like the getWatchModeApi function
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: tmdbApiKey
//         }
//     };

//     fetch('https://api.themoviedb.org/3/movie/550?api_key=228bd2212e5a6adec66a6acb1d7342e2&append_to_response=releases', options)
//         .then(response => response.json())
//         
//push to localStorage() to house array to later set in fetch function;
//             }
//     };
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
//     // getGenre();
//     let selectedRating = ratingOptions.options[ratingOptions.selectedIndex].text;
//     console.log(selectedRating);
//     //make an empty array for movie rating

// };


//More ideas
//put rating and genre in local storage and create a variable for them. 
//Get empty array of movies, if the movie matches the variable that was chosen
// then pull that movie into an array and then randomize the movie choice.


//For TMDB
function getMovieApi() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: tmdbApiKey
        }
    };

    fetch('https://api.themoviedb.org/3/discover/movie?certification=R&language=en-US&region=United%20States&with_genres=Drama', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}




// function getTmdbApi() {

//     //Tried using a different URL to search using certification(rating) and genre. Not quite working. Returns ALL types of movies.
//     fetch('https://api.themoviedb.org/3/discover/movie?certification=R&with_genres=Horror&api_key=228bd2212e5a6adec66a6acb1d7342e2')
//         .then(function (resp) {
//             console.log(resp);
//             if (!resp.ok) throw new Error(resp.statusText);
//             return resp.json();
//         })
//         .then(function (movieData) {
//             console.log(movieData);


//             // for (let i = 0; i < movieData.releases.countries.length; i++) {
//             //     if (selectedRating === movieData.releases.countries[i].certification && movieData.releases.countries[i].iso_3166_1 === "US") {
//             //         console.log(movieData.releases.countries[i]);
//             //     }
//             // }
//         })

// }





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

