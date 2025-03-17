function playGame(playerchoice) {
  const array = ["rock", "paper", "scissor"];
  const computerChoice = array[Math.floor(Math.random() * 3)];

  console.log(`Player choice - ${playerchoice}`);
  console.log(`Computer choice - ${computerChoice}`);

  let result;
  if (playerchoice == computerChoice) {
    result = "Match is drow";
  } else if (
    (playerchoice === "rock" && computerChoice === "scissors") ||
    (playerchoice === "scissors" && computerChoice === "paper") ||
    (playerchoice === "paper" && computerChoice === "rock")
  ) {
    console.log("Congratulation you win");
    result = "You win the mactch";
  } else {
    result = "You loss the game";
  }
  document.getElementById(
    "result"
  ).innerText = `Player: ${playerchoice} | Computer: ${computerChoice}\n${result}`;
}
function resetGame() {
  document.getElementById("result").innerText = "";
}
