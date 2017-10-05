// Initialize Firebase
var config = {
	apiKey: "AIzaSyCd-5wGWJr19d9SSurBijN8qpTbDAQ5oK4",
	authDomain: "premier-league-project.firebaseapp.com",
	databaseURL: "https://premier-league-project.firebaseio.com",
	projectId: "premier-league-project",
	storageBucket: "premier-league-project.appspot.com",
	messagingSenderId: "804191688497"
};
firebase.initializeApp(config);

var PLdatabase = firebase.database();

var user = "John Doe";
var team = "Bootcamp United FC";
var goals = 0;
var saves = 0;

$("#registerButton").on("click", function(event){
	event.preventDefault();

	user = $("#username").val().trim();

	PLdatabase.ref().push({
	username: user,
	lastTeamPicked: team,
	goals: goals,
	blocks: blocks

	});

});
