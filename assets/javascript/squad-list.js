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
    // console.log(response);
    // console.log(response.teams);
    // console.log(response.teams[0]._links.players.href);
var orderTeam = [];
    for (var i = 0; i < response.teams.length; i++) {
        var teams = response.teams[i].name;
        orderTeam.push(teams);
        console.log(teams);

        SquadQuery = response.teams[i]._links.players.href;
        console.log(SquadQuery);
    }

    var newOrder = orderTeam.sort();

    newOrder.forEach(function (team) {
        $("#thisBeAllTheTeams").append("<li>" + team + "</li>");
    });
    console.log(newOrder);

    //  function to grab squad of chosen team
    listMySquad();

});

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


