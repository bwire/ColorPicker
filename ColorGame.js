(
  function () {
    var colorGame = {
      defaultBackgroundColor: "#232323",
      numberOfSquares: 6,
      colors: [],
      pickedColor: "",
      selectors: {
        h1: document.querySelector("h1"),
        squares: document.querySelectorAll(".square"),
        colorDisplay: document.getElementById("colorDisplay"),
        messageDisplay: document.getElementById("message"),
        resetButton: document.getElementById("reset"),
        modeButtons: document.querySelectorAll(".mode") 
      }, 

      setUpModeButtons: function() {
        for (var i = 0; i < this.selectors.modeButtons.length; i++) {
          this.selectors.modeButtons[i].addEventListener("click", (function() {
            game = this;
            return function() {
              for (var j = 0; j < game.selectors.modeButtons.length; j++) {
                game.selectors.modeButtons[j].classList.remove("selected");    
              }
              this.classList.add("selected"); 
              this.textContent === "Easy" ? game.numberOfSquares = 3 : game.numberOfSquares = 6;
              game.resetColors(); 
            }
          }).call(this));
        };
      },

      setUpResetButton: function() {
        this.selectors.resetButton.addEventListener("click", (function() {
          game = this;
          return function() {
            game.resetColors();
          }
        }).call(this));
      },

      setUpSquareButtons: function() {
        for (var i = 0; i < this.selectors.squares.length; i++) {
          this.selectors.squares[i].addEventListener("click", this.colorClickHandler.call(this));
        };
      },

      resetColors: function() {
        this.colors = this.genarateRandomColors(this.numberOfSquares);
        this.pickedColor = this.pickColor();
        this.selectors.colorDisplay.textContent = this.pickedColor;
        this.selectors.h1.style.backgroundColor = "steelblue";
        this.selectors.resetButton.textContent = "New colors";

        for (var i = 0; i < this.selectors.squares.length; i++) {
          if (this.colors[i]) {
            this.selectors.squares[i].style.backgroundColor = this.colors[i]; 
            this.selectors.squares[i].style.display = "block";  
          } else {
            this.selectors.squares[i].style.display = "none";  
          }
        }
      },  

      colorClickHandler: (function(game) {
        game = this;
        return function() {
          var selectedColor = this.style.backgroundColor;
          if (selectedColor === game.pickedColor) {
            game.selectors.messageDisplay.textContent = "Correct!";
            game.changeColors(game.pickedColor);
            game.selectors.resetButton.textContent = "Play again?";
          } else {
            this.style.backgroundColor = game.defaultBackgroundColor;
            game.selectors.messageDisplay.textContent = "Try again";
          }  
        }  
      }), 

      changeColors: function(color) {
        for (var i = 0; i < this.selectors.squares.length; i++) {
          this.selectors.squares[i].style.backgroundColor = color;
        }
        this.selectors.h1.style.backgroundColor = color;
      },

      genarateRandomColors: function(num) {
        var arr = [];
        for (var i = 0; i < num; i++) {
          arr.push(this.randomColor());
        } 
        return arr;
      },

      pickColor: function() {
        return this.colors[this.getRandomNumber(this.colors.length)];
      },

      randomColor: function() {
        return "rgb(" + 
          this.getRandomNumber(256) + ", " + 
          this.getRandomNumber(256) + ", " + 
          this.getRandomNumber(256) + ")";
      },

      getRandomNumber: function(upperBound) {
        return Math.floor(Math.random() * upperBound); 
      } 
    };

    colorGame.start = function() {
      this.setUpModeButtons();
      this.setUpResetButton();
      this.setUpSquareButtons();
      this.resetColors();
    };

    colorGame.start();
  }
)()

