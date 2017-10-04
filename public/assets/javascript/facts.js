
var factsArray = [  "The first ever Premier League goal was scored by Brian Deane for Sheffield United vs Manchester United in the 5th minute",
                    "Two players have scored Premier League penalties with both feet: Bobby Zamora and Obafemi Martins",
                    "Ryan Giggs has been substituted more times than any other player (134)",
                    "Mario Balotelli’s only assist in the Premier League was for Sergio Aguero’s title-winning goal vs QPR",
                    "Wayne Rooney, Gareth Bale and Kevin Davies are the only players to score, assist and score an own goal in a single Premier League game (Bale being the only one to get booked in the same game as well",
                    "Man United have never lost a Premier League game at Old Trafford in which they have been ahead at half-time",
                    "Alan Shearer has missed the most Premier League penalties (11). In fairness, he's also netted the most (56)",
                    "Former England goalkeeper Paul Robinson has scored, assisted and won a penalty in the Premier League. He also has more Premier League assists than any other keeper (five)",
                    "James Milner has scored in 47 different Premier League games - and hasn't lost any of them (a record)",
                    "Only three players born after the Premier League began (August 1992) have scored Premier League hat-tricks: Raheem Sterling, Harry Kane and Romelu Lukaku",
                    "Newcastle United won 34 points from losing positions in 2001/02; the most by a team in a single Premier League season. It was also the same number of points that they won in total when relegated seven years later",
                    "In 2014/15, Leicester City spent longer at the bottom of the table without being relegated than any side in Premier League history (140 days)",
                    "Cesar Azpilicueta (2016/17), Wes Morgan (2015/16), John Terry (2014/15) and Gary Pallister (1992/93) are the only outfield players to play every minute of the season for a Premier League title-winning side",
                    "Peter Crouch has scored more headed goals (50) than 16 of the teams who have played in the Premier League",
                    "Richard Wright has played a combined 12 Premier League games for Arsenal (12) and Man City (0)… and has two title medals",
                    "Terry Connor (former Wolves boss) is the only manager to take charge of more than 10 Premier League games and not win a single one",
                    "Only two players have ever scored a hat-trick of headers in a Premier League match: Duncan Ferguson for Everton (vs Bolton in December 1997) and Salomon Rondon for West Brom (vs Swansea in December 2016)",
                    "So far, there have been 9,746 EPL matches played (Not including 2017/2018 season)",
                    "Manchester United won 13 EPL titles - more than all other teams combined",
                    " No English manager has ever won the English Premier League. Nationalities breakdown: Scottish: Alex Ferguson (Man Utd) and Kenny Dalglish (Blackburn), French: Arsene Wenger (Arsenal), Portuguese: Jose Mourinho (Chelsea), Italian: Roberto Mancini (Manchester City), Carlo Ancelotti (Chelsea), Claudio Ranieri (Leicester City), Antonio Conte (Chelsea), Chilean: Manuel Pellegrini (Man City)",
                    "Everton have lost the most Premier League matches with 336 (Not including 2017/2018 season)",
                    "Tottenham have conceded the most Premier League goals, at 1,231 (Not including 2017/2018 season)",
                    "Goalkeeper Petr Cech has kept the most clean sheets with 149 with Chelsea and Arsenal",
                    "The youngest player to have played a Premier League game: fullback Matthew Briggs, who was 16 years 65 days old when he played for Fulham against Middlesbrough on May 13, 2007",
                    "The fastest hat-trick was scored by Sadio Mane, who netted thrice in 178 seconds for Southampton against Aston Villa on May 16, 2015",
                    "Striker Marcus Bent has played for the most EPL clubs, with eight",
                    "The Premier League ranks fourth among professional sports leagues in the world by revenue (4,865 € million)"];

//  This will shuffle the facts array so they dont get the same fact first every time they come back to the site
function shuffleMe() {
    factsArray.sort(function () {
        return 0.5 - Math.random()
    });
}
//  Call the function to shuffle the array and check to see if it works
shuffleMe();
console.log(factsArray[0]);

$("#gifButton").on("click", function() {
    
});
