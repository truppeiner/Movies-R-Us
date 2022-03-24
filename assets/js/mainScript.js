var actionButtonEl = document.querySelector("#genre-buttons");
var genreSearchTerm = document.querySelector("#genre-search-term");
var genreResultsContainerEl = document.querySelector(
  "#genre-results-container"
);
var savePicksEl = document.querySelector(".save-button");
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
  window.onload(
    (savePicksEl.textContent = localStorage.getItem(
      "selection",
      JSON.parse(genre)
    ))
  );
};

actionButtonEl.addEventListener("click", buttonClickHandler);
