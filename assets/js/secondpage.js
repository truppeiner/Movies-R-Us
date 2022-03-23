var searchSelectedGenre = function(genre) {
    var url = new URL(window.location);
    var genre = url.searchParams.get("genre");
    console.log(genre);
    // format the watchmode api url for genre title list
    var watchModeGenreUrl = 'https://api.watchmode.com/v1/list-titles?genres=' + genre + '&limit=1&apiKey=ZAhWH7fs7akLihCUWHsN61BnLhW8cRtGdRZea30D';
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
    var watchModeGenreUrl = 'https://api.watchmode.com/v1/list-titles?genres=' + genre + '&limit=2&apiKey=q0SSevcz9jaqYRJpsQGTKDAdDgkRkjZ5eolnP0Yx';
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
    });
  };

  var displayGenreResults = function(titles, genre) {
    //console.log(titles);
    console.log(genre)
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
        response.json().then(function(data){
          console.log(data);
          console.log(titleName);
          console.log(data.sources);
          console.log(data.poster);   
          console.log(data.plot_overview);
          console.log(data.year);
        })
      })
    }

  };


  searchSelectedGenre() 
  
  .catch(function(error) {
    console.log(error);
      });
};

  var displayGenreResults = function(titles) {
    //console.log(titles);
    //console.log(genre)
    // check if api returned any titles
    if (titles.length === 0) {
      console.log('no titles found');
      return;
    }
    
    // loop over titles
    for (var i = 0; i < titles.length; i++) {
      var titleName = titles[i].title; 
      var titleId = titles[i].id;
      var watchModeTitleIdUrl ='https://api.watchmode.com/v1/title/'+ titleId + '/details?append_to_response=sources&apiKey=q0SSevcz9jaqYRJpsQGTKDAdDgkRkjZ5eolnP0Yx';
      fetch(watchModeTitleIdUrl).then(function(response) {
        if (response.ok) {
        response.json().then(function(data){
        console.log(data);
        
        // save API data to variables
        var selectTitle = data.title;
        var selectTitleId = data.id;
        var posterUrl = data.poster;
        var streamingSources = data.sources;
        var plotOverview = (data.plot_overview);
        var releaseYear = (data.year);
        

// append to div hard coded into index.html
      //var posterBox = document.getElementById("movie-poster");
         // posterBox.setAttribute("src", posterUrl);
        // document.getElementById("selection-title").textContent=selectTitle;
        // document.getElementById("plot-overview").textContent=plotOverview;
        // document.getElementById("release-year").textContent=releaseYear;
        //  document.getElementById("streaming-sources").textContent=streamingSources;


//dynamically create title cards through for loop to give each card a unique id

     /*   for (let i = 0; i < titles.length; i++) {
            var dynaTitleCard = document.createElement("div"); 
            dynaTitleCard.innerHTML +='<div id="title-card'+i+'"></div>'     // could div id = title id?
            var titleCardBox = document.querySelector("#title-card-box")
            document.getElementById("title-card-box")
            titleCardBox.appendChild(dynaTitleCard);
            var cardTitle = document.createElement("h3");
            
            cardTitle.className="card-header-title"
            dynaTitleCard.appendChild(cardTitle);
            document.getElementById("option-title").textContent=selectTitle
        } */

//dynamically create title individual title card and populate with info on 1 title 
         var titleCardBox = document.querySelector("#title-card-box");
         var dynaTitleCard = document.createElement("div");
           dynaTitleCard.className="card";
           dynaTitleCard.id="title-card";
           titleCardBox.appendChild(dynaTitleCard);
           
         var cardTitle = document.createElement("h3");
           cardTitle.id="option-title";
           cardTitle.className="card-header-title"
           dynaTitleCard.appendChild(cardTitle);
           document.getElementById("option-title").textContent=selectTitle

         var cardPoster = document.createElement("img");
           cardPoster.id ="card-poster";
           cardPoster.src=posterUrl;
           dynaTitleCard.appendChild(cardPoster);

         var cardPlotOverview = document.createElement("p");
           cardPlotOverview.id ="card-plot-overview";
           dynaTitleCard.appendChild(cardPlotOverview);
           document.getElementById("card-plot-overview").textContent=plotOverview;

         var cardReleaseYear = document.createElement("p");
           cardReleaseYear.id ='card-release-year';
           dynaTitleCard.appendChild(cardReleaseYear);
           document.getElementById('card-release-year').textContent=releaseYear;

         var detailsButton = document.createElement("button");
           detailsButton.id = selectTitleId;
           detailsButton.textContent="Title Details"
           dynaTitleCard.appendChild(detailsButton);
          
          //var titleCard = document.querySelector("#title-card");
          
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
