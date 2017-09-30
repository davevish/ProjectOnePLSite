// Initialize Jquery
$(document).ready(function() {
console.log("Page loaded, Jquery started")

// Set empty variables for the counts in the game:
var goals = 0;
var blocks = 0;
var pksremaining = 5;

var computerchoice = '';
var goalsquares = [];

squarereset();


//Show PKs remaining
$("#pks-div").text(pksremaining);


//randomly assign which squares count as goals
function squarereset() {
	for (i=0; i < 5; i++) {
		var goal = Math.floor(Math.random() * 10);
		goalsquares.push(goal);
	}
}
console.log(goalsquares);


//on click of a square, see if it's a goal or block
$(".gamediv").on("click", function () {
	//if (div.id == ) {
		goals++;
		pksremaining--;
	//} else {
		//blocks++;
		//pksremaining--;
	//}

	//Update goals, blocks, and PKs
	$("#goals-div").text(goals);
	$("#pks-div").text(pksremaining);
	console.log("GOALS:" + goals)
	console.log("PKS:" + pksremaining)
});


//You win or you lose after PKs run out

//game reset
function reset() {
	$("#pks-div").text(5);
	$("#goals-div").text(0);
	$("#goals-div").text(0);
}

$("#resetbtn").on("click", function() {
	event.preventDefault();
	$("#pks-div").text(5);
	$("#goals-div").text(0);
	$("#goals-div").text(0);
});
 

//End the doc inialize func
});
