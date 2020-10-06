
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
    title: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
    options: ["last()", "put()", "push()","None of the above"],
    answer: "push()",
  },
  {
    title: "Which built-in method reverses the order of the elements of an array?",
    options: ["changeOrder(order)", "reverse()", "sort(order)","None of the above"],
    answer: "reverse()",
  },
  {
    title: "Which of the following function of String object returns the characters in a string between two indexes into the string?",
    options: ["slice()", "split()", "substr()","substring()"],
    answer: "substring()",
  },
  {
    title: "Which of the following function of String object returns the calling string value converted to upper case?",
    options: ["toUpperCase()", "toString()", "toLocaleUpperCase()","substring()"],
    answer: "toUpperCase()",
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