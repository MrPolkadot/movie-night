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


let tmdbApiKey = "471410cb62e16ab7aacde9db73e4b88e";  //eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzE0MTBjYjYyZTE2YWI3YWFjZGU5ZGI3M2U0Yjg4ZSIsInN1YiI6IjY0YzMxMmMzZWMzNzBjMDExYzQ2NDU1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hg3WM49p5JkXqhti0hLB-27ngK3zwpr742R5qADyHR0



let button = document.querySelector("#fetch-data");
button.addEventListener("click", () => {
  getWatchModeApi();
//   getTmdbApi();
  const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzE0MTBjYjYyZTE2YWI3YWFjZGU5ZGI3M2U0Yjg4ZSIsInN1YiI6IjY0YzMxMmMzZWMzNzBjMDExYzQ2NDU1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hg3WM49p5JkXqhti0hLB-27ngK3zwpr742R5qADyHR0'
      }
    };
    
    fetch('https://api.themoviedb.org/3/search/movie', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
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
        // whereToWatch.textContent = streamTitles;
      }
    });
}

//  function getTmdbApi(){
//   let tmdbURL =
//     "https://api.themoviedb.org/3/search/movie/?query=toy%20story&api_key=" +
//     tmdbApiKey +
//     "&append_to_responses=sources";
//     fetch(tmdbURL)
//     .then(function(resp){
//         console.log(resp);
//        if(!resp.ok) throw new Error(resp.statusText);
//        return resp.json();
//     })
//     .then(function (movie){
//         console.log(movie);
//         for (let i= 0; i<movie.results.length; i++) {
//        let movieTitles= console.log(movie.results[i])
//         }
        
//     })
//  }
