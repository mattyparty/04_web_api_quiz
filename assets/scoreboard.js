var todoInput = document.querySelector("#score-text");
var scoreForm = document.querySelector("#score-form");
var scorelist = document.querySelector("#score-list");


var clearscore = document.querySelector("#clear-score");
var playagain = document.querySelector("#play-again");
var scorestoragex = localStorage.getItem("scorestorage");


var scorearray = [];

init();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  scorelist.innerHTML = "";
  // Render a new li for each todo
  for (var i = 0; i < scorearray.length; i++) {
    var todo = scorearray[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);
    scorelist.appendChild(li);
  }
}

function init() {
  // Get stored todos from localStorage
  // Parsing the JSON string to an object
  var playerscores = JSON.parse(localStorage.getItem("playerstorage"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (playerscores !== null) {
    scorearray = playerscores;
  }

  // Render todos to the DOM
  renderTodos();
}

function storeTodos() {
  // Stringify and set "todos" key in localStorage to todos array
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
    renderTodos();
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
  var todoText = todoInput.value.trim();  
  // Return from function early if submitted name is blank
  if ((todoText === "") || (scorestoragex === ""))  {    
    return;
  }
  // Add new Name to  players array, clear the input
  todoText = todoText + "'s Score : " + scorestoragex;
  scorearray.push(todoText);
  todoInput.value = "";
  // Store updated todos in localStorage, re-render the list
  storeTodos();
  renderTodos();
  //clear scores so user can submit multiple times
   clearscorestorage();
   }

  
  
  

 


