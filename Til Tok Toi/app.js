
// -----------------JS ----------------

var cells = document.querySelectorAll(".cell");
var resetBtn = document.getElementById("reset-btn");
var winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
var arr = ["", "", "", "", "", "", "", "", ""];
var currentPlayer = "X";


cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    // If the cell is empty and no winner yet
    if (cell.innerHTML === "") {
      cell.innerHTML = currentPlayer;
      arr[cell.id] = currentPlayer; 
      currentPlayer = currentPlayer == "X" ? "O" : "X"; // Switch player
      checkWinner(); // Check for winner after every move
    }
  });
});

// Function to display the winner
let showWinner = (winner) => {
  
  alert(`Congratulations, the winner is ${winner}`);
  resetGame(); // Reset game after showing winner

};

// Function to check if there is a winner
let checkWinner = () => {
  for (let pattern of winCondition) {

    var posi0Val = cells[pattern[0]].innerHTML;
    var posi1Val = cells[pattern[1]].innerHTML;
    var posi2Val = cells[pattern[2]].innerHTML;

    if (posi0Val != "" && posi1Val != "" && posi2Val != "") {
      if (posi0Val == posi1Val && posi1Val == posi2Val) {
        showWinner(posi0Val); // Show the winner and reset game
        return true; // Winner found, stop further checks
      }
    }
  }
  return false; // No winner yet

};

// Reset function for the game board and state
function resetGame() {
  cells.forEach((cell) => {
    cell.innerHTML = ""; // Clear cell content

  });
  arr = ["", "", "", "", "", "", "", "", ""]; // Reset game state
  currentPlayer = "X"; // Reset to player X's turn

}
