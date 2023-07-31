let lastThreePicks = document.querySelector(".picks");
let randomMovie = document.querySelector(".random");
let randomMovieImage = document.querySelector(".random-movie-image");


var dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdown.classList.toggle('is-active');
});





let watchModeApiKey = "UZsT73vA3Tb6Sarx9DpPKtRWdc3u4qXCdT9vB3Zp"; //Key works!!


let button = document.querySelector("#fetch-data");
button.addEventListener("click", getWatchModeApi);



//This will fetch our data from WatchMode
function getWatchModeApi() {
    let watchModeUrl = "https://api.watchmode.com/v1/networks/?apiKey=" + watchModeApiKey;
    fetch(watchModeUrl)
        .then(function (response) {
            console.log(response);
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

