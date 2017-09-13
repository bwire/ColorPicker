var defaultBackgroundColor = "#232323";

var colors = genarateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");

resetGame(true);

resetButton.addEventListener("click", resetGame);

function resetGame(initGame) {
  colors = genarateRandomColors(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    if (initGame) {
      squares[i].addEventListener("click", colorClickHandler);
    }
  }
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

