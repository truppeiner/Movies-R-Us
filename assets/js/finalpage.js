
var displaySelectedTitle = function(genre) {
  var url = new URL(window.location);
  var selectedTitleId = url.searchParams.get("featureTitleId") 
  console.log(selectedTitleId);

  // format the watchmode api url for selected title details
  var selectedTitleApiUrl = 'https://api.watchmode.com/v1/title/' + selectedTitleId + '/details/?append_to_response=sources&apiKey=q0SSevcz9jaqYRJpsQGTKDAdDgkRkjZ5eolnP0Yx';
  fetch(selectedTitleApiUrl).then(function(response) {
    //request successful
    if (response.ok) {
      response.json().then(function(data) {
          // isolate desired data
          console.log(data);
          console.log(data.title);
          console.log(data.year);
          console.log(data.user_rating);
          console.log(data.critic_score);
          console.log(data.runtime_minutes);
          console.log(data.genre_names[0]);
          console.log(data.plot_overview);
          console.log(data.poster);
          console.log(data.backdrop);
          console.log(data.sources);
          console.log(data.trailer_thumbnail);
          // store desired data in variables
          var featureTitle = data.title;
          var featureId = data.id;
          var featureImbdId = data.imdb_id;
          var featureYear = data.year;
          var featureUserRating = data.user_rating;
          var featureCriticScore = data.critic_score;
          var featureRating = data.us_rating;
          var featureRunTimeMinutes = data.runtime_minutes;
          var featureGenre = data.genre_names[0];
          var featurePlotOverview = data.plot_overview;
          var featurePosterUrl = data.poster;
          var featureBackdropUrl = data.backdrop;
          var featureTrailerUrl = data.trailer;
          var featureTrailerThumbnailUrl = data.trailer_thumbnail;
          // append feature title data to final page display
          document.getElementById("feature-title").textContent=featureTitle;
          document.getElementById("main-feature-title").textContent=featureTitle;
          document.getElementById("feature-year").textContent=featureYear;
          document.getElementById("feature-user-rating").textContent=featureUserRating;
          document.getElementById("feature-critic-score").textContent=featureCriticScore;
          document.getElementById("feature-rating").textContent=featureRating;
          document.getElementById("feature-runtime-minutes").textContent=featureRunTimeMinutes;
          document.getElementById("feature-genre").textContent=featureGenre;
          document.getElementById("feature-plot-overview").textContent=featurePlotOverview;
          var featurePoster = document.getElementById("feature-poster");
          featurePoster.setAttribute("src", featurePosterUrl);
          document.getElementById("feature-hero").style.backgroundImage = 'url(' + featureBackdropUrl;
      // pick up here*************
      })
    } else {
      alert('error: ' + response.statusText);
    }
  })
  .catch(function(error) {
      console.log(error);
       });
  };

displaySelectedTitle()