var colors = genarateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function() {
    var selectedColor = this.style.backgroundColor;
    if (selectedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(pickedColor);
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try again";
    }
  })
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
  return colors[getRandomNumber(colors.length) + 1];
}

function randomColor() {
  var r = getRandomNumber(256);
  var g = getRandomNumber(256);
  var b = getRandomNumber(256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function getRandomNumber(upperBound) {
  return Math.floor(Math.random() * upperBound); 
}

