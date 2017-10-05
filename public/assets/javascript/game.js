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

$('.gamediv').each(function(index) {
	// if index is included inside goalsquares
	console.log(index)
	if (goalsquares.includes(index))	 {
		$(this).attr("goal", "Yes");
	  // apply goal atrribute
	} else {
		$(this).attr("goal", "No");
	}
	//end if
})

//on click of a square, see if it's a goal or block
$(".gamediv").on("click", function () {
	if ( $(this).attr("goal") == "Yes" ) {
		goals++;
		pksremaining--;
	} else {
		blocks++;
		pksremaining--;
	}

	//Update goals, blocks, and PKs
	$("#goals-div").text(goals);
	$("#blocks-div").text(blocks);
	$("#pks-div").text(pksremaining);
	console.log("GOALS:" + goals)
	console.log("PKS:" + pksremaining)

	if (pksremaining == 0) {
		if (goals > blocks) {
			$("#winnermodal").modal("toggle");
			console.log("Winner egg called");
		} else {
			$("#losermodal").modal("toggle");
			console.log("Loser egg called");
		}
		
		reset();
	}
});


//You win or you lose after PKs run out

//game reset
function reset() {
	$("#pks-div").text(5);
	$("#goals-div").text(0);
	$("#blocks-div").text(0);
	blocks = 0;
	goals = 0;
	pksremaining = 5;
}

$("#resetbtn").on("click", function() {
	event.preventDefault();
	$("#pks-div").text(5);
	$("#goals-div").text(0);
	$("#blocks-div").text(0);
	blocks = 0;
	goals = 0;
	pksremaining = 5;
});

//jumbotron collapse
$("#jumbo-btn").on("click", function() {
	$("#header-section").html("");
	//$("#jumbotron-div").attr("style", "height:10px;")
})
 

//End the doc inialize func
});
