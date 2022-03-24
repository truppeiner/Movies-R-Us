window.onload = function () {
  var picks = localStorage.getItem("selection");
  var savePicksEl = document.querySelector(".save-button");
  var parPicks = JSON.parse(picks);
  //how to sort element
  //this sort can only be done on Arrays
  console.log(parPicks);
  savePicksEl.innerHTML = parPicks;
  // savePicksEl.appendChild(parPicks);
  console.log(picks);
};
var actionButtonEl = document.querySelector("#genre-buttons");
var genreSearchTerm = document.querySelector("#genre-search-term");
var genreResultsContainerEl = document.querySelector(
  "#genre-results-container"
);

var titleBoxEl = document.querySelector("#title-box");

var buttonClickHandler = function (event) {
  var actionButtonEl = document.querySelector("#genre-buttons");
  var genreSearchTerm = document.querySelector("#genre-search-term");
  var genreResultsContainerEl = document.querySelector(
    "#genre-results-container"
  );
};
var titleBoxEl = document.querySelector("#title-box");

var buttonClickHandler = function (event) {
  // get the genre attribute from the clicked element
  var genre = event.target.getAttribute("genre");
  if (genre) {
    window.location.href = "./common/secondpage.html?genre=" + genre;
  }
  localStorage.setItem("selection", JSON.stringify(genre));
};

actionButtonEl.addEventListener("click", buttonClickHandler);
