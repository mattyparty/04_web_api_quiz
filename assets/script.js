
//-------------------------------
var tElm = document.getElementById("title");
var qElm = document.getElementById("questions");
var scorestorage = localStorage.getItem("scorestorage")
var timeEl = document.querySelector(".time");
var secondsLeft = 100;

// var prev = document.getElementById('prev');
// var next = document.getElementById('next');

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


//-------------------------------




// //-------------------------------
// prev.addEventListener('click', moveBackwards, false);
// next.addEventListener('click', moveFoward, false);

function moveFoward (evt) {
  pos = (pos === (questions.length - 1)) ? 0 : pos + 1;
  draw();
}

// function moveBackwards(evt) {
//   pos = (pos === 0) ? questions.length - 1 : pos - 1;
//   draw();
// }

//this function is called when page loads (Step 1)
function draw () {
  var deck = questions[pos];
  
  updateTitle(deck.title);
  updateOptions(deck.options);
}

//-------------------------------
 qElm.addEventListener('click', optionPicked, false);

function optionPicked(evt) {
  var val = evt.target.innerText;
  var deck = questions[pos];

  grade = grade + (10 * ((val === deck.answer) ? 1 : 0));
  localStorage.setItem("sscorestorage",grade)
  moveFoward();
}

//-------------------------------
function updateTitle (title) {
  tElm.innerText = title;
}



function updateOptions(options) {
  qElm.innerText = '';
  for (var i = 0; i < options.length; i++) {
    var txt = document.createTextNode(options[i]);    
    var btn = document.createElement("button");    
    btn.appendChild(txt);
    qElm.appendChild(btn);
    
  }
}

function writetoscoreboard (){



}

////timer sectio is below
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      //Need to modify this to end game/then scrore
      sendMessage();
    }

  }, 1000);
}

function subtracttime(){
    secondsLeft = secondsLeft - 10
}

// this will start the time when the game beings
setTime();

