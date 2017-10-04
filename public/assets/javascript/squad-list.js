var squadAPI = "97dcf4541b834e55a85220bc5957afa1";
var teamsQuery = "http://api.football-data.org/v1/competitions/445/teams";

var SquadQuery;
var orderTeam = [];
var playerTest = {};
var fixturesTest = {};
var playersUrl;
var fixturesUrl;

// For Var Fixtures
var nextFixtureDate = [];
var homeTeamNameFixture = [];
var awayTeamNameFixture = [];
var dateOfGame;
var timeOfGame;

// Banners Array to hold All Team Banners
var bannersTeam = [ "assets/images/banners/Bournemouth.jpg", "assets/images/banners/Arsenal.jpg", "assets/images/banners/Brighton.jpg",
                    "assets/images/banners/Burnley.jpg", "assets/images/banners/CFCBanner.jpg", "assets/images/banners/CrystalPalace.jpg",
                    "assets/images/banners/Everton.jpg", "assets/images/banners/Huddersfield.jpg", "assets/images/banners/LiecesterCity.jpg",
                    "assets/images/banners/Liverpool.jpg", "assets/images/banners/ManCity.jpg", "assets/images/banners/ManUnited.jpg",
                    "assets/images/banners/NewcastleUnited.jpg", "assets/images/banners/Southampton.jpg", "assets/images/banners/StokeCity.jpg",
                    "assets/images/banners/SwanseaCity.jpg", "assets/images/banners/Tottenham.jpg", "assets/images/banners/Watford.jpg",
                    "assets/images/banners/WestBrom.jpg", "assets/images/banners/WestHam.jpg" ];
// All Team Managers
var teamManagers = ["Eddie Howe", "Arsène Wenger", "Chris Hughton", "Sean Dyche", "Antonio Conte", "Roy Hodgson", "Ronald Koeman",
                    "David Wagner", "Craig Shakespeare", "Jürgen Klopp", "Josep Guardiola", "José Mourinho", "Rafael Benítez",
                    "Mauricio Pellegrino", "Mark Hughes", "Paul Clement", "Mauricio Pochettino", "Marco Silva", "Tony Pulis",
                    "Slaven Bilic"];

// All Team Stadium Names
var teamStadiums = ["Vitality Stadium", "The Emirates", "The Amex", "Turf Moor", "Stamford Bridge", "Selhurst Park",
                    "Goodison Park", "John Smith's Stadium", "King Power Stadium", "Anfield", "The Etihad", "Old Trafford",
                    "St James' Park", "St Mary's Stadium", "Bet365 Stadium", "Libery Stadium", "White Hart Lane",
                    "Vicarage Road", "The Hawthorns", "Olympic Stadium London"];

var teamStadiumImg = [  "assets/images/stadiumPics/afcBournemouth.jpg", "assets/images/stadiumPics/arsenal.jpg", "assets/images/stadiumPics/brighton.jpg",
                        "assets/images/stadiumPics/burnley.jpg", "assets/images/stadiumPics/chelsea.jpg", "assets/images/stadiumPics/crystalPalace.jpg",
                        "assets/images/stadiumPics/everton.jpg", "assets/images/stadiumPics/huddersfield.jpg", "assets/images/stadiumPics/leicesterCity.jpg",
                        "assets/images/stadiumPics/liverpool.jpg", "assets/images/stadiumPics/manCity.jpg", "assets/images/stadiumPics/manUnited.jpg",
                        "assets/images/stadiumPics/newcastle.jpg", "assets/images/stadiumPics/southampton.jpg", "assets/images/stadiumPics/stokeCity.jpg",
                        "assets/images/stadiumPics/swanseaCity.jpg", "assets/images/stadiumPics/tottenham.jpg", "assets/images/stadiumPics/watford.jpg",
                        "assets/images/stadiumPics/westBrom.jpg", "assets/images/stadiumPics/westHam.jpg"];


//****************** THIS WILL HOLD ALL DATA RELATED TO EACH TEAM NEEDED   *********************************************
var allTeamInfoOrdered = [];
//**********************************************************************************************************************
$.ajax({
    headers: { "X-Auth-Token": squadAPI },
    url: teamsQuery,
    dataType: "json",
    type: "GET"
}).done(function(response) {
    // console.log(response);
    // console.log(response.teams);
    // console.log(response.teams[0]._links.players.href);

    for (var i = 0; i < response.teams.length; i++) {
        var teams = response.teams[i].name;
        orderTeam.push(teams);
        // console.log(teams);

    //  Grab Squad and Fixtures Query Links and store them in a object
        SquadQuery = response.teams[i]._links.players.href;
        FixturesQuery = response.teams[i]._links.fixtures.href;

        playerTest[teams] = SquadQuery;
        fixturesTest[teams] = FixturesQuery;

    }
    // Sort Teams by Name
    var newTeamOrder = orderTeam.sort();

    // Make The Array That will Hold all Information for Teams
    Object.keys(playerTest, fixturesTest, bannersTeam, teamManagers, teamStadiums, teamStadiumImg)
        .sort()
        .forEach(function(v, i) {
            allTeamInfoOrdered.push([v , playerTest[v] , fixturesTest[v] , bannersTeam[i] , teamManagers[i] , teamStadiums[i], teamStadiumImg[i]]);
        });

//  Log the array that holds the team info     [[ Team Name, Players , Fixtures] , .....]
    console.log(allTeamInfoOrdered);

    // newTeamOrder.forEach(function (team) {
    //     $("#thisBeAllTheTeams").append("<li><a class='thisTeamClass'>" + team + "</a></li>");
    // });
    // console.log(newTeamOrder);

    //  Target variable that will hold everything and give each index a data attribute
    allTeamInfoOrdered.forEach(function (team) {
        var aTagLink = $("<a>");
        var listItem = $("<li>");

        listItem.html(team[0]);
        listItem.addClass("thisTeamClass");
        listItem.attr({
            "data-MyTeam": team[0],
            "data-players": team[1],
            "data-fixtures": team[2],
            "data-banner": team[3],
            "data-manager": team[4],
            "data-stadium": team[5],
            "data-stadiumImg": team[6]
        });

        aTagLink.append(listItem);

        $("#thisBeAllTheTeams").append(aTagLink);

        // $("#thisBeAllTheTeams").append("<li><a class='thisTeamClass' 'data-players='" + team[1] + "'  data-fixtures=`team[2]`>" + team[0] + "</a></li>");

    });

    $(".thisTeamClass").on("click", function (e){
        $(".hideMePlease").css('display', 'block' );
        $('body').css('background-image', 'url("../../assets/images/backgroundImages/cream_pixels_@2x.png")');

        // Store their team to reference in firebase
        var lastTeamPicked = $(this).attr("data-MyTeam");
        console.log(lastTeamPicked);
        // Empty on every click so that only selected teams info is displayed
        $(".teamPlayersTable").empty();
        homeTeamNameFixture = [];
        awayTeamNameFixture = [];
        $("#fixtureDate").empty();
        //  Populate the players table
        playersUrl = $(this).attr("data-players");
        // Separate Ajax call for players since they each have their own QueryURL
        $.ajax({
            headers: { "X-Auth-Token": squadAPI },
            url: playersUrl,
            dataType: "json",
            type: "GET"
        }).done(function(response) {
            //  All Players
            var playersResp = response.players;
            console.log(playersResp);

            //  Loop over all players and make new rows and data dynamically and add to HTML
            for(var j = 0; j < playersResp.length; j++) {
                //  Players Name
                var playerFullName = response.players[j].name;
                console.log(playerFullName);
                //  Numbers
                var numbersResp = response.players[j].jerseyNumber;
                //  Position
                var positionResp = response.players[j].position;

                $(".teamPlayersTable").append("<tr><td>" + playerFullName + "</td><td>" + numbersResp + "</td><td>" + positionResp + "</td>" );

            }
        });

        //  Now Populate the Fixture table
        fixturesUrl = $(this).attr("data-fixtures");
        // console.log(playersUrl);

        $.ajax({
            headers: { "X-Auth-Token": squadAPI },
            url: fixturesUrl,
            dataType: "json",
            type: "GET"
        }).done(function(response) {

            for( var i = 0; i < response.fixtures.length;i++ )
                if (response.fixtures[i].status === "TIMED") {
                    nextFixtureDate.push(response.fixtures[i].date);
                    homeTeamNameFixture.push(response.fixtures[i].homeTeamName);
                    awayTeamNameFixture.push(response.fixtures[i].awayTeamName);
                    console.log(response.fixtures[i].date);
                    dateOfGame = moment(response.fixtures[i].date).format("MMMM DD YYYY");
                    timeOfGame = moment(response.fixtures[i].date).format("hh:mm a");
                    console.log(dateOfGame, timeOfGame);
                    //  Insert Date and Time of next game
                    $("#fixtureDate").append(dateOfGame);
                    $("#fixtureTime").html(timeOfGame);
                    // Insert Home and Away Teams
                    $("#homeTeamName").html(homeTeamNameFixture + "<br>(Home)");
                    $("#awayTeamName").html(awayTeamNameFixture + "<br>(Away)");
                    console.log(homeTeamNameFixture);
                    console.log(awayTeamNameFixture);
                }

        });

        //  Insert Team Banner to Top
        var myBanner = $(this).attr("data-banner");
        $(".bannerImage").attr('src', myBanner);
       //  //  Insert Manager For selected team
        var managerName = $(this).attr("data-manager");
        $("#manager").html("Manager: " + managerName);
        console.log(managerName);
        //  Insert Stadium name For Selected team
        var stadiumName = $(this).attr("data-stadium");
        $("#stadiumName").html("Stadium: " + stadiumName);
        console.log(stadiumName);
        //  Insert Stadium Picture
        var stadiumImg = $(this).attr("data-stadiumImg");
        $("#stadiumImg").attr('src', stadiumImg);

    });

});

