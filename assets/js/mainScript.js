<<<<<<< HEAD

=======
>>>>>>> 821787bc060ee74f78603607d3a5f39863c59a1b
var actionButtonEl = document.querySelector('#genre-buttons');
var genreSearchTerm = document.querySelector('#genre-search-term');
var genreResultsContainerEl = document.querySelector('#genre-results-container');
var titleBoxEl = document.querySelector('#title-box');


var buttonClickHandler = function(event) {
  // get the genre attribute from the clicked element
  var genre = event.target.getAttribute('genre');
  if (genre) {
    window.location.href ="./common/secondpage.html?genre=" + genre
  }
};




actionButtonEl.addEventListener("click", buttonClickHandler);
<<<<<<< HEAD
























=======
>>>>>>> 821787bc060ee74f78603607d3a5f39863c59a1b
