var defaultBackgroundColor = "#232323";
var numberOfSquares = 6;

var colors = genarateRandomColors(numberOfSquares);
var pickedColor = pickColor();

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easyBtn");
var hardButton = document.getElementById("hardBtn");

resetButton.addEventListener("click", function() {
  resetColors();
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  } 
  messageDisplay.textContent = "";
});

easyButton.addEventListener("click", function() {
  numberOfSquares = 3;
  this.classList.add("selected");
  hardButton.classList.remove("selected");

  resetColors();
  for (var i = 0; i < squares.length; i++) {
    if (i < 3)
      squares[i].style.backgroundColor = colors[i];
    else
      squares[i].style.display = "none";  
  }
});

hardButton.addEventListener("click", function() {
  numberOfSquares = 6;
  this.classList.add("selected");
  easyButton.classList.remove("selected");

  resetColors();
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";  
  }
});

// initial state
resetColors();
for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", colorClickHandler);
}


function resetColors() {
  colors = genarateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = defaultBackgroundColor;
  resetButton.textContent = "New colors";
}  

function colorClickHandler() {
  var selectedColor = this.style.backgroundColor;
  if (selectedColor === pickedColor) {
    messageDisplay.textContent = "Correct!";
    changeColors(pickedColor);
    resetButton.textContent = "Play again?";
  } else {
    this.style.backgroundColor = defaultBackgroundColor;
    messageDisplay.textContent = "Try again";
  }  
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
  h1.style.backgroundColor = color;
}

function genarateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  } 
  return arr;
}

function pickColor() {
  return colors[getRandomNumber(colors.length)];
}

function randomColor() {
  return "rgb(" + 
    getRandomNumber(256) + ", " + 
    getRandomNumber(256) + ", " + 
    getRandomNumber(256) + ")";
}

function getRandomNumber(upperBound) {
  return Math.floor(Math.random() * upperBound); 
}

