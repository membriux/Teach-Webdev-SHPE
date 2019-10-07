
/*
Order:
- Let/Var variables
- BoardSquares class
- Setup functions
- Game logic
- SetupGame() call
*/


// –––––––– TODO: ADD variables
// const: boardSquares ––> Board Squares will be stored in an array


// variable: player ––> Default player set to X so we can keep track of player's turn


// variable: Turn  -> Keeps track of the number of turns taken


// variable: running –> Want to know whenever the game is running



//––––––––– TODO: Setup board game ––––––––
// Generates squares for the board game
function setupGame() {
    return
}


//––––––––– TODO: Function for adding all the squares onto the Board ––––––––
//Adds boardsquare divs as well as the canvas div following all squares
function generateHTMLBoardSquares(){
    return
}

//––––––––– TODO: Reset Button function ––––––––
// Called when reset button is clicked
// Resets all the board squares of the game
function resetGame() {
    return
}


// –––––––– TODO: Add event listener for reset button click



/*
Each square on the board is an object of the BoardSquare class
This will allow us to manipulate the objects whenever they are clicked
*/
class BoardSquares {
//  –––––– TODO: Class constructor for BoardSquares



// ––––––– TODO: CHANGE TEXT/COLOR OF CURRENT PLAYER
// Changes the text on the square
  selectSquare(currPlayer, color,nxtPlayer) {
    return
  }

//  –––––– TODO: Check For winner functionality
//Checks every single possiblilty for a win whenever there have been more then 4 turn taken
//Calls drawLine function to draw a line
  checkForWinner(){
     return 
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

// // ––––––– TODO: CHANGE COLOR AFTER A PLAYER WINS
// Adds a yellow color to the square where a match occured
  changeSquareWin(squares){
    return
  }



  // Restarts the game
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
