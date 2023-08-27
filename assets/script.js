// Timer

var timeEl = document.querySelector("#timer");

var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
     timeEl.textContent = "Times Up In " + secondsLeft;
     
    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        timeEl.textContent = "Time Is Up!";
    }
  }, 1000);
}

console.log(timeEl);

setTime();
