var displaySelectedTitle = function(genre) {
    var url = new URL(window.location);
    var selectedTitleId = url.searchParams.get("featureTitleId") 
    console.log(selectedTitleId);

    // format the watchmode api url for selected title details
    var selectedTitleApiUrl = 'https://api.watchmode.com/v1/title/' + selectedTitleId + '/details/?append_to_response=sources&apiKey=ZAhWH7fs7akLihCUWHsN61BnLhW8cRtGdRZea30D';
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

            // store desired data in variables

// pick up here*************

          //displayGenreResults(data.titles, genre);
         // console.log(data.titles);
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