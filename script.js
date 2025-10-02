const init = () => {
  displayMovie();
}

document.addEventListener("DOMContentLoaded", init);

// Declaring selected Elements to variable names
const movieDisplayForms = document.querySelector("section#movie-details");
movieDisplayForms.style.display = 'none';

const movieList = document.querySelector("ul#films");

const moviePoster = document.querySelector("img#poster");

const movieTitle = document.querySelector("h2#title");
const movieRuntime = document.querySelector("p#runtime");
const movieDescription = document.querySelector("p#description");
const movieShowtime = document.querySelector("p#showtime");
const movieTickets = document.querySelector("p#tickets");
const ticketBtn = document.querySelector("button#buy-ticket");

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
  movieDisplayForms.style.display = 'flex';
  const availableTickets = movie.capacity - movie.tickets_sold
  
  moviePoster.src = movie.poster;
  moviePoster.alt = movie.title;

  movieTitle.innerText = movie.title;
  movieRuntime.innerText = `${movie.runtime} minutes`;
  movieDescription.innerText = movie.description;
  movieShowtime.innerText = movie.showtime;
  movieTickets.innerText = `${availableTickets} tickets remaining`;
  // Checking to see the data of the ticket button
  ticketBtn.addEventListener("click", () => purchaseTicket(movie, availableTickets));
}

function purchaseTicket(movie) {
  if (tickets > 0) {
    // Add Patch Functionality to update db.json
  }else{
    ticketBtn.disabled = true;
    ticketBtn.textContent = "sold out";
  }
}
