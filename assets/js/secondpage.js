var searchSelectedGenre = function(genre) {
    var url = new URL(window.location);
    var genre = url.searchParams.get("genre");
    console.log(genre);
    // format the watchmode api url for genre title list
    var watchModeGenreUrl = 'https://api.watchmode.com/v1/list-titles?genres=' + genre + '&limit=1&apiKey=ZAhWH7fs7akLihCUWHsN61BnLhW8cRtGdRZea30D';
    fetch(watchModeGenreUrl).then(function(response) {
      //request successful
      if (response.ok) {
        response.json().then(function(data) {
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
<<<<<<< HEAD
  
  
    // loop over titles
    for (var i = 0; i < titles.length; i++) {
    
=======


    // loop over titles
    for (var i = 0; i < titles.length; i++) {

>>>>>>> 821787bc060ee74f78603607d3a5f39863c59a1b
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
<<<<<<< HEAD
   
  };
  

  searchSelectedGenre()
=======

  };


  searchSelectedGenre() 
>>>>>>> 821787bc060ee74f78603607d3a5f39863c59a1b
