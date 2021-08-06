// I also need a container that has the quiz questions in it.
// i need a timer , highscore
// and somewhere for the user to add their initials to store their previous scores.

// when clicking the start button, the timer starts

var timerEl = document.querySelector("timerEl");
var mainEl = document.getElementById("main");
var seconds = 0;
var scoresDis = document.querySelector("card")
var quizEl = document.getElementById("quiz");
var startQuizEl = document.getElementById("startQuiz");
var scores = document.getElementById("score");
var choicesEl = document.querySelector("choices")

var questionIndex = 0; 

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


//addEventListener. (click)

// li with different answers to choose from



var question1 = " Who is the main character? ";
var question2 = " Who did Bella end up falling in love with? ";
var question3 = " What is Bella's father's name? ";
var question4 = " What was the color of Bella's comforter when she first gets to Forks?";
var question5 = " What animal does Jacob transform into?";

var questions = [{
questionsNum: "question1", 
text: " Who is the main character? ",
answers: ["A. Bella", "B. Jacob", "C. Charlie", "D. Jasper"],
correctAn: "A. Bella"
}, //create each question object 


]

function startquiz() {
seconds= 55;
questionIndex = 0;
scoresDis.setAttribute("style", "display: none")
mainEl.setAttribute("style", "display: block")
timer()
timerEl.textContent = seconds
getQuestion()


}


function getQuestion(); {
var question1 = questions[questionIndex]
var texQues = document.getElementById("question")
textQues.textContent = question1.text
choicesEl = ""
question1.answers.forEach( function (answer) {
  var answerbttn = document.createElement("button")
  answerbttn.setAttribute("class", "answer")
  answerbttn.textContent = answer
  choicesEl.appendChild(answerbttn)
  answerbttn.addEventListener("click", answerclick) //write answer click function, that compares answers that is definded in question object 
});
}


function getQuestion2 (); { 
A. Jacob
B. Carlisle
C. Edward 
D. Sam
if (C === true) {
  correct(); 
} else if ( A, B, D === false)
wrong(); 
}

function getQuestion3(); {
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

function getQuestion4(); {
  A. Red
  B. Blue
  C. Pink
  D. Purple
if ( D === true) {
  correct(); 
} else if ( A, B, C === false)
  wrong(); 
}

function getQuestion5(); 
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
getQuestion1(); 
getQuestion2(); 
getQuestion3(); 
getQuestion4(); 
getQuestion5(); 

timerEl.setAttribute("style", "display: none")
scoresDis.setAttribute("style", "display: none")



startQuizEl.addEventListener("click", startquiz)

// when a question is answered wrong the timer subtracts time
// reset timer , if correct then correct
// advance current question index 
// if questionindex is equal to lenght, then end of quiz or start next funtion

// when the timer hits zero or all questions are answered then GAME OVER

// when GAME OVER user is able to submit their initials and get their score into local storage 