var displaySelectedTitle = function(genre) {
  var url = new URL(window.location);
  var selectedTitleId = url.searchParams.get("featureTitleId") 
  console.log(selectedTitleId);

  // format the watchmode api url for selected title details
  var selectedTitleApiUrl = 'https://api.watchmode.com/v1/title/' + selectedTitleId + '/details/?append_to_response=sources&apiKey=3vWxYKPiq0kntxPSw8B2hMi3OiBvlMzGkqZPSj6R';
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

         // streaming sources
          const sources = data.sources;
          const disneyPlus = sources.filter(source => source.source_id === 372);
          if (disneyPlus.length >= 1) {
            document.getElementById("disney-plus").textContent = "   Disney+   "
           // let disneyUrl= disneyPlus[0].web_url;
           // document.getElementById("disney-streaming-link").setAttribute("href", disneyUrl);
           // document.getElementById("disney-streaming-link").setAttribute("target", "_blank");
           // console.log(disneyPlus[0].name);
           // console.log(disneyPlus[0].web_url);
          } else if (disneyPlus.length === 0) {
           // let disneyUrl = " ";
           // document.getElementById("disney-streaming-link").setAttribute("href", disneyUrl);
             document.getElementById("disney-plus").textContent = " ";  
            }

          const netflix = sources.filter(source => source.source_id === 203)
          if (netflix.length >= 1) {
              document.getElementById("netflix").textContent = "   Netflix   "
              
            } else if (netflix.length === 0) {
               document.getElementById("netflix").textContent = " ";  
              }

          const hulu = sources.filter(source => source.source_id === 157)
          if (hulu.length >= 1) {
            document.getElementById("hulu").textContent = "   Hulu   "
          } else if (hulu.length === 0) {
             document.getElementById("hulu").textContent = " ";  
            }

          const amazonPrime = sources.filter(source => source.source_id === 26)
          if (amazonPrime.length >= 1) {
             document.getElementById("amazon-prime").textContent = "   Amazon Prime Video   "
          } else if (amazonPrime.length === 0) {
             document.getElementById("amazon-prime").textContent = " ";  
            }

          const hboMax = sources.filter(source => source.source_id === 387 )
          if (hboMax.length >= 1) {
            document.getElementById("hbo-max").textContent = "   HBO Max   "
          } else if (netflix.length === 0) {
             document.getElementById("hbo-max").textContent = " ";  
            }

          console.log(disneyPlus);
         // if (disneyPlus.length === 0); 
         // console.log("hi")
         // console.log(disneyPlus[0].name);
         // console.log(disneyPlus[0].web_url);
          console.log(netflix);
         // console.log(netflix[0].name);
         // console.log(netflix[0].web_url);
          console.log(hulu);
         // console.log(hulu[0].name);
         // console.log(hulu[0].web_url);
          console.log(amazonPrime);
         // console.log(amazonPrime[0].name);
         // console.log(amazonPrime[0].web_url);
          console.log(hboMax);
         // console.log(hboMax[0].name);
         // console.log(hboMax[0].web_url);
         // console.log(featureStreamingSources);
         // console.log(data.sources[34]);

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
         // trailerThumbnail.setAttribute("href", featureTrailerUrl)
          document.getElementById("trailer-link").setAttribute("href", featureTrailerUrl);
          document.getElementById("trailer-link").setAttribute("target", "_blank");

         // call movie database for cast list
          var castURL = "https://api.themoviedb.org/3/movie/" + featureImbdId + "/credits?api_key=921ba47b5c4b85bc48dd2db9202db1be&language=en-US"; 
          fetch(castURL).then(function (response) {
          if (response.ok) { 
            response.json().then(function (data) { 
            console.log(data); 

            var director = Object.values(data.crew[1])[4]; 
            var cast = Object.values(data.cast[0])[4] + ", " + Object.values(data.cast[1])[4] + ", " + Object.values(data.cast[2])[4] + ", " + Object.values(data.cast[3])[4] + ", " + Object.values(data.cast[4])[4] + ", and " + Object.values(data.cast[5])[4]; 
            // var cast1 = Object.values(data.cast[1])[4];
            // console.log(cast1);
            console.log(cast);
            console.log(director);
            //  document.getElementById("feature-director").textContent = director;
            document.getElementById("feature-actors").textContent = cast;
            //document.getElementById("feature-actors").textContent = cast1;
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