// Timer

var timeSec = document.querySelector("#timer");

var start = document.querySelector("#start");

var startTime = document.querySelector("#startQuiz");

var score = document.querySelector("#score");

var scoreJS = 0;

var questionIndex = 0;

// need this to update for every question
score.textContent = "Current Score: " + scoreJS;

startTime.addEventListener("click", function (event) {
  start.textContent = "";

  displayQuestion();
  Timer();
});

var question = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<javascript>", "<scripting>", "<js>", "<script>"],
    answer: "<script>",
  },
  {
    question: "separates javascript statements at the end of every statement?",
    choices: [";", ":", ".", "/"],
    answer: ";",
  },
  {
    question: "What order are JavaScript elements executed in?",
    choices: [
      "Bottom to Top",
      "Top to Bottom",
      "the order you chose",
      "None of the above",
    ],
    answer: "Top to Bottom",
  },
  {
    question: "How do you leave a line comment?",
    choices: ["''", "*/", "##", "//"],
    answer: "//",
  },
  {
    question: "How would you declare a variable?",
    choices: ["var", "const", "if", "let"],
    answer: "var",
  },
  {
    question: "What is a text value called",
    choices: ["string", "alphanumeric", "boolian", "letters"],
    answer: "string",
  },
  {
    question: "What do use to assign a value to a variable",
    choices: ["!==", "===", "=", "None of the above"],
    answer: "=",
  },
  {
    question:
      "When a variable is out side of a function what is it refired to as?",
    choices: ["Worldly", "Global", "Universal", "Local"],
    answer: "Global",
  },
];

function displayQuestion() {
  var currentQuestion = question[questionIndex];
  var questionContainer = document.getElementById("quiz");
  questionContainer.textContent = "";

  var questionElement = document.createElement("h2");
  questionElement.textContent = currentQuestion.question;
  questionContainer.appendChild(questionElement);

  var choicesList = document.createElement("ul");
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var answersJS = document.createElement("li");
    answersJS.textContent = currentQuestion.choices[i];
    answersJS.addEventListener("click", function (event) {
      var selectedAnswer = event.target.textContent;
      if (selectedAnswer === currentQuestion.answer) {
        scoreJS++;
      }
      questionContainer.textContent = "";
      questionIndex++;
      if (questionIndex < question.length) {
        currentQuestion = question[questionIndex];
        displayQuestion();
      } else {
        score.textContent = "You Scored " + scoreJS + "!";
      }
    });

    choicesList.appendChild(answersJS);
  }
  questionContainer.appendChild(choicesList);
}

function Timer() {
  var secondsLeft = 60;
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeSec.textContent = "Times Up In " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      timeSec.textContent = "Time Is Up!";
    }
  }, 1000);
}
