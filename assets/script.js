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

let selectObject = {
    rating: [pg, pgThirteen, R, anyRating],
    genre: [family, comedy, thriller, horror, drama, action]
}

function getRating() {
    console.log(ratingOptions.options[ratingOptions.selectedIndex].text);
    for (let i = 0; i < selectObject.rating.length; i++) {
        let ratingArr = [];
        let ratingValue = selectObject.rating[i].value;
        console.log(ratingValue);
    }
}




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
});

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
        .then(response => console.log(response))
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
                whereToWatch.textContent = streamTitles;
            }
        });
}

