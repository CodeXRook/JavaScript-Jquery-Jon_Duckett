var score1 = 90; //Round 1 score
var score2 = 95; //Round 2 score
var highScore1 = 75; // Round 1 high score
var highScore2 = 95; //Round 2 high score

// Check if score are higher than current high score
var comparison = (score1 + score2) > (highScore1 + highScore2);

// Write the message into the page
var el = document.getElementById('answer');
el.textContent = 'New high score: ' + comparison;