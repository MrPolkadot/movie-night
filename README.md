# MOVIE NIGHT

## User Story

* As someone who struggles to pick out a movie, I want an app that will pick one for me along with showing me how and if I can watch it.
Deployed page URL: 
* https://mrpolkadot.github.io/movie-night/ 
    

## Description

* The website was created to generate a random movie by selecting the preferred Rating/Genre and then of a click of a button will pick the Movie that relates to what you want to watch.

## Usage
         
* By clicking the ratings you can choose from PG, PG-13, R, and Any Rating for the rating that you prefer.
* As someone who struggles to pick out a movie, I want an app that will pick one for me along with showing me how and if I can watch it. 
* By clicking the Genre drop down you can choose from Family/Children, Comedy, Thriller/Suspense, Horror, Drama, Action to help you figure out what kind of movie you would like to watch.
* When you click on the "Get my movie" it will auto populate a movie that's similar to what Genre you chose.
* The Movie will display under My Movies with the Title of the movie and the Image of the movie as well.
* When the Movie appears the previous Movies that were populated will show up Under "Last 3 picks."
* Where the Movie is available to watch will show up under "Where to Watch?"

## The Goal

* We wanted to help indecisive Individuals choose a movie that goes into the category that they prefer by a click of a button. Then we want the movie randomly selected based on the user' selected filter to display below where it is available to watch. 

## Javascript

First we implemented several variables that were connected with our functions. Our functions first consisted of finding api's that would be able to return the data we were looking for which was streaming availability along with a list of movies that could be filtered through rating. Once we were able to get the api functions working for retrieving data we then created a genre option that would then show the genre of the movie that our api was fetching. This then led to our next step of figuring out a function that would fetch a random movie using the TMDB API. This took us some time but finally were able to get it work. Then we implemented an array that would pick genre's based on their ID number in the TMDB API. WE then created function displaying the movies details along with an image of that randomly selected film. Then using watchmode we display the selected movie's streaming availability below. We also created a section that would return past results utilzing local storage. 
## HTML and CSS
Our goal was to make a user friendly interface that would have some dropdown menus to select the genre of the film along with different sections of where results would show. We decided to use Bulma to design the page and took some time to get used to but feel that it came out very clean. Initially were going to try and create two html pages as mentioned in our figma layout but decided to keep it more simple of using one page. 



                                                                            Image of the Website
![Alt text](./assets/Img/The%20Movie%20Night%20Website.png)

                                                                            Where to set the recommended ratings/Genre
![Alt text](./assets/img/Rating%20and%20Genre.png)

                                                                            Where the Image of the Movie will be Displayed
![Alt text](./assets/img/Movie%20Img.png)

                                                                            Where the last 3 Movies that were seached will be 
![Alt text](./assets/img/Search%20History.png)

                                                                            The Button that Allows you to generate the movie
![Alt text](./assets/img/Movie%20Gen%20Button.png)



## API LINKS
* https://api.watchmode.com/
* https://developer.themoviedb.org/docs
"This product uses the TMDB API but is not endorsed or certified by TMDB."

## Credits

* Useful links:\
    https://www.geeksforgeeks.org/how-to-remove-duplicate-elements-from-javascript-array/#

* Salvador Mejia https://github.com/MrPolkadot

* Joe Nadherny https://github.com/joenadherny

* Jenae Luthi https://github.com/Jelu113

* Josh Peterson https://github.com/joshcode1

## License 
* [LICENSE Used](LICENSE)

## FIGMA PROJECT
* https://www.figma.com/file/yXsW1aFbV5ODYR9bd9JY1Y/Page-2-Movie-Night?type=design&mode=design&t=9e7riTMEVsm08bQf-1git 

