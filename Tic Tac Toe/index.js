let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";


const cells = document.querySelectorAll(".cell");
const resetButton = document.querySelector(".reset-button");



function makeMove(index) {
    if (board[index] === "") {
        board[index] = currentPlayer;
        cells[index].textContent = currentPlayer; // Update UI

        if(checkWinner()) {
            setTimeout(() => alert(currentPlayer + " wins!"), 100);
            return;
        } else if (!board.includes("")) {
            setTimeout(() => alert("Match is a draw!"), 100);
        }
        
        if (currentPlayer === "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }
    } else {
        alert("Invalid move, try again.");
    }
}


function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winPatterns.some(pattern =>
        board[pattern[0]] !== "" &&
        board[pattern[0]] === board[pattern[1]] &&
        board[pattern[1]] === board[pattern[2]]
    );
}

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => makeMove(index));
});
resetButton.addEventListener("click", () => {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    cells.forEach(cell => (cell.textContent = ""));
});