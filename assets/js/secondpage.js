var resultsBox = document.querySelector("#results-box");
var detailsButtonEl = document.querySelector('#title-card-box');

var searchSelectedGenre = function(genre) {
    var url = new URL(window.location);
    var genre = url.searchParams.get("genre") 
    console.log(genre);
    if (genre === "1") {
        let selectedGenre = "Action";
        document.getElementById("selected-genre").textContent=selectedGenre;
    } else if (genre === "4") {
        let selectedGenre = "Comedy";
        document.getElementById("selected-genre").textContent=selectedGenre;
    } else if (genre === "6") {
        let selectedGenre = "Documentary";
        document.getElementById("selected-genre").textContent=selectedGenre;
    } else if (genre === "7") {
        let selectedGenre = "Drama";
        document.getElementById("selected-genre").textContent=selectedGenre;
    } else if (genre === "40") {
        let selectedGenre = "Fantasy";
        document.getElementById("selected-genre").textContent=selectedGenre;
    } else if (genre === "10") {
        let selectedGenre = "History";
        document.getElementById("selected-genre").textContent=selectedGenre;
    } else if (genre === "11") {
        let selectedGenre = "Horror";
        document.getElementById("selected-genre").textContent=selectedGenre;
    } else if (genre === "32") {
        let selectedGenre = "Musical";
        document.getElementById("selected-genre").textContent=selectedGenre;
      } else if (genre === "13") {
        let selectedGenre = "Mystery";
        document.getElementById("selected-genre").textContent=selectedGenre;
    } else if (genre === "14") {
        let selectedGenre = "Romance";
        document.getElementById("selected-genre").textContent=selectedGenre;       
    } else if (genre === "15") {
        let selectedGenre = "Science-Fiction"
        document.getElementById("selected-genre").textContent=selectedGenre;
    } else if (genre === "17") {
        let selectedGenre = "Thriller"
        document.getElementById("selected-genre").textContent=selectedGenre;
    } else if (genre === "18") {
        let selectedGenre = "War"
        document.getElementById("selected-genre").textContent=selectedGenre;
    }
    // format the watchmode api url for genre title list
    var watchModeGenreUrl = 'https://api.watchmode.com/v1/list-titles?genres=' + genre + '&limit=30&apiKey=3vWxYKPiq0kntxPSw8B2hMi3OiBvlMzGkqZPSj6R';
    fetch(watchModeGenreUrl).then(function(response) {
      //request successful
      if (response.ok) {
        response.json().then(function(data) {
            console.log(data);
        displayGenreResults(data, data.titles);
            console.log(data.titles);
            console.log(data.titles[0].id);
            console.log(data.titles[0].title);
            console.log(data.titles[0].year);
        });
      } else {
        alert('error: ' + response.statusText);
    }
    })
    .catch(function(error) {
        console.log(error);
         });
    };

  var displayGenreResults = function(titles) {
    console.log(titles);
    console.log(titles.titles[0].id);
    console.log(titles.titles[0].title);
    console.log(titles.titles[0].year);

    // check if api returned any titles
    if (titles.titles.length === 0) {
      console.log('no titles found');
      return;
    }
    
    // loop over titles
    for (var i = 0; i < titles.titles.length; i++) {
      //console.log(titles.titles);
      //console.log(titles.titles[0].id);
      
      // loop through to dynamically create card for each title
      for (let i = 0; i < titles.titles.length; i++) {
        var dynaTitleCard = document.createElement("div"); 
        dynaTitleCard.setAttribute("id", "title-card")
        dynaTitleCard.classList="card column is-one-fifth"
        dynaTitleCard.innerHTML +='<h3 class="card-header" "movie-title" id="selection-title'+i+'"></h3><span class="year" id="release-year'+i+'"></span><button id="details-button'+i+'" class="btn"></button>'                                          
        var titleCardBox = document.querySelector("#title-card-box")
        document.getElementById("title-card-box");
        titleCardBox.appendChild(dynaTitleCard);
        document.getElementById("selection-title"+i).textContent=titles.titles[i].title;
        document.getElementById("release-year"+i).textContent=titles.titles[i].year
        document.getElementById("details-button"+i).textContent="Title Details";
        document.getElementById("details-button"+i).setAttribute("title-id", titles.titles[i].id); 
      }
      break;
    }
}

var detailsButtonClickHandler = function(event) {
  // get the title id attribute from the clicked element
  var featureTitleId = event.target.getAttribute('title-id');
  //console.log(id);
  if (featureTitleId) {
    window.location.href ="./finalpage.html?featureTitleId=" + featureTitleId;
  }

};

searchSelectedGenre()

detailsButtonEl.addEventListener("click", detailsButtonClickHandler);