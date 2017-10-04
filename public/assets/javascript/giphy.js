//  Create Variable of searches. Wel will randomly pick one of these at a time to display the gifs
//  related to what index we land on
var searchMeArray = [   "EPL", "EPL funny", "Soccer funny", "Soccer Team Funny", "Soccer Dive Funny",
                        "Soccer Fall", "Soccer Fall Funny", "Soccer Fake", "Soccer Juke", "Soccer Fail"];
var keyLim = "&limit=5&api_key=p61cW0ySxTXCRmZWsUKICmpiMZqEKYjc";

//  Create on click function and link to HTML page
$("#gifButton").on("click", function () {
//    Randomize the search from the searchMeArray and assign it a variable
    var searchParam = searchMeArray[Math.floor(Math.random() * searchMeArray.length)];
    console.log(searchParam);
    $(".modal").css('display', 'block');
});
