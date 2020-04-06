var choice = ["rock", "paper", "scissors"];

var name1 = {
  name: "George",
  wins: 0,
  rps: getChoice(),
};

var name2 = {
  name: "Name2",
  wins: 0,
  rps: getChoice(),
};

var name3 = {
  name: "Name3",
  wins: 0,
  rps: getChoice(),
};

var nam4 = {
  name: "Name4",
  wins: 0,
  rps: getChoice(),
};

function playGame(player1, player2) {
  console.log(compare(player1, player2));
  console.log(player1.name + " wins: " + player1.wins);
  console.log(player2.name + " wins: " + player2.wins);
}

function getChoice() {
  let rand = Math.random();

  if (rand < 0.34) {
    return choice[0];
  } else if (rand < 0.67) {
    return choice[1];
  } else {
    return choice[2];
  }
}

function compare(player1, player2) {
  if (player1.rps == player2.rps) {
    return (
      player1.name +
      " " +
      player1.rps +
      "\n" +
      player2.name +
      " " +
      player2.rps +
      "\nThe result is a tie!"
    );
  }

  if (player1.rps == "rock") {
    if (player2.rps == "scissors") {
      player1.wins++;
      return (
        player1.name +
        " " +
        player1.rps +
        "\n" +
        player2.name +
        " " +
        "\nThe result is you lose!"
      );
    } else {
      player2.wins++;
      return (
        player1.name +
        " " +
        player1.rps +
        "\n" +
        player2.name +
        " " +
        "\nThe result is you win!"
      );
    }
  }

  if (player1.rps == "paper") {
    if (player2.rps == "rock") {
      player1.wins++;
      return (
        player1.name +
        " " +
        player1.rps +
        "\n" +
        player2.name +
        " " +
        "\nThe result is you lose!"
      );
    } else {
      player2.wins++;
      return (
        player1.name +
        " " +
        player1.rps +
        "\n" +
        player2.name +
        " " +
        "\nThe result is you win!"
      );
    }
  }

  if (player1.rps == "scissors") {
    if (player2.rps == "paper") {
      player1.wins++;
      return (
        player1.name +
        " " +
        player1.rps +
        "\n" +
        player2.name +
        " " +
        "\nThe result is you lose!"
      );
    } else {
      player2.wins++;
      return (
        player1.name +
        " " +
        player1.rps +
        "\n" +
        player2.name +
        " " +
        "\nThe result is you win!"
      );
    }
  }
}

//console.log('Great job! the ' + computer2 +  ' had ' + computerWin + '. The ' + player1.rps + ' had ' + playerWin);

// console.log('Great job! the ' + computer2 +  ' had ' + computerWin + '. The ' + player1.rps + ' had ' + playerWin);

// var player1.rps = getChoice();
// var player2.rps = getChoice();

// console.log(player1.rps + " you have " + playerWin);
// console.log(computer2 + " you have " + computerWin);
