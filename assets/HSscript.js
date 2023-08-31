// assigns global variables for this page
var scoreList = document.querySelector("#scoreBoard");
// coverts scores into objects and assigns them to highscore variable
var HighScores = JSON.parse(localStorage.getItem("scores")) || [];

// sorts high scores from highest to lowest
HighScores.sort(function (a, b) {
  return b.score - a.score;
});
// function to display scores
function scoreBoard() {
  // clears text
  scoreList.textContent = "";
  // for loop to display scores
  for (var i = 0; i < HighScores.length; i++) {
    var HighScore = HighScores[i];
    //creates list item to append to score list
    var li = document.createElement("li");
    //adds score and name to list item
    li.textContent = "Name: " + HighScore.name + " Score: " + HighScore.score;
    // sets attributes to list items
    li.setAttribute("highScore", i);
    li.setAttribute("id", "userScore");
    // appends li to score board
    scoreList.appendChild(li);
  }
}
// triggers function
scoreBoard();
