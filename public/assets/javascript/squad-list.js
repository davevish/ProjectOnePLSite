var squadAPI = "97dcf4541b834e55a85220bc5957afa1";
var teamsQuery = "http://api.football-data.org/v1/competitions/445/teams";
var combo = teamsQuery + squadAPI;
var SquadQuery;
var teamLink;
var orderTeam = [];

var playerTest = {};
var fixturesTest = {};
var playersUrl;

var nextFixtureDate;
//**** THIS WILL HOLD ALL DATA RELATED TO EACH TEAM NEEDED   ***********************************************************
var teamPlayerFixturesOrdered = [];

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
        console.log(teams);

    //  Grab Squad and Fixtures Query Links and store them in a object
        SquadQuery = response.teams[i]._links.players.href;
        FixturesQuery = response.teams[i]._links.fixtures.href;

        playerTest[teams] = SquadQuery;
        fixturesTest[teams] = FixturesQuery;

        // listMySquad(SquadQuery);
    }
    // Sort Teams by Name
    var newTeamOrder = orderTeam.sort();

    Object.keys(playerTest, fixturesTest)
        .sort()
        .forEach(function(v, i) {
            teamPlayerFixturesOrdered.push([v , playerTest[v] , fixturesTest[v]]);
        });

//  Log the array that holds the team info     [[ Team Name, Players , Fixtures] , .....]
    console.log(teamPlayerFixturesOrdered);

    // newTeamOrder.forEach(function (team) {
    //     $("#thisBeAllTheTeams").append("<li><a class='thisTeamClass'>" + team + "</a></li>");
    // });
    // console.log(newTeamOrder);

    teamPlayerFixturesOrdered.forEach(function (team) {
        var aTagLink = $("<a>");
        var listItem = $("<li>");

        listItem.html(team[0]);
        listItem.addClass("thisTeamClass");
        listItem.attr({
            "data-players":team[1],
            "data-fixtures":team[2]
        });

        aTagLink.append(listItem);

        $("#thisBeAllTheTeams").append(aTagLink);

        // $("#thisBeAllTheTeams").append("<li><a class='thisTeamClass' 'data-players='" + team[1] + "'  data-fixtures=`team[2]`>" + team[0] + "</a></li>");

    });

    $(".thisTeamClass").on("click", function (){

        playersUrl = $(this).attr("data-players");
        // console.log(playersUrl);

        $.ajax({
            headers: { "X-Auth-Token": squadAPI },
            url: playersUrl,
            dataType: "json",
            type: "GET"
        }).done(function(response) {
            //  All Players
            var playersResp = response.players;
            console.log(playersResp);
            //  Players Name
            var playerFullName = response.players.name;
            console.log(playerFullName);
            //  Numbers
            var numbersResp = response.players.jerseyNumber;
            //  Position
            var positionResp = response.players.position;

            //  Loop over all players and make new rows and data dynamically and add to HTML
            for(var j = 0; j < playersResp.length; j++) {
                $(".teamPlayersTable").append("<tr><td>" + playerFullName + "</td><td>" + numbersResp + "</td><td>" + positionResp + "</td>" );
            }
        });

        fixturesUrl = $(this).attr("data-fixtures");
        // console.log(playersUrl);

        $.ajax({
            headers: { "X-Auth-Token": squadAPI },
            url: fixturesUrl,
            dataType: "json",
            type: "GET"
        }).done(function(response) {

            for(var i = 0; )
            if (response.fixtures.status === "TIMED") {
                nextFixtureDate = response.fixtures
            }

            //  All Players
            var fixturesResp = response.fixtures[0];
            console.log(fixturesResp);
            //  Players Name
            var playerFullName = response.players.name;
            console.log(playerFullName);
            //  Numbers
            var numbersResp = response.players.jerseyNumber;
            //  Position
            var positionResp = response.players.position;

            //  Loop over all players and make new rows and data dynamically and add to HTML
            for(var j = 0; j < playersResp.length; j++) {
                $(".teamPlayersTable").append("<tr><td>" + playerFullName + "</td><td>" + numbersResp + "</td><td>" + positionResp + "</td>" );
            }
        })

    });

});





//
//
// //    List All Squad for team chosen
// function listMySquad(api) {
// //  New Query cause API has different link for every team instead of
// //  hard coding every team
//
//     $.ajax({
//         headers: { "X-Auth-Token": "97dcf4541b834e55a85220bc5957afa1" },
//         url: api,
//         dataType: "json",
//         type: "GET"
//     }).done(function(response) {
//         console.log(response);
//         //  make variable for response.players for less chance of error
//         var playersResp = response.players;
//
//     //  Loop over all players and make new rows and data dynamically
//         for(var j = 0; j < playersResp.length;j++) {
//             var newSquadRow = $("<tr>");
//             var nameData = $("<td>");
//             var positionData = $("<td>");
//             var jerseyNumberData = $("<td>");
//     //  target table data created and
//             nameData.text(playersResp.name);
//             positionData.text(playersResp.position);
//             jerseyNumberData.text(playersResp.jerseyNumber);
//     //  Append new data to New Row
//             newSquadRow.append(nameData);
//             newSquadRow.append(positionData);
//             newSquadRow.append(jerseyNumberData);
//     //  Move from DOM to HTML
//             $(".table").append(newSquadRow);
//
//         }
//     })
// }


