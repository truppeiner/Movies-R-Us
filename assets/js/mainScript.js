window.onload = function () {
  var picks = localStorage.getItem("selection");
  var savePicksEl = document.querySelector(".save-button");
  let parPicks = JSON.parse(picks);
  //how to sort element
  //this sort can only be done on Arrays
  let number = parseInt(parPicks);
  switch (number) {
    case 1:
      number = "Action";
      break;
    case 4:
      number = "Comedy";
      break;
    case 6:
      number = "Doumentry";
      break;
    case 7:
      number = "Drama";
      break;
    case 10:
      number = "History";
      break;
    case 11:
      number = "Horror";
      break;
    case 13:
      number = "Mystery";
      break;
    case 14:
      number = "Romance";
      break;
    case 15:
      number = "Sci-Fi";
      break;
    case 17:
      number = "Thriller";
      break;
    case 18:
      number = "War";
      break;
    case 32:
      number = "Musical";
      break;
    case 40:
      number = "Fantasy";
      break;
  }
  console.log(number);
  savePicksEl.textContent = number;
  // savePicksEl.innerHTML = parPicks;

  // savePicksEl.appendChild(parPicks);
  // console.log(picks);
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
