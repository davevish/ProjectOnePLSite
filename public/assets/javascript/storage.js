// Initialize Firebase
var config = {

};
firebase.initializeApp(config);

var PLdatabase = firebase.database();
//Set and Initalize Variables
var user = "John Doe";
var team = "Bootcamp United FC";
var goals = 0;
var saves = 0;

//Adding on click function to store variables when user clicks register
$("#registerButton").on("click", function(event){
	event.preventDefault();

	user = $("#username").val().trim();

	console.log(user);

	PLdatabase.ref().push({
		username: user,
		lastTeamPicked: "",
		goals: "",
		blocks: ""

	});

	window.location.href="welcomePage.html";

	PLdatabase.ref().on("child_added", function(childSnapshot){
		console.log(childSnapshot.val().username);
		$(".welcomeUsername").append(childSnapshot.val().username);
	});
});
