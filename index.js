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
const p1Name = document.getElementById("p1-name");
const p2Name = document.getElementById("p2-name");

function btnVisibilityToggle() {
  rollBtn.style.display = "none";
  resetBtn.style.display = "block";
}

function scoreSync() {
  p1Score.textContent = player1Score;
  p2Score.textContent = player2Score;
}

function diceClass() {
  p2Dice.classList.remove("active");
  p1Dice.classList.add("active");
}

function reset() {
  player1Score = 0;
  player2Score = 0;
  scoreSync();
  player1Turn = true;
  p1Dice.textContent = "-";
  p2Dice.textContent = "-";
  rollBtn.style.display = "block";
  resetBtn.style.display = "none";
  document.getElementById("overlay").style.display = "block";
}

// event listeners
// 1. Find out which players turn it is

// 3. Switch the turn back to the other player

// 1. Display the dice number instead of logging it out
// 2. Use the 'active' class to show which player's turn it is
// Hint: use the .classList.remove() and classlist.add() methods
// 3. Update the "message" DOM node so that it states who's turn it is

// 1. Check if a player has won. If so, change the message to "Player X has won!"
// 2. Hide the Roll Dice Button and show the Reset Button. Hint: use display none/block

rollBtn.addEventListener("click", function () {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  player1Turn
    ? ((p1Dice.textContent = diceRoll),
      (player1Score += diceRoll),
      scoreSync(),
      p1Dice.classList.remove("active"),
      p2Dice.classList.add("active"),
      player1Score >= 20
        ? ((message.textContent = "Player 1 has won! 🥳"),
          btnVisibilityToggle())
        : (message.textContent = "Player 2 Turn"))
    : ((p2Dice.textContent = diceRoll),
      (player2Score += diceRoll),
      scoreSync(),
      diceClass(),
      player2Score >= 20
        ? ((message.textContent = "Player 2 has won! 🥳"),
          btnVisibilityToggle())
        : (message.textContent = "player 1 tunr"));
  player1Turn = !player1Turn;
});

// 1. Hook a click event listener up with the Reset Button
// 2. Create a reset() function that resets the game
// 3. Invoke the reset() function when the Reset Button is clicked

resetBtn.addEventListener("click", function () {
  reset();
});

// modal button
document.getElementById("close-modal").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "none";
  const player1Name = document.getElementById("player-1-name").value;
  const player2Name = document.getElementById("player-2-name").value;
  p1Name.textContent = player1Name;
  p2Name.textContent = player2Name;
  message.textContent = `${player1Name}'s Turn`;
});
