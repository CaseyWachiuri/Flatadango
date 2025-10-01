const init = () => {
  displayMovie();
}

document.addEventListener("DOMContentLoaded", init);

function displayMovie() {
  const movieList = document.querySelector("ul#films");

  fetch("http://localhost:3000/films")
    .then(r => r.json())
    .then((data) => {
      data.forEach(movie => {
	const li = document.createElement("li");
	li.innerText = movie.title;
	movieList.append(li);
	li.addEventListener("click", () => {});
      });
    });
}

function getMovie() {
  // Check number of tickets remaining
  if (tickets == 0) {
    // Update the UI to say tickets are no longer available
  }
}
