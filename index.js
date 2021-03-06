// Create variables for the game state
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;
let p2Local = "";
let p1Local = "";

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
const pipTemplate = `<span class="pip></span>`;

function btnVisibilityToggle() {
  rollBtn.style.display = "none";
  resetBtn.style.display = "block";
}

function scoreSync() {
  p1Score.textContent = player1Score;
  p2Score.textContent = player2Score;
}

function diceClass1() {
  p2Dice.classList.remove("active");
  p1Dice.classList.add("active");
}

function diceClass2() {
  p2Dice.classList.add("active");
  p1Dice.classList.remove("active");
}

function reset() {
  player1Score = 0;
  player2Score = 0;
  scoreSync();
  firstTurn();
  p1Dice.innerHTML = "";
  p2Dice.innerHTML = "";
  rollBtn.style.display = "block";
  resetBtn.style.display = "none";
  document.getElementById("overlay").style.display = "block";
  p1Local = "";
  p2Local = "";
}

//each player separate diceroll to populate pips on dice
function p1DiceRoll() {
  p1Dice.innerHTML = "";
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  for (let i = 0; i < diceRoll; i++) {
    p1Dice.innerHTML += `<span class="pip"></span>`;
  }
  player1Score += diceRoll;
  scoreSync();
  diceClass2();
}

function p2DiceRoll() {
  p2Dice.innerHTML = "";
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  for (let i = 0; i < diceRoll; i++) {
    p2Dice.innerHTML += `<span class="pip"></span>`;
  }
  player2Score += diceRoll;
  scoreSync();
  diceClass1();
}

//randomize first turn
function firstTurn() {
  const coinFlip = Math.floor(Math.random() * 2) + 1;
  coinFlip > 1
    ? ((player1Turn = false), diceClass2())
    : ((player1Turn = true), diceClass1());
  player1Turn
    ? (message.textContent = `${p1Local}'s Turn`)
    : (message.textContent = `${p2Local}'s Turn`);
}

// modal button
document.getElementById("close-modal").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "none";
  const player1Name = document.getElementById("player-1-name").value;
  const player2Name = document.getElementById("player-2-name").value;
  p1Name.textContent = player1Name;
  p2Name.textContent = player2Name;
  p1Local = player1Name;
  p2Local = player2Name;
  firstTurn();
});

// 3. Switch the turn back to the other player

// 1. Display the dice number instead of logging it out
// 2. Use the 'active' class to show which player's turn it is
// Hint: use the .classList.remove() and classlist.add() methods
// 3. Update the "message" DOM node so that it states who's turn it is

// 1. Check if a player has won. If so, change the message to "Player X has won!"
// 2. Hide the Roll Dice Button and show the Reset Button. Hint: use display none/block

rollBtn.addEventListener("click", function () {
  player1Turn
    ? (p1DiceRoll(),
      player1Score >= 20
        ? ((message.textContent = `${p1Local} has won! ????`),
          btnVisibilityToggle())
        : (message.textContent = `${p2Local}'s Turn`))
    : (p2DiceRoll(),
      player2Score >= 20
        ? ((message.textContent = `${p2Local} has won! ????`),
          btnVisibilityToggle())
        : (message.textContent = `${p1Local}'s Turn`));
  player1Turn = !player1Turn;
});

// 1. Hook a click event listener up with the Reset Button
// 2. Create a reset() function that resets the game
// 3. Invoke the reset() function when the Reset Button is clicked

resetBtn.addEventListener("click", function () {
  reset();
});
