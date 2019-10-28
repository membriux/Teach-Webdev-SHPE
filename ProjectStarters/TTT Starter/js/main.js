
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
    return
}

// Called when reset button is clicked
// Resets all the board squares of the game
function resetGame() {
  boardSquares.forEach((square)=> {
    square.reset();
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


// Adds the players move (either X or O) when a square is clicked
  selectSquare(currPlayer, color,nxtPlayer ){
    this.element.querySelector(".face-container").querySelector(".facedown").innerHTML = '<p>'+currPlayer.toUpperCase()+'</p>';
    this.element.querySelector(".face-container").querySelector(".facedown").style.color = color;
    this.choice = currPlayer;
    this.checkForWinner();
    this.checkForDraw();
    player = nxtPlayer;
    turn ++;
  }



//  –––––– TODO: Check For winner functionality
//Checks every single possiblilty for a win whenever there have been more then 4 turn taken
//Calls drawLine function to draw a line
  checkForWinner(){

  // Check rows and columns
    this.checkSides()

    if (this.match) {
        document.getElementById("winner").innerHTML = "Winner is: " + player.toUpperCase();
        document.getElementById("reset-button").disabled = false;
        running = false;
    }
  }

  // ––––––– TODO: CHECK SIDES FUNCTION
  //    Check all the sides (i.e. Horizontal, vertical, diagonal)
  //    to see if any of the players won already
  checkSides(){
      return
  }

 // ––––––– TODO: CHECK FOR DRAW
 // Checks whether the game ended in a draw
  checkForDraw() {
      return
  }

// ––––––– TODO: HANDLE CLICK EVENT ON THE SQUARES
// Handles all events that take place on each square
  handleEvent(event) {
      return
  }

// ––––––– TODO: CHANGE COLOR AFTER A PLAYER WINS
// Adds a yellow color to the square where a match occured
  changeSquareWin(squares){
    return 
  }

  //Restarts the game
  reset() {
    this.choice = null;
    this.match = false
    this.element.style.backgroundColor = "#fff";
    this.element.querySelector(".face-container").querySelector(".facedown").innerHTML = '';
    document.getElementById("winner").innerHTML = "<br>";
    document.getElementById("reset-button").disabled = true;
    running = true;
    player = "x";
  }

}


// Launch game
setupGame();
