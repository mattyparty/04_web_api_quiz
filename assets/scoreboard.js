var todoInput = document.querySelector("#score-text");
var scoreForm = document.querySelector("#score-form");
var todoList = document.querySelector("#todo-list");
var clearscore = document.querySelector("#clear-score");
var playagain = document.querySelector("#play-again");
var scorestoragex = localStorage.getItem("scorestorage");


var todos = [];

init();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);
    todoList.appendChild(li);
  }
}

function init() {
  // Get stored todos from localStorage
  // Parsing the JSON string to an object
  var storedTodos = JSON.parse(localStorage.getItem("todos"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedTodos !== null) {
    todos = storedTodos;
  }

  // Render todos to the DOM
  renderTodos();
}

function storeTodos() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("todos", JSON.stringify(todos));
}

// When form is submitted...
scoreForm.addEventListener("submit", function(event) {
  //put all event handling in a separate function
  scoreboardinput(event)
 
});

function clearscores(){
    todos = [];
    localStorage.setItem("todos", JSON.stringify(todos));
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
  todos.push(todoText);
  todoInput.value = "";
  // Store updated todos in localStorage, re-render the list
  storeTodos();
  renderTodos();
  //clear scores so user can submit multiple times
   clearscorestorage();
   }

  
  
  

 


