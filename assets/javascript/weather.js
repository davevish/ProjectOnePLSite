var APIKey = "166a433c57516f51dfab1f7edaed8413";

var queryURL = "http://api.openweathermap.org/data/2.5/weather?" +
	"q=London&units=imperial&appid=" + APIKey;

$.ajax({
	url: queryURL,
	method: "GET"
})
	.done(function(response) {

		console.log(queryURL);
		console.log(response);

		$(".temp").html("Temperature: " + response.main.temp) + " F";
		$(".weather").html(response.weather[0].description);
		$(".wind").html("Wind Speed: " + response.wind.speed + " mph");

		console.log("Wind Speed: " + response.wind.speed + " mph");
		console.log("Weather: " + response.main.humidity);
		console.log("Temperature: " + response.main.temp + " F");
	});