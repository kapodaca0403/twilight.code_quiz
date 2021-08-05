// I also need a container that has the quiz questions in it.
// i need a timer , highscore
// and somewhere for the user to add their initials to store their previous scores.

// when clicking the start button, the timer starts
var timerEl = document.querySelector("timer");
var mainEl = document.getElementById("main");
var seconds = 55;

function timer() {
  var time = setInterval(function () {
    seconds--;
    timerEl.textContent = seconds + "Timer";
    if (second === 0) {
      clearInterval(timerEl);
      message();
    }
  }, 1000);
}
function message() {
  timerEl.textContent = "GAME OVER";
}
timer();

//addEventListener. (click)

// li with different answers to choose from
var question1 = " Who is the main character? ";
var question2 = " Who did Bella end up falling in love with? ";
var question3 = " What is Bella's father's name? ";
var question4 = " What was the color of Bella's comforter when she first gets to Forks?";
var question5 = " What animal does Jacob transform into?";

function (question1); {
A. Bella
B. Jacob
C. Charlie 
D. Jasper 
if (A === true) {
  correct();

} else if ( B, C, D === false)
 wrong(); 
}


function (question2); { 
A. Jacob
B. Carlisle
C. Edward 
D. Sam
if (C === true) {
  correct(); 
} else if ( A, B, D === false)
wrong(); 
}

function (question3); {
  A. Sam
  B. Charlie
  C. Seth
  D. Carlisle
if (B === true) {
    correct();
  } else if ( A, C, D === false) {
    wrong(); 
  }
}

function (question4); {
  A. Red
  B. Blue
  C. Pink
  D. Purple
if ( D === true) {
  correct(); 
} else if ( A, B, C === false)
  wrong(); 
}

function (question5); 
{
  A. Werewolf 
  B. Vampire
  C. Hawk
  D. Bear
if (A === true) {
  correct(); 
} else if (B, C, D === false)
  wrong(); 
}



// when a question is answered wrong the timer subtracts time

// when the timer hits zero or all questions are answered then GAME OVER

// when GAME OVER user is able to submit their initials and get their score