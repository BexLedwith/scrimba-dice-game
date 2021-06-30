// Create variables for the game state
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

// create variables to store references to necessary DOM nodes
const message = document.getElementById("message");
const p1Dice = document.getElementById("player1Dice");
const p2Dice = document.getElementById("player2Dice");
const p1Score = document.getElementById("player1Scoreboard");
const p2Score = document.getElementById("player2Scoreboard");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const p1Turn = "Player 1 Turn";
const p2Turn = "Player 2 Turn";

message.textContent = p1Turn;

// event listeners
// 1. Find out which players turn it is

// 3. Switch the turn back to the other player

// 1. Display the dice number instead of logging it out
// 2. Use the 'active' class to show which player's turn it is
// Hint: use the .classList.remove() and classlist.add() methods
// 3. Update the "message" DOM node so that it states who's turn it is

rollBtn.addEventListener("click", function () {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  player1Turn
    ? ((p1Dice.textContent = diceRoll),
      (player1Score += diceRoll),
      (p1Score.textContent = player1Score),
      p1Dice.classList.remove("active"),
      p2Dice.classList.add("active"),
      (message.textContent = p2Turn))
    : ((p2Dice.textContent = diceRoll),
      (player2Score += diceRoll),
      (p2Score.textContent = player2Score),
      p2Dice.classList.remove("active"),
      p1Dice.classList.add("active"),
      (message.textContent = p1Turn));
  player1Turn = !player1Turn;
});
