let replay = true;
let humanScore = 0;
let computerScore = 0;

while (replay) {
  let dictionary = {
    rock: 1,
    paper: 2,
    scissors: 3
  };


  function getComputerChoice() {
    let choice = Math.random();
    if (choice < 1 / 3) {
      return 1;
    } else if (choice > 1 / 3 && choice < 2 / 3) {
      return 2;
    } else {
      return 3;
    }
  }

  function getHumanChoice() {
    let humanChoice = prompt("Pick Rock, Paper, or Scissors: ");
    return dictionary[humanChoice.trim().toLowerCase()];
  }

  function playRound(computerChoice, humanChoice) {
    if (humanChoice % computerChoice == 1) {
      return "It's a tie!";
    } else if (
      computerChoice / humanChoice === 1 / 3 ||
      computerChoice / humanChoice === 2 / 1 ||
      computerChoice / humanChoice === 3 / 2
    ) {
      computerScore += 1;
      return "You lose!";
    } else {
      humanScore += 1;
      return "You win!";
    }
  }

  // Get the two paper selections.
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  // Play the round
  console.log(playRound(humanSelection, computerSelection));

  // Display score
  console.log(`Player Score: ${humanScore}, Computer Score: ${computerScore}`);
  replay = confirm("Do you want to run the script again?");
}
