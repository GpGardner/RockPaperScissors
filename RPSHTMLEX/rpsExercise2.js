// $(document).ready(console.log('hello'))

const player1Div = $(`#player1Div`);
const player1Score = $(`#player1Score`);
const player1Name = $(`#player1Name`);
const player1Choice = $(`#player1Choice`);
const player2Div = $(`#player2Div`);
const player2Score = $(`#player2Score`);
const player2Name = $(`#player2Name`);
const player2Choice = $(`#player2Choice`);
const runGameButton = $(`#runGameButton`);




//Allows for the three different options
var choice = ["rock", "paper", "scissors"];

//Creating a player class  "Object factory" to crank out different players
function Player(name, wins) {
  this.name = name;
  this.wins = wins;
};

//Assign a prototype accessible to all players if they call it.
Player.prototype.play = function () {
  let rand = Math.random();

  if (rand < 0.34) {
    return choice[0];
  } else if (rand < 0.67) {
    return choice[1];
  } else {
    return choice[2];
  }
};

//Creating a new player1 "George", 0 wins
let player1 = new Player("George", 0);
// player1Name.text(`${player1.name}`)


//Creating a new player2 "Tia", 0 wins
let player2 = new Player("Tia", 0);
// player2Name.text(`${player2.name}`)


//Function to start the game, takes in two players. player1 and player 2 from above
//also takes in the win total 


function playGame(player1, player2, winTotal) {
  player1Div.removeClass();
  player2Div.removeClass();

  //the player objects keep track of their own wins, if they are less than the win total we keep playing

  // while(player1.wins < winTotal && player2.wins < winTotal) {
    //loop was for testing to run multiple games
    
    //runs the compare function. Passes down the two player objects and runs the prototype function
    //that function assigns them a move each time it gets run.
    compare(player1, player2, player1.play(), player2.play());
    player1Name.text(`${player1.name}`)  
    player1Score.text(`${player1.wins}`)
    player1Score.text(`${player1.wins}`)
    player2Name.text(`${player2.name}`)  
    player2Score.text(`${player2.wins}`)
    
    
    //logs the wins for each player. if you use ` instead of ' you can use these handy variables instead
    //of having to use concatenation
    console.log(`${player1.name} - ${player1.wins} wins, ${player2.name} - ${player2.wins} wins\n`);
  }
// }

function oneWin(){
  player1Div.addClass('win');
  player2Div.addClass('lose')
}

function twoWin(){
  player1Div.addClass('lose');
  player2Div.addClass('win');
}


//player1 obj, player2 obj, player1's move, player2's move. They are all passed down from the above function
function compare(player1, player2, player1Move, player2Move) {
  
  player1Choice.text(`${player1Move}`)
  player2Choice.text(`${player2Move}`)

  //prints out the name and the move choice
  console.log(
    `${player1.name}: ${player1Move}\n${player2.name}: ${player2Move}\n`
  );

  //the if statement for a tie
  if (player1Move == player2Move) {
    console.log(`Sorry you tied\n`);
    player1Div.addClass('tie');
    player2Div.addClass('tie');
    return
  }

  //if statement if player1 has rock
  //if player2 has scissors, else they have paper
  if (player1Move == "rock") {
    if (player2Move == "scissors") {
      oneWin();
      return player1.wins++;
      // return player1;
    } else {
      twoWin();
      return player2.wins++;
      // return player2;
    }
  }

  //if statement if player1 has scissors
  //if player2 has paper, else they have rock
  if (player1Move == "scissors") {
    if (player2Move == "paper") {
      oneWin();
      return player1.wins++;
      // return player1;
    } else {
      twoWin();
      return player2.wins++;
      // return player2;
    }
  }

  //if statement if player1 has paper
  //if player2 has rock, else they have scissors
  if (player1Move == "paper") {
    if (player2Move == "rock") {
      oneWin();
      return player1.wins++;
      // return player1;
    } else {
      twoWin();
      return player2.wins++;
      // return player2;
    }
  }
}
