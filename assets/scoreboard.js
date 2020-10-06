var scoreInput = document.querySelector("#score-text");
var scoreForm = document.querySelector("#score-form");
var scorelist = document.querySelector("#score-list");


var clearscore = document.querySelector("#clear-score");
var playagain = document.querySelector("#play-again");
var scorestoragex = localStorage.getItem("scorestorage");


var scorearray = [];

init();

function renderscores() {
  // Clear scores element and update scorecountspan
  scorelist.innerHTML = "";
  // Render a new li for each score
  for (var i = 0; i < scorearray.length; i++) {
    var scoredata = scorearray[i];

    var li = document.createElement("li");
    li.textContent = scoredata;
    li.setAttribute("data-index", i);
    scorelist.appendChild(li);
  }
}

function init() {
  // Get stored scores from localStorage
  // Parsing the JSON string to an object
  var playerscores = JSON.parse(localStorage.getItem("playerstorage"));

  // If scores were retrieved from localStorage, update the scores array to it
  if (playerscores !== null) {
    scorearray = playerscores;
  }

  // Render scores to the DOM
  renderscores();
}

function storeScores() {
  // Stringify playerstorage
  localStorage.setItem("playerstorage", JSON.stringify(scorearray));
}

// When form is submitted...
scoreForm.addEventListener("submit", function(event) {
  //put all event handling in a separate function
  scoreboardinput(event)
 
});

function clearscores(){
  scorearray = [];
    localStorage.setItem("playerstorage", JSON.stringify(scorearray));
    renderscores();
 }
clearscore.addEventListener("click",function(){
clearscores();
clearscorestorage();
;})

function clearscorestorage(){
  scorestoragex = "";
  localStorage.setItem("scorestorage", JSON.stringify(scorestoragex))

};

function scoreboardinput(event){ 
  event.preventDefault();  
  var scoreText = scoreInput.value.trim();  
  // Return from function early if submitted name is blank
  if ((scoreText === "") || (scorestoragex === ""))  {    
    return;
  }
  // Add new Name to  players array, clear the input
  scoreText = scoreText + "'s Score : " + scorestoragex;
  scorearray.push(scoreText);
  scoreInput.value = "";
  // Store updated player scores in localStorage, re-render the list
  storeScores();
  renderscores();
  //clear scores so user can submit multiple times
   clearscorestorage();
   }

  
  
  

 


