const team = {
    _players: [
      {
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 11
  }
  {firstName: 'Pete', 
        lastName: 'Wheeler', 
        age: 54
      }
      {
        firstName: 'James', 
        lastName: 'Wilson', 
        age: 34
      }
  
    ]
    _games [
      {
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
  }
  {
    {
    opponent: 'Wolves',
    teamPoints: 33,
    opponentPoints: 17
  }{
    opponent: 'Lions',
    teamPoints : 15,
    opponentPoints: 20
  }
    ],
    get players () {
      return this._players;
    }
   get games() {
         return this._games;
     
  };
  
  addPlayer(firstName, lastName, age) {
    let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player);
  
  },
  addGame(oppName, points, oppPoints) {
    const game = {
      opponent: oppName,
      points: points,
      opponentPoint: oppPoint
    }
    this.games.push(game);
  }
  }
  
  team.addPlayer("Steph", "Curry", 28);
  team.addPlayer("Lisa", "Leslie", 44);
  team.addPlayer("Bugs", "Bunny", 76);
  
  console.log(team.players);
  
  team.addgame("Lions", 100, 50);
  team.addgame("wolves", 56, 90);
  team.addgame("Tigers", 30, 47);
  console.log(team.games);
  
  