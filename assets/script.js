// Timer

var timeSec = document.querySelector("#timer");

var start = document.querySelector("#start");

var startTime = document.querySelector("#startQuiz");

var score = document.querySelector("#score");

startTime.addEventListener("click", function (event) {
  var element = event.target;
  start.textContent = "";

  displayQuestion();
  Timer();
});

var question = [
  {
    question: "question1",
    choices: ["red", "green", "blue", "yellow"],
    answer: "red",
  },
  {
    question: "question2",
    choices: ["red", "green", "blue", "yellow"],
    answer: "blue",
  },
];

function displayQuestion() {
  var currentQuestion = question[0];
  var questionContainer = document.getElementById("quiz");

  var questionElement = document.createElement("h2");
  questionElement.textContent = currentQuestion.question;
  questionContainer.appendChild(questionElement);

  var choicesList = document.createElement("ul");
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var answersJS = document.createElement("li");
    answersJS.textContent = currentQuestion.choices[i];
    choicesList.appendChild(answersJS);
  }
  questionContainer.appendChild(choicesList);
}

function Timer() {
  var secondsLeft = 61;
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeSec.textContent = "Times Up In " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      timeSec.textContent = "Time Is Up!";
    }
  }, 1000);
}

// questions

// const quizQuestions = [
//   {
//     question: "who invented javaScript?",
//     answers: ["Douglas Adams", "George Forman", "Brendon Eich", "John Lock"],
//     correctChoice: "Brendon Eich",
//   },
// ];
