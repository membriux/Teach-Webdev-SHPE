
//Board Squares will be stored in an array
const boardSquares = []

//We want to keep track of the current player
var player = "x"

//Keeps track of the number of turns taken
var turn = 0

//Want to know whenever the game is running
var running = true

//Each square on the board is an object of the BoardSquare class
class BoardSquares {
  constructor(element) {
    this.element = element;
    this.element.addEventListener("click", this, false);
    this.match = false;
    this.choice = null;
    this.element.style.fontFamily = "Manjari";
  }

  //Restarts the game
  reset() {
    this.choice = null;
    this.match = false
    this.element.querySelector(".face-container").querySelector(".facedown").innerHTML = ''
    running = true;
    player = "x";
    document.getElementById("winner").innerHTML = "<br>";
    document.getElementById("reset-button").disabled = true;
    canvas.clearRect(0,0,document.getElementById("gameboard").clientHeight,document.getElementById("gameboard").offsetWidth);
    document.getElementById("myCanvas").hidden = true;
  }

  //Checks every single possiblilty for a win whenever there have been more then 4 turn taken
  //Calls drawLine function to draw a line
  checkForWinner(){
    if (turn >= 4) {
      var x;
      if (this.choice == "x") {
        canvas.strokeStyle = "#E93636";
      }

      else {
        canvas.strokeStyle = "#4C4CEE";
      }

      for (var i = 0;i<3; i++) {
        x = i*3
        if (boardSquares[x].choice ==
          this.choice && boardSquares[x+1].choice == this.choice && boardSquares[x+2].choice == this.choice) {
          this.match = true;
          this.draw = {
            "rightX": .11,
            "rightY": .14+(i)*(.333),
            "leftX": .89,
            "leftY": .14+(i)*(.333)
          };
          this.drawLine();
        }
      }

      for (var i = 0;i<3;i++) {
        if (boardSquares[i].choice ==
          this.choice && boardSquares[i+3].choice == this.choice && boardSquares[i+6].choice == this.choice) {
          this.match = true;
          this.draw = {
            "rightX": .168+(i)*(.333),
            "rightY": .064,
            "leftX": .168+(i)*(.333),
            "leftY": .89
          };
          this.drawLine();
        }
      }

      if (boardSquares[0].choice == this.choice && boardSquares[4].choice == this.choice && boardSquares[8].choice == this.choice){
        this.match = true;
        this.draw = {
          "rightX": .108,
          "rightY": .067,
          "leftX": .897,
          "leftY": .883
        };
        this.drawLine();
      }

      else if (boardSquares[2].choice == this.choice && boardSquares[4].choice == this.choice && boardSquares[6].choice == this.choice){
        this.match = true;
        this.draw = {
          "rightX": .897,
          "rightY": .067,
          "leftX": .108,
          "leftY": .883
        }
        this.drawLine()
      }

      if (this.match) {
        document.getElementById("myCanvas").hidden = false;
        document.getElementById("winner").innerHTML = "Winner is: " + player.toUpperCase();
        document.getElementById("reset-button").disabled = false;
        running = false;
      }
    }
  }

  //Checks whether the game ended in a draw
  checkForDraw() {
    if (turn == 8 && this.match == false) {
      document.getElementById("winner").innerHTML = "The game ended in a draw";
      document.getElementById("reset-button").disabled = false;
      running = false;
    }
  }

  //Handles all events that take place on each square
  handleEvent(event) {
    switch (event.type) {

      //When player clicks on square, calls selectSquare function
      case "click":
      if (running) {
        if (player == "x" && this.choice == null) {
          this.selectSquare("x","#E93636","o");
        }
        else if (player == "o" && this.choice == null) {
          this.selectSquare("o","#4C4CEE","x")
        }
      }
    }
  }

  //Draws a line on canvas according to values passed in
  drawLine(){
    for (var index in this.draw){
      this.draw[index] = this.fracToPixel(this.draw[index])
    }
    canvas.beginPath();
    canvas.moveTo(this.draw["rightX"],this.draw["rightY"]);
    canvas.lineTo(this.draw["leftX"],this.draw["leftY"]);
    canvas.stroke();
  }

  //Changes the text on the square
  selectSquare(currPlayer, color,nxtPlayer ){
    this.element.querySelector(".face-container").querySelector(".facedown").innerHTML = '<p>'+currPlayer.toUpperCase()+'</p>';
    this.element.querySelector(".face-container").querySelector(".facedown").style.color = color;
    this.choice = currPlayer;
    this.checkForWinner();
    this.checkForDraw();
    player = nxtPlayer
    turn ++;
  }

  //Converts fraction to pixel
  fracToPixel(frac){
    return frac*c.width
  }
}

//event listener for the reset button
document.getElementById("reset-button").addEventListener('click', () => {
  resetGame();
  turn = 0;
});

//called on by event listener for reset button
//iterates thorought boardSquares array resetting each square one at a time
function resetGame() {
  boardSquares.forEach((square)=> {
    square.reset()
  });
}

//––––––––– Function for adding all the squares onto the Board ––––––––
//Adds boardsquare divs as well as the canvas div following all squares
function generateHTMLBoardSquares(){
  const boardElement = document.getElementById('gameboard');
  htmlChange = ''
  for (var i = 0; i<9;i++) {
    htmlChange += `<div class="col-4 board-square ">
                    <div class="face-container">
                      <div class="facedown text-center">
                      </div>
                    </div>
                  </div>`
  }
  htmlChange += `<canvas id="myCanvas" hidden></canvas>`
  boardElement.innerHTML = htmlChange;

}

//Creates a canvas sizing it depending on the window size
//returns the canvas HTML as well as the canvas object
function createCanvas() {
  var c = document.getElementById("myCanvas");
  if (window.innerWidth < 400){
    c.width = 300;
    c.height = 300;
  }
  else{
    c.width = 370;
    c.height = 370;
  }
  canvas = c.getContext("2d");
  canvas.lineWidth = 6;
  return [c, canvas]
}

//calls the generate squares function, creates a canvas, pushes each square to the boardsuares array, returns the canvas
function setupGame(){
  generateHTMLBoardSquares();
  var [c,canvas] = createCanvas();


  const squareElements = document.getElementsByClassName("board-square");

  for (var i = 0; i<squareElements.length; i++) {
    const element = squareElements[i];
    const square = new BoardSquares(element);
    boardSquares.push(square);
  }
  return [c,canvas]
}

/*
//Resizes the size of the canvas whenever the window width become smaller than 400px
//Whenever the canvas size changes, the canvas clears
setInterval(function(){
  window.onresize = function(){
    if (window.innerWidth < 400){
      c.width = 300;
      c.height = 300;
    }
    else{
      c.width = 370;
      c.height = 370;
    }
  }
}, 100);
*/

//starts the game, also allows the canvas HTML and the canvas object to be a global variable
var [c,canvas] = setupGame();
