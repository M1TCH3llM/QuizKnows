// Variables

// seconds left in game
var secondsLeft = 50;

var timeSec = document.querySelector("#timer");
var start = document.querySelector("#start");
var questionContainer = document.getElementById("quiz");
var startTime = document.querySelector("#startQuiz");
var score = document.querySelector("#score");
var scoreJS = 0;
var questionIndex = 0;
var timerInterval;

// questions in an objects array
var question = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    // choices in the form of am array of strings
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

// functions section

// listening for start click
startTime.addEventListener("click", function (event) {
  start.textContent = "";

  // triggers shuffleQuestions, displayQuestions, and Time functions
  shuffleQuestions();
  displayQuestion();
  Timer();
});

// function that uses Fisher- Yates algorithm to shuffle questions
function shuffleQuestions() {
  for (let i = question.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [question[i], question[j]] = [question[j], question[i]];
  }
}

// function that displays questions
function displayQuestion() {
  // sets var for question
  var currentQuestion = question[questionIndex];
  // clears question container in HTML
  questionContainer.textContent = "";
  // creates h2 element for question objects, question
  var questionElement = document.createElement("h2");
  //displays question in html
  questionElement.textContent = currentQuestion.question;
  // attaches h2 to question container in html
  questionContainer.appendChild(questionElement);

  // creates var for ul to append to question header 2
  var choicesList = document.createElement("ul");
  // for loop that allowes all choices to be displayed as a button
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    // creates button
    var answersJS = document.createElement("button");
    // fills buttons with txt for answers
    answersJS.textContent = currentQuestion.choices[i];
    // adds listener for click on answer button
    answersJS.addEventListener("click", function (event) {
      // targets selected answer and makes variable
      var selectedAnswer = event.target.textContent;
      //compares selected answer to correct answer
      if (selectedAnswer === currentQuestion.answer) {
        // if same adds points to score
        scoreJS++;
      } else {
        // else if wrong (not equal to answer) subtracts time
        secondsLeft = secondsLeft - 5;
      }
      // displays scores
      score.textContent = "Current Score: " + scoreJS;
      //clears questions before advanving
      questionContainer.textContent = "";
      //advances to next question
      questionIndex++;
      //if function that verifys there will be another question
      if (questionIndex < question.length) {
        //calls next question
        currentQuestion = question[questionIndex];
        // calls function to display
        displayQuestion();
      } else {
        // triggers score function if their are no more questions
        scoreDisplay();
        // stops timer function
        clearInterval(timerInterval);
        //display's time left
        timeSec.textContent = "Time added to score! " + secondsLeft;
      }
    });
    // appends answer buttons to ul choices
    choicesList.appendChild(answersJS);
  }
  // appends ul choices to question container
  questionContainer.appendChild(choicesList);
}
//displays score and score submit information
function scoreDisplay() {
  // displays score total
  score.textContent = "You Scored " + (scoreJS + secondsLeft) + "!";
  // creates variable for input box
  var initialInput = document.createElement("input");
  // sets box type to text
  initialInput.setAttribute("type", "text");
  // sets id of #nameInput
  initialInput.setAttribute("id", "nameInput");
  // sets value text enter name
  initialInput.setAttribute("placeholder", "Enter Name!");
  // makes it a child of the question container
  questionContainer.appendChild(initialInput);

  //create variable for submit button
  var submitButton = document.createElement("button");
  //set element type button
  submitButton.setAttribute("type", "Button");
  //sets id to scoreButton
  submitButton.setAttribute("id", "scoreButton");
  //appends button as child to question container
  questionContainer.appendChild(submitButton);
  //puts submit score in text in button
  submitButton.textContent = "Submit Score";
  // listens for submit button click
  submitButton.addEventListener("click", function () {
    // creates variable called name for string typed into back
    var name = initialInput.value;
    // triggers storeScore function and passes variable name to function
    storeScore(name);
  });
}
//function that operates timer
function Timer() {
  // sets verbile timeInterval equal to function
  timerInterval = setInterval(function () {
    //subtracts seconds
    secondsLeft--;
    //applies time left to html tag
    timeSec.textContent = "Times Up In " + secondsLeft;
    // if statement to stop time when secondsLeft = 0
    if (secondsLeft <= 0) {
      //clears time interval
      clearInterval(timerInterval);
      //applies times up to html
      timeSec.textContent = "Time Is Up!";
      //clears questions when time is up
      questionContainer.innerHTML = "";
      // triggers score display function
      scoreDisplay();
    } // ms count
  }, 1000);
}
// function to push scores to local memory
function storeScore(name) {
  //retrieves  scores from local memory or pulls nothing
  var previousScores = JSON.parse(localStorage.getItem("scores")) || [];
  //targets items to push to memory
  previousScores.push({ name, score: scoreJS + secondsLeft });
  //sends items to local memory as string
  localStorage.setItem("scores", JSON.stringify(previousScores));

  //assigns local storage to be accessed by high score page
  window.location.assign("HighScore.html");
}
