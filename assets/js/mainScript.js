var genArr = [];
var savePicksEl = document.querySelector("#save-button");
window.onload = function () {
  var picks = localStorage.getItem("selection");

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
  lastPick(number);

  // savePicksEl.textContent = number;
  // savePicksEl.innerHTML = parPicks;

  // savePicksEl.appendChild(parPicks);
  // console.log(picks);
};
function lastPick(number) {
  lastPick.innerHTML = "";

  for (var i = lastPick.length - 1; i >= 0; i--) {
    var btn = document.createElement("input");
    btn.setAttribute("type", "image");
    btn.setAttribute("src", "./assets/Images/" + number + ".png");
    // btn.setAttribute("genre", genre);
    btn.classList.add("btn");
    savePicksEl.append(btn);
  }
  console.log(typeof genre);
}
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
