var squadAPI = "97dcf4541b834e55a85220bc5957afa1";
var teamsQuery = "http://api.football-data.org/v1/competitions/445/teams";
var combo = teamsQuery + squadAPI;
var SquadQuery;
var teamLink;
var orderTeam = [];

var playerTest = {};
var fixturesTest = {};

$.ajax({
    headers: { "X-Auth-Token": "97dcf4541b834e55a85220bc5957afa1" },
    url: "http://api.football-data.org/v1/competitions/445/teams",
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
    // Sort Players Query Links by Team
    var teamPlayerFixturesOrdered = [];
    // Sort Fixtures Query Links by Team
    var newFixturesOrder;

    Object.keys(playerTest, fixturesTest)
        .sort()
        .forEach(function(v, i) {
            teamPlayerFixturesOrdered.push([v , playerTest[v] , fixturesTest[v]]);
            console.log(v, playerTest[v], fixturesTest[v]);
        });

//  Log the array that holds the team info     [[ Team Name, Players , Fixtures] , .....]
    console.log(teamPlayerFixturesOrdered);

    newTeamOrder.forEach(function (team) {
        $("#thisBeAllTheTeams").append("<li><a class='thisTeamClass'>" + team + "</a></li>");
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


