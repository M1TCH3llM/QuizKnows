
var scoreList = document.querySelector("#scoreBoard");


var HighScores = JSON.parse(localStorage.getItem("scores")) || [];

HighScores.sort(function(a, b) {
    return b.score - a.score;
})

function scoreBoard() {
    scoreList.textContent = ""

    for (var i = 0; i < HighScores.length; i++){
        var HighScore = HighScores[i]

        var li = document.createElement('li');
        li.textContent = "Name: " + HighScore.name + " Score: " + HighScore.score;
        li.setAttribute("highScore", i);

        scoreList.appendChild(li)

    }
}

scoreBoard();