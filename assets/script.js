
//-------------------------------
var tElm = document.getElementById("title");
var qElm = document.getElementById("questions");
var alertelment = document.getElementById("alerts");
var scorestorage = localStorage.getItem("scorestorage");
var timeEl = document.querySelector(".time");
var secondsLeft = 100;
var ingamescore = 0;
var scorecard = document.getElementById("scorecard");
//--------High score board-------------
var pos = 0;
var grade = 0;
var questions = [
  {
    title: "Coding Quiz Challenge",
    options: ["Start The Quiz"],
    answer: "Start The Quiz",
  },
  {
    title: "Question 2",
    options: ["Answer a", "Answer b", "Answer c"],
    answer: "Answer a",
  },
  {
    title: "Question 3",
    options: ["Answer 1a", "Answer 2b", "Answer 3c"," Answer 4c"],
    answer: "Answer 1a",
  },
  {
    title: "Question 4",
    options: ["Answer 1a", "Answer 2b", "Answer 3c"],
    answer: "Answer 1a",
  },
  {
    title: "Question 5",
    options: ["Answer 1a", "Answer 2b", "Answer 3c"],
    answer: "Answer 1a",
  },
];
// //-------------------------------

  function moveFoward (evt) 
    
  { 
    if ((questions.length - 1)==(pos)){
      removehighscorelink();
    endscreen();

  } else {
        pos = (pos === (questions.length - 1)) ? 0 : pos + 1;
        removehighscorelink();
        draw();}
   
      };


//this function is called when page loads (Step 1) and on each answer
function draw () {

 
  var deck = questions[pos];
  updateTitle(deck.title);
  updateOptions(deck.options);
  //removealert();
}

//-------------------------------
 qElm.addEventListener('click', optionPicked, false);

//  function delay(){
//    setTimeout(function(){ alert("Hello"); }, 3000);
// }
function optionPicked(evt) {
  var val = evt.target.innerText;
  var deck = questions[pos];

  grade = grade + (10 * ((val === deck.answer) ? 1 : 0));
  localStorage.setItem("scorestorage",grade)
  //start timer on first question
  if (pos===0){setTime()};
  //subtract time on wrong answer
  if( val !== deck.answer){
      subtracttime();
      }
    else {
      ingamescore = ingamescore + 10;
        
    };
   
    
    
      
      moveFoward(); 
   
}

//-------------------------------
//update the questions buttons
function updateTitle (title) {
  tElm.innerText = title;
}
//update the answer buttons
function updateOptions(options) {
  qElm.innerText = '';
  for (var i = 0; i < options.length; i++) {
    var txt = document.createTextNode(options[i]);    
    var btn = document.createElement("button");    
    btn.className = "btn btn-primary btn-lg btn-block";
    btn.appendChild(txt);
    qElm.appendChild(btn);    
  }
}

////timer section is below
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft <= 0) {
      clearInterval(timerInterval);      
      endscreen()
    }

  }, 1000);
}
//subtract time for incorrect questions
function subtracttime(){
    secondsLeft = secondsLeft - 10;
   
}

//end game/ Score page
function endscreen(){


tElm.innerText = "Game Over!";


//remove buttons
qElm.remove();
//remove timers
timeEl.remove();

var btn = document.createElement("button");    
var txt = document.createTextNode("Game Over Click Here");
btn.appendChild(txt);
scorecard.appendChild(btn);
btn.className = "btn btn-primary btn-lg btn-block";
scorecard.addEventListener("click",function(){
  //scoreboard();
document.location.href = "./assets/scoreboard.html";
})


}


function alerttest(){

alertelment.innerText = "Test"

};


function alertremove(){

  alertelment.remove();
  
  }

function removehighscorelink(){
document.getElementById("highscoreslink").hidden = true;

} 

//removehighscorelink();