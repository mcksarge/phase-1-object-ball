//Object with nested objects
function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: "Black, White",
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: "Turquoise, Purple",
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
};

//Returns players score
function numPointsScored(name) {
    //loops through home players
    for (player in gameObject().home.players) {
        if (player === name) {
            return gameObject().home.players[player].points;
        }
    }
    //loops through away players
    for (player in gameObject().away.players) {
        if (player === name) {
            return gameObject().away.players[player].points
        }
    }
};

//Returns player shoe size
function shoeSize(name) {
    //loops through home players
    for (player in gameObject().home.players) {
        if (player === name) {
            return gameObject().home.players[player].shoe;
        }
    };
        //loops through away players
        for (player in gameObject().away.players) {
            if (player === name) {
                return gameObject().away.players[player].shoe;
            }
        }
};

//Returns team colors
function teamColors(name) {
    if (gameObject().home.teamName === name) {
        return gameObject().home.colors;
    } else if (gameObject().away.teamName === name) {
        return gameObject().away.colors;
    }
};

//Return team names
function teamNames() {
    let home = gameObject().home.teamName;
    let away = gameObject().away.teamName;
    return [home, away];
};

//Return team player numbers
function playerNumbers(name) {
    let object = gameObject()
    // loops through home team
    for (player in object) {
        let playerObj = Object.values(object.home.players)
        if (object.home.teamName === name) {
            return playerObj.map(player => player.number);
        }
    }
    // loops through away team
    for (player in object) {
        let playerObj = Object.values(object.away.players)
        if (object.away.teamName === name) {
            return playerObj.map(player => player.number);
        }
    }
};

//Returns player stats
function playerStats(name) {
    //loops through home team
    for (player in gameObject().home.players) {
        if (player === name) {
            return gameObject().home.players[player];
        }

    //loops through away team
    for (player in gameObject().away.players) {
        if (player === name) {
            return gameObject().away.players[player];
        }
    }
    }
};

//Returns rebounds of player with biggest shoe size
function bigShoeRebound () {
    let shoeSize = 0;
    let rebounds = 0;

    const home = gameObject().home.players;
    for (player in home) {
        if (home[player].shoe > shoeSize) {
            shoeSize = home[player].shoe;
            rebounds = home[player].rebounds;
        }
    }
    
    const away = gameObject().away.players;
    for (player in away) {
        if (away[player].shoe > shoeSize) {
            shoeSize = away[player].shoe;
            rebounds = away[player].rebounds;
        }
    }
    return rebounds;
}