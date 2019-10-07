
/*
Order:
- Let/Var variables
- BoardSquares class
- Setup functions
- Game logic
- SetupGame() call
*/


//Board Squares will be stored in an array
const boardSquares = []

//We want to keep track of the current player
var player = "x"

//Keeps track of the number of turns taken
var turn = 0

//Want to know whenever the game is running
var running = true


// Generates squares for the board game
function setupGame() {
  generateHTMLBoardSquares();

  const squareElements = document.getElementsByClassName("board-square");

  for (var i = 0; i < squareElements.length; i++) {
    const element = squareElements[i];
    const square = new BoardSquares(element);
    boardSquares.push(square);
  }
}


//––––––––– TODO: Function for adding all the squares onto the Board ––––––––
//Adds boardsquare divs as well as the canvas div following all squares
function generateHTMLBoardSquares(){
  const boardElement = document.getElementById('gameboard');
  sqrHtml = ''
  for (var i = 0; i<9;i++) {
    sqrHtml += `<div class="col-4 board-square ">
                    <div class="face-container">
                      <div class="facedown text-center">
                      </div>
                    </div>
                  </div>`
  }
  sqrHtml += `<canvas id="myCanvas" hidden></canvas>`
  boardElement.innerHTML = sqrHtml;
}

// Called when reset button is clicked
// Resets all the board squares of the game
function resetGame() {
  boardSquares.forEach((square)=> {
    square.reset()
  });
}

// event listener for the reset button
document.getElementById("reset-button").addEventListener('click', () => {
  resetGame();
  turn = 0;
});


/*
Each square on the board is an object of the BoardSquare class
This will allow us to manipulate the objects whenever they are clicked
*/
class BoardSquares {
  constructor(element) {
    this.element = element;
    this.element.addEventListener("click", this, false);
    this.match = false;
    this.choice = null;
    this.element.style.fontFamily = "Manjari";
  }

  /*
  Checks every single possiblilty for a win whenever there have been more then 4 turn taken
  Calls drawLine function to draw a line
  */
  checkForWinner(){
    if (turn >= 4) {
      var x;

      // Check rows and columns
      this.checkSides()

      if (this.match) {
        document.getElementById("winner").innerHTML = "Winner is: " + player.toUpperCase();
        document.getElementById("reset-button").disabled = false;
        running = false;
      }
    }
  }

  /* TODO:
    Check all the sides (i.e. Horizontal, vertical, diagonal)
    to see if any of the players won already
  */
  checkSides(){
    let sides = [[0,3,6], [1,4,7], [2,5,8], // Vertical Check
                 [0,1,2], [3,4,5], [6,7,8], // Horizontal check
                 [0,4,8], [2,4,6]]          // Diagonal Check

    // Check vertical sides
    for (var i = 0; i < sides.length; i++) {

        let sqrs = sides[i]

        let s1 = boardSquares[sqrs[0]].choice
        let s2 = boardSquares[sqrs[1]].choice
        let s3 = boardSquares[sqrs[2]].choice

        if (s1 != null && s1 == s2 && s1 == s3) {
            this.match = true;
            this.changeSquareWin(sqrs);
            return
          }
      }

  }

  /* TODO: Check for Draw
  Checks whether the game ended in a draw
  */
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

  //Adds a yellow color to the square where a match occured
  changeSquareWin(squares){
    squares.forEach((square)=>{
      boardSquares[square].element.style.backgroundColor = "#F7DC6F";
    });
  }

  // Changes the text on the square
  selectSquare(currPlayer, color,nxtPlayer ){
    this.element.querySelector(".face-container").querySelector(".facedown").innerHTML = '<p>'+currPlayer.toUpperCase()+'</p>';
    this.element.querySelector(".face-container").querySelector(".facedown").style.color = color;
    this.choice = currPlayer;
    this.checkForWinner();
    this.checkForDraw();
    player = nxtPlayer
    turn ++;
  }

  //Restarts the game
  reset() {
    this.choice = null;
    this.match = false
    this.element.querySelector(".face-container").querySelector(".facedown").innerHTML = '';
    this.element.style.backgroundColor = "#fff";
    running = true;
    player = "x";
    document.getElementById("winner").innerHTML = "<br>";
    document.getElementById("reset-button").disabled = true;
    document.getElementById("myCanvas").hidden = true;
  }

}


// Launch game
setupGame();
