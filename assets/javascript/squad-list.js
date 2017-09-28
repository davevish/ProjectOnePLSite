var squadAPI = "97dcf4541b834e55a85220bc5957afa1";
var teamsQuery = "http://api.football-data.org/v1/competitions/445/teams";
var combo = teamsQuery + squadAPI;
var SquadQuery;

$.ajax({
    headers: { "X-Auth-Token": "97dcf4541b834e55a85220bc5957afa1" },
    url: "http://api.football-data.org/v1/competitions/445/teams",
    dataType: "json",
    type: "GET"
}).done(function(response) {
    console.log(response);

//  function to list all teams
    for (var i = 0; i < response.teams.length; i++) {
        var teams = response.teams[i].name;
        $("#all-team-names").append(teams);
    }
    SquadQuery = response.teams[i].players.href;
    console.log(SquadQuery);
    //  function to grab squad of chosen team
    listMySquad();




});



//  List ALL teams in sidebar
// function listAllTeams() {
//     for (var i = 0; i < response.teams.length; i++) {
//         var teams = response.teams[i].name;
//         $("#all-team-names").append(teams);
//     }
// }

//    List All Squad for team chosen
function listMySquad() {
//  New Query cause API has different link for every team instead of
//  hard coding every team

    $.ajax({
        headers: { "X-Auth-Token": "97dcf4541b834e55a85220bc5957afa1" },
        url: SquadQuery,
        dataType: "json",
        type: "GET"
    }).done(function(response) {

        //  make variable for response.players for less chance of error
        var playersResp = response.players;

    //  Loop over all players and make new rows and data dynamically
        for(var j = 0; j < playersResp.length;j++) {
            var newSquadRow = $("<tr>");
            var nameData = $("<td>");
            var positionData = $("<td>");
            var jerseyNumberData = $("<td>");
    //  target table data created and
            nameData.text(playersResp.name);
            positionData.text(playersResp.position);
            jerseyNumberData.text(playersResp.jerseyNumber);
    //  Append new data to New Row
            newSquadRow.append(nameData);
            newSquadRow.append(positionData);
            newSquadRow.append(jerseyNumberData);
    //  Move from DOM to HTML
            $(".table").append(newSquadRow);

        }
    })
}


