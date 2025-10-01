const init = () => {
  getMovie();
}

document.addEventListener("DOMContentLoaded", init);

function getMovie() {

  fetch("http://localhost:3000/films")
    .then(r => r.json())
    .then((data) => console.log(data));
}

function numberOfTickets() {
  // Check number of tickets remaining
  if (tickets == 0) {
    // Update the UI to say tickets are no longer available
  }
}
