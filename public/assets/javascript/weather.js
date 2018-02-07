var keys = require("../../../config");

var APIKey = keys.weatherAPIKey;
var geoLocation;
var query = keys.weatherQuery;

var teamStadiumLocation = [	"Bournemouth+BH7+7AF,+UK", "London+N7+7AJ,+UK", "Brighton+BN1+9BL,+UK", "Burnley+BB10+4BX,+UK",
							"London+SW6+1HS,+UK", "London+SE25+6PU,+UK", "Liverpool+L4+4EL,+UK", " Huddersfield+HD1+6PG,+UK",
							"Leicester+LE2+7FL,+UK", "Liverpool+L4+0TH,+UK", "Manchester+M11+3FF,+UK", "Manchester+M16+0RA,",
							"Newcastle+upon+Tyne+NE1+4ST,+UK", "Southampton+SO14+5FP,+UK", "Stoke-on-Trent+ST4+4EG,+UK",
							"Swansea+SA1+2FA,+UK", "London+N17+0AP,+UK", "Watford+WD18+0ER,+UK", "West+Bromwich+B71+4LF,+United Kingdom",
							"London+E20+2ST,+UK"];



// $(".thisTeamClass").on("click", function(){
	function getMyWeather (){
        var queryURL = query + geoLocation + APIKey;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response2) {

            $(".temp").html("Temperature: " + response2.main.temp + " F");
            $(".weather").html(response2.weather[0].description);
            $(".wind").html("Wind Speed: " + response2.wind.speed + " mph");

            console.log(response2);
            //
            //
            // $(".temp").html("Temperature: " + response.main.temp + " F");
            // $(".weather").html(response.weather[0].description);
            // $(".wind").html("Wind Speed: " + response.wind.speed + " mph");
            //
            // console.log("Wind Speed: " + response.wind.speed + " mph");
            // console.log("Weather: " + response.main.humidity);
            // console.log("Temperature: " + response.main.temp + " F");
        });
	}

		// console.log("this");
		// console.log();
// });
console.log("this");

