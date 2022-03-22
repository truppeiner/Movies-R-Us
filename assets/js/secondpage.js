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
    var watchModeGenreUrl = 'https://api.watchmode.com/v1/list-titles?genres=' + genre + '&limit=1&apiKey=ZAhWH7fs7akLihCUWHsN61BnLhW8cRtGdRZea30D';
    fetch(watchModeGenreUrl).then(function(response) {
      //request successful
      if (response.ok) {
        response.json().then(function(data) {
            console.log(data);
          displayGenreResults(data.titles, genre);
         // console.log(data.titles);
        });
      } else {
        alert('error: ' + response.statusText);
      }
    })
    .catch(function(error) {
        console.log(error);
         });
    };

  var displayGenreResults = function(titles, genre) {
    //console.log(titles);
    //console.log(genre)
    // check if api returned any titles
    if (titles.length === 0) {
      genreResultsContainerEl.textContent = 'no titles found';
      return;
    }
    //genreSearchTerm.textContent = genre;
  
  
    // loop over titles
    for (var i = 0; i < titles.length; i++) {
    
      var titleName = titles[i].title; 
      var titleId = titles[i].id;
      var watchModeTitleIdUrl ='https://api.watchmode.com/v1/title/'+ titleId + '/details?append_to_response=sources&apiKey=ZAhWH7fs7akLihCUWHsN61BnLhW8cRtGdRZea30D';
      fetch(watchModeTitleIdUrl).then(function(response) {
        if (response.ok) {
        response.json().then(function(data){
          console.log(data);

          //dynamically create title card
          /*var titleCardBox = document.querySelector("#title-card-box")
          var testDynaCard = document.createElement("div");
            testDynaCard.class="card";
            testDynaCard.id="title-card"
            titleCardBox.appendChild(testDynaCard);
            document.getElementById("title-card").textContent="fuck yeah";*/
          // save API data to variables

          var selectTitle = data.title;
          var selectTitleId = data.id;
          var posterUrl = data.poster;
          var streamingSources = data.sources;
          var plotOverview = (data.plot_overview);
          var releaseYear = (data.year);
          var posterBox = document.getElementById("movie-poster");
          posterBox.setAttribute("src", posterUrl);
          document.getElementById("selection-title").textContent=selectTitle;
          document.getElementById("plot-overview").textContent=plotOverview;
          document.getElementById("release-year").textContent=releaseYear;
         // document.getElementById("streaming-sources").textContent=streamingSources;
          
          var titleCard = document.querySelector("#title-card");
          var detailsButton = document.createElement("button");
            detailsButton.id = selectTitleId;
            detailsButton.textContent="Title Details"
          titleCard.appendChild(detailsButton);
          //document.getElementById("").textContent=;
          console.log(posterUrl);
          console.log(selectTitle);
          console.log(data.sources);
          console.log(data.poster);   
          console.log(data.plot_overview);
          console.log(data.year);
          }) 
        } else {
            alert('error: ' + response.statusText);
          }
       })
        .catch(function(error) {
            console.log(error);
             });
       };
  };
  
  var detailsButtonClickHandler = function(event) {
    // get the title id attribute from the clicked element
    var featureTitleId = event.target.getAttribute('id');
    //console.log(id);
    if (featureTitleId) {
      window.location.href ="./finalpage.html?featureTitleId=" + featureTitleId;
    }
};

  searchSelectedGenre()

  detailsButtonEl.addEventListener("click", detailsButtonClickHandler);