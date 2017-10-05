//This was used to call the news API but it does not return information specific to the Premier League so was not used. Replaced with RSS feed widget.

// $.ajax({
// 	url:
// 	"https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=69f6e8df9c5045d8aa714887e9f815c8",
// 	method: "GET",
// 	error: function() {
// 		console.log("we are fucked");
// 	},
// 	success: function(data) {
// 		processData(data);
// 	}
// });

// function processData(data) {
// 	var articleItems = [];

// 	for (var i = 0; i < data.articles.length; i++) {
// 		var author = data.articles[i].author;
// 		var title = data.articles[i].title;
// 		var description = data.articles[i].description;
// 		var artUrl = data.articles[i].url;

// 		var $author = $('<div class="author"> Author: ' + author + "</div >");
// 		var $title = $("<a href=" + artUrl + '> <div class="title">' + title + "</div> </a>");
// 		var $description = $("<a href=" + artUrl +'> <div class="description">' + description + "</div> </a>");

// 		$(".newsArticles").append($author, $title, $description);
// 		console.log(artUrl);
// 	}
// }