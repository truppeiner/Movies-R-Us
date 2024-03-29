var displaySelectedTitle = function(genre) {
  var url = new URL(window.location);
  var selectedTitleId = url.searchParams.get("featureTitleId") 
  console.log(selectedTitleId);
  // format the watchmode api url for selected title details
  var selectedTitleApiUrl = 'https://api.watchmode.com/v1/title/' + selectedTitleId + '/details/?append_to_response=sources&apiKey=SPq4jFg1pgbWR6mP6rZGPrBrNGisLbdUeu2P0TKp';
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
          // store desired data in variables and append to final page display
          //show type
          if (data.type ==="tv_series") {
            let featureType = "TV Series"
            document.getElementById("feature-type").textContent=featureType;
          } else if (data.type ==="movie") {
            let featureType = "Movie"
            document.getElementById("feature-type").textContent=featureType;
          }

         // streaming source url links for selected titled
          const sources = data.sources;
          const disneyPlus = sources.filter(source => source.source_id === 372);
          if (disneyPlus.length >= 1) {
            let disneyTitleUrl= disneyPlus[0].web_url;
            console.log(disneyTitleUrl);
            document.getElementById("streaming-links").innerHTML +='<a href="" target="_blank" id="disney-plus-link"><h4 id="disney-plus">Disney+</h4></a>' 
            document.getElementById("disney-plus-link").setAttribute("href", disneyTitleUrl);
          } 
          
          const netflix = sources.filter(source => source.source_id === 203)
          if (netflix.length >= 1) {
           let netflixTitleUrl= netflix[0].web_url;
           document.getElementById("streaming-links").innerHTML +='<a href="" target="_blank" id="netflix-link"><h4 id="netflix" >Netflix</h4></a>'
           document.getElementById("netflix-link").setAttribute("href", netflixTitleUrl);
           } 

          const hulu = sources.filter(source => source.source_id === 157)
          if (hulu.length >= 1) {
          let huluTitleUrl = hulu[0].web_url;
          document.getElementById("streaming-links").innerHTML +='<a href=" " target="_blank" id="hulu-link"><h4 id="hulu">Hulu</h4></a>'
          document.getElementById("hulu-link").setAttribute("href", huluTitleUrl);
          } 

          const amazonPrime = sources.filter(source => source.source_id === 26)
          if (amazonPrime.length >= 1) {
             let amazonPrimeTitleUrl = amazonPrime[0].web_url;
             document.getElementById("streaming-links").innerHTML +='<a href=" " target="_blank" id="amazon-link"><h4 id="amazon-prime">Amazon Prime Video</h4></a>'
             document.getElementById("amazon-link").setAttribute("href", amazonPrimeTitleUrl);
          } 

          const hboMax = sources.filter(source => source.source_id === 387 )
          if (hboMax.length >= 1) {
            let hboTitleUrl = hboMax[0].web_url
            document.getElementById("streaming-links").innerHTML +='<a href="" target="_blank" id="hbo-max-link"><h4 id="hbo-max">HBO Max</h4></a>'
            document.getElementById("hbo-max-link").setAttribute("href", hboTitleUrl);
          } 
          // log streaming source data
          console.log(disneyPlus);
          console.log(netflix);
          console.log(hulu);
          console.log(amazonPrime);
          console.log(hboMax);

          // feature title data
          var featureTitle = data.title;
          var featureId = data.id;
          var featureImbdId = data.imdb_id;
          var featureYear = data.year;
          var featureUserRating = data.user_rating;
          var featureCriticScore = data.critic_score;
          var featureRating = data.us_rating;
          var featureRunTimeMinutes = data.runtime_minutes;
          var featureGenre = (data.genre_names[0]);
          var featureGenre2 = (data.genre_names[1]);
          var featureGenre3 = (data.genre_names[2]); 
          var featurePlotOverview = data.plot_overview;
          var featurePosterUrl = data.poster;
          var featureBackdropUrl = data.backdrop;
          var featureTrailerUrl = data.trailer;
          var featureTrailerThumbnail = data.trailer_thumbnail;
          // append feature title data to final page display
          document.getElementById("feature-title").textContent=featureTitle;
          document.getElementById("main-feature-title").textContent=featureTitle;
          document.getElementById("feature-year").textContent=featureYear +"     ";
          document.getElementById("feature-user-rating").textContent=featureUserRating;
          document.getElementById("feature-critic-score").textContent=featureCriticScore;
          document.getElementById("feature-rating").textContent="     Rated: " +featureRating;
          if (featureRating === null) {
            document.getElementById("feature-rating").textContent="     Rated: Not Rated";
          };
          document.getElementById("feature-runtime-minutes").textContent=featureRunTimeMinutes;
          document.getElementById("feature-genre").textContent=featureGenre +" - "+ featureGenre2+" - "+featureGenre3;
          if (featureGenre3 === undefined) {
            document.getElementById("feature-genre").textContent=featureGenre +" - "+ featureGenre2+" - "+ "";
          };
          if (featureGenre2 === undefined) {
            document.getElementById("feature-genre").textContent=featureGenre + "";
          };
          document.getElementById("feature-plot-overview").textContent=featurePlotOverview;
          var featurePoster = document.getElementById("feature-poster");
          featurePoster.setAttribute("src", featurePosterUrl);
          document.getElementById("feature-hero").style.backgroundImage = 'url(' + featureBackdropUrl;
          var trailerThumbnail = document.getElementById("trailer-thumbnail");
          trailerThumbnail.setAttribute("src", featureTrailerThumbnail);
          document.getElementById("trailer-link").setAttribute("href", featureTrailerUrl);
          document.getElementById("trailer-link").setAttribute("target", "_blank");

       // call movie database for cast list
          var castURL = "https://api.themoviedb.org/3/movie/" + featureImbdId + "/credits?api_key=31febeb1a096ab76fc9eba623fc41de8&language=en-US"; 
          fetch(castURL).then(function (response) {
          if (response.ok) { 
            response.json().then(function (data) { 
            console.log(data); 
         // var director = Object.values(data.crew[1])[4]; 
            var cast = Object.values(data.cast[0])[4] + ", " + Object.values(data.cast[1])[4] + ", " + Object.values(data.cast[2])[4] + ", " + Object.values(data.cast[3])[4] + ", " + Object.values(data.cast[4])[4] + ", and " + Object.values(data.cast[5])[4]; 
            console.log(cast);
         // console.log(director);
         // document.getElementById("feature-director").textContent = director;
            document.getElementById("feature-actors").textContent = cast;
            });
          }
        });
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