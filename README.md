var castURL =
            "https://api.themoviedb.org/3/movie/" +
            featureImbdId +
            "/credits?api_key=921ba47b5c4b85bc48dd2db9202db1be&language=en-US";
          fetch(castURL).then(function (response) {
            if (response.ok) {
              response.json().then(function (data) {
                console.log(data);
                var director = Object.values(data.crew[1])[4];
                var cast =
                  Object.values(data.cast[0])[4] +
                  " and " +
                  Object.values(data.cast[1])[4];
                // var cast1 = Object.values(data.cast[1])[4];

                // console.log(cast1);
                console.log(cast);
                console.log(director);
                document.getElementById("feature-director").textContent =
                  director;
                document.getElementById("feature-actors").textContent = cast;
                // document.getElementById("feature-actors").textContent = cast1;
              });
            }
          });
