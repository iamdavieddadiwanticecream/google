let score = 0;
let timeLeft = 10;
let gameInterval;
let timerInterval;

// Function to start the game
function startGame() {
  // Reset the score and timer
  score = 0;
  timeLeft = 10;
  document.getElementById('score').textContent = score;
  document.getElementById('timer').textContent = timeLeft;
  document.getElementById('message').textContent = "";

  // Start the timer
  timerInterval = setInterval(function() {
    timeLeft--;
    document.getElementById('timer').textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      document.getElementById('message').textContent = "Game Over! Final Score: " + score;
      document.getElementById('clickButton').disabled = true; // Disable the button when time runs out
    }
  }, 1000);

  // Enable the button
  document.getElementById('clickButton').disabled = false;
}

// Function to handle button click
function buttonClicked() {
  score++;
  document.getElementById('score').textContent = score;
}

// Start the game when the page loads
window.onload = function() {
  startGame();
  document.getElementById('clickButton').onclick = buttonClicked;
};
