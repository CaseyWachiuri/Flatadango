const init = () => {
  displayMovie();
}

document.addEventListener("DOMContentLoaded", init);

// Declaring selected Elements to variable names
const movieList = document.querySelector("ul#films");

const moviePoster = document.querySelector("img#poster");

const movieTitle = document.querySelector("h2#title");
const movieRuntime = document.querySelector("p#runtime");
const movieDescription = document.querySelector("p#description");
const movieShowtime = document.querySelector("p#showtime");
const movieTickets = document.querySelector("p#tickets");

function displayMovie() {

  fetch("http://localhost:3000/films")
    .then(r => r.json())
    .then((data) => {
      data.forEach(movie => {
	const li = document.createElement("li");
	li.innerText = movie.title;
	movieList.append(li);
	li.addEventListener("click", () => {getMovie(movie)});
      });
    });
}

function getMovie(movie) {
  const availableTickets = movie.capacity - movie.tickets_sold

  moviePoster.src = movie.poster;
  moviePoster.alt = movie.title;

  movieTitle.innerText = movie.title;
  movieRuntime.innerText = `${movie.runtime} minutes`;
  movieDescription.innerText = movie.description;
  movieShowtime.innerText = movie.showtime;
  movieTickets.innerText = `${availableTickets} tickets remaining`;
}

/*
"id": "1",
"title": "The Giant Gila Monster",
"runtime": "108",
"capacity": 30,
"showtime": "04:00PM",
"tickets_sold": 27,
"description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
"poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
*/
