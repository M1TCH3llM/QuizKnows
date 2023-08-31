// Timer
var secondsLeft = 50;

var timeSec = document.querySelector("#timer");

var start = document.querySelector("#start");

var questionContainer = document.getElementById("quiz");

var startTime = document.querySelector("#startQuiz");

var score = document.querySelector("#score");

var scoreJS = 0;

var questionIndex = 0;

var timerInterval;

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
  {
    question:
      "Which keyword is used to declare a constant variable in JavaScript?",
    choices: ["var", "let", "const", "variable"],
    answer: "const",
  },
  {
    question: "Which built-in method is used to convert a string to uppercase?",
    choices: [
      "toUpperCase()",
      "toUppercase()",
      "upperCase()",
      "toUpperCaseCase()",
    ],
    answer: "toUpperCase()",
  },
  {
    question: "What does the NaN value represent in JavaScript?",
    choices: ["Negative number", "Null value", "Not a Number", "No argument"],
    answer: "Not a Number",
  },
  {
    question:
      "What is the correct way to add a new element to the end of an array?",
    choices: [
      "array.add(item)",
      "array.push(item)",
      "array.append(item)",
      "array.insert(item)",
    ],
    answer: "array.push(item)",
  },
  {
    question:
      "Which operator is used to combine two or more strings in JavaScript?",
    choices: ["&", "+", "*", "/"],
    answer: "+",
  },
  {
    question: "What is the result of the expression '5' + 3?",
    choices: ["8", "53", "35", "NaN"],
    answer: "53",
  },
];

startTime.addEventListener("click", function (event) {
  start.textContent = "";

  shuffleQuestions();
  displayQuestion();
  Timer();
});

function shuffleQuestions() {
  for (let i = question.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [question[i], question[j]] = [question[j], question[i]];
  }
}

function displayQuestion() {
  var currentQuestion = question[questionIndex];
  questionContainer.textContent = "";

  var questionElement = document.createElement("h2");
  questionElement.textContent = currentQuestion.question;
  questionContainer.appendChild(questionElement);

  var choicesList = document.createElement("ul");
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var answersJS = document.createElement("button");
    answersJS.textContent = currentQuestion.choices[i];
    answersJS.addEventListener("click", function (event) {
      var selectedAnswer = event.target.textContent;
      if (selectedAnswer === currentQuestion.answer) {
        scoreJS++;
      } else {
        secondsLeft = secondsLeft - 5;
      }
      score.textContent = "Current Score: " + scoreJS;
      questionContainer.textContent = "";
      questionIndex++;
      if (questionIndex < question.length) {
        currentQuestion = question[questionIndex];
        displayQuestion();
      } else {
        scoreDisplay();
        clearInterval(timerInterval);
        timeSec.textContent = "Time added to score! " + secondsLeft;
      }
    });
    choicesList.appendChild(answersJS);
  }
  questionContainer.appendChild(choicesList);
}

function scoreDisplay() {
  score.textContent = "You Scored " + (scoreJS + secondsLeft) + "!";
  var initialInput = document.createElement("input");
  initialInput.setAttribute("type", "text");
  initialInput.setAttribute("id", "nameInput");
  initialInput.setAttribute("value", "Enter Name!");
  questionContainer.appendChild(initialInput);

  var submitButton = document.createElement("button");
  submitButton.setAttribute("type", "Button");
  submitButton.setAttribute("id", "scoreButton");
  questionContainer.appendChild(submitButton);
  submitButton.textContent = "Submit Score";

  submitButton.addEventListener("click", function () {
    var name = initialInput.value;

    storeScore(name);
  });
}

function Timer() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeSec.textContent = "Times Up In " + secondsLeft;

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      timeSec.textContent = "Time Is Up!";
      questionContainer.innerHTML = "";
      scoreDisplay();
    }
  }, 1000);
}

function storeScore(name) {
  var previousScores = JSON.parse(localStorage.getItem("scores")) || [];
  previousScores.push({ name, score: scoreJS + secondsLeft });
  localStorage.setItem("scores", JSON.stringify(previousScores));

  window.location.assign("HighScore.html");
}
