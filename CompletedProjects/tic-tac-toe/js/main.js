
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
    this.element.querySelector(".face-container").querySelector(".facedown").innerHTML = '';
    this.element.style.backgroundColor = "#fff";
    running = true;
    player = "x";
    document.getElementById("winner").innerHTML = "<br>";
    document.getElementById("reset-button").disabled = true;
    document.getElementById("myCanvas").hidden = true;
  }

  //Checks every single possiblilty for a win whenever there have been more then 4 turn taken
  //Calls drawLine function to draw a line
  checkForWinner(){
    if (turn >= 4) {
      var x;

      // Check rows and columns
      this.winSides();

      // Diagonal top left to bottom right
      this.winDiagonal(0,4,8);

      // Diagonal top right to bottom left
      this.winDiagonal(2,4,6);

      if (this.match) {
        document.getElementById("winner").innerHTML = "Winner is: " + player.toUpperCase();
        document.getElementById("reset-button").disabled = false;
        running = false;
      }
    }
  }

  winSides(){
    for (var y = 0;y<3; y++) {
        let x = y*3;

        // Check vertically
        let y1 = boardSquares[y].choice;
        let y2 = boardSquares[y+3].choice;
        let y3 = boardSquares[y+6].choice;

        // Check horizontally
        let x1 = boardSquares[x].choice;
        let x2 = boardSquares[x+1].choice;
        let x3 = boardSquares[x+2].choice;
        
        if (y1 == y2 && y1 == y3){
          this.match = true;
          this.changeSquareWin([y,y+3,y+6]);
          return
        }
        
        if (x1 == x2 && x1 == x3){
          this.match = true;
          this.changeSquareWin([x,x+1,x+2]);
          return
        }
      }
  }

  winDiagonal(sq1,sq2,sq3) {
    let s1 = boardSquares[sq1].choice;
    let s2 = boardSquares[sq2].choice;
    let s3 = boardSquares[sq3].choice;
    if (s1 == s2 && s1 == s3){
        this.match = true;
        this.changeSquareWin([sq1,sq2,sq3]);
        return
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

  //Adds a yellow color to the square where a match occured
  changeSquareWin(squares){
    squares.forEach((square)=>{
      boardSquares[square].element.style.backgroundColor = "#F7DC6F";
    });
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


//calls the generate squares function, creates a canvas, pushes each square to the boardsuares array, returns the canvas
function setupGame() {
  generateHTMLBoardSquares();

  const squareElements = document.getElementsByClassName("board-square");

  for (var i = 0; i < squareElements.length; i++) {
    const element = squareElements[i];
    const square = new BoardSquares(element);
    boardSquares.push(square);
  }
}

// Launch game
setupGame();