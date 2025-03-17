function playGame(playerchoice) {
  const array = ["rock", "paper", "scissors"]; 
  const computerChoice = array[Math.floor(Math.random() * 3)];

  console.log(`Player choice - ${playerchoice}`);
  console.log(`Computer choice - ${computerChoice}`);

  let result;
  if (playerchoice === computerChoice) {
    result = "Match is Draw"; 
  } else if (
    (playerchoice === "rock" && computerChoice === "scissors") ||
    (playerchoice === "scissors" && computerChoice === "paper") ||
    (playerchoice === "paper" && computerChoice === "rock")
  ) {
    console.log("Congratulations, you win!");
    result = "You win the match!"; 
  } else {
    result = "You lost the game!"; 
  }

  document.getElementById(
    "result"
  ).innerText = `Player: ${playerchoice} | Computer: ${computerChoice}\n${result}`;
}

function resetGame() {
  document.getElementById("result").innerText = "";
}
