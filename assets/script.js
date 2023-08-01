let lastThreePicks = document.querySelector(".picks");
let randomMovie = document.querySelector(".random");
let randomMovieImage = document.querySelector(".random-movie-image");
let whereToWatch = document.querySelector(".stream-avail");

//Event listener for our dropdown menu
var select = document.querySelector(".select");
select.addEventListener("click", function (event) {
  event.stopPropagation();
  select.classList.toggle("is-active");
});

let watchModeApiKey = "UZsT73vA3Tb6Sarx9DpPKtRWdc3u4qXCdT9vB3Zp"; //Key works!!
let tmdbApiKey = "471410cb62e16ab7aacde9db73e4b88e";
console.log(tmdbApiKey);
let button = document.querySelector("#fetch-data");
button.addEventListener("click", () => {
  getWatchModeApi();
});

//This will fetch our data from WatchMode
function getWatchModeApi() {
  let watchModeUrl =
    "https://api.watchmode.com/v1/title/345534/details/?apiKey=" +
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

function gettmdbApi() {
  let tmdbURL =
    "'https://api.themoviedb.org/3/movie/11?api_key=" +
    tmdbApiKey +
    "&append_to_responses=sources";
    fetch(tmdbURL)
    .then(function(response){
        console.log(response);
       if(!response.ok) 
    })
}
