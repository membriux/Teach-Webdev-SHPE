const boardSquares = []
const resetButton = document.getElementById("reset-button")
player = "x"
running = true
turn = 0

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

class BoardSquares {
  constructor(element,canvas) {
    this.element = element;
    this.element.addEventListener("click", this, false);
    this.match = false;
    this.choice = null;
    this.canvas = canvas.getContext("2d");
    this.canvas.lineWidth = 6;
    this.canvas.strokeStyle = "#4C4CEE";
    this.element.style.fontFamily = "Manjari"
  }

  reset() {
    this.choice = null;
    this.match = false
    this.element.querySelector(".face-container").querySelector(".facedown").innerHTML = ''
    running = true;
    player = "x";
    document.getElementById("winner").innerHTML = "<br>";
    document.getElementById("reset-button").disabled = true;
    this.canvas.clearRect(0,0,370,370);
    document.getElementById("myCanvas").hidden = true;

  }

  checkForWinner(){
    if (turn >= 4) {
      var x;

      if (this.choice == "x") {
        this.canvas.strokeStyle = "#FF0000";
      }
      else {
        this.canvas.strokeStyle = "#0000FF";
      }

      for (var i = 0;i<3; i++) {
        x = i*3
        if (boardSquares[x].choice ==
          this.choice && boardSquares[x+1].choice == this.choice && boardSquares[x+2].choice == this.choice) {
          this.match = true;
          this.canvas.beginPath();
          this.canvas.moveTo(41, 62+(i)*(122));
          this.canvas.lineTo(329, 62+(i)*(122));
          this.canvas.stroke();
        }
      }

      for (var i = 0;i<3;i++) {
        if (boardSquares[i].choice ==
          this.choice && boardSquares[i+3].choice == this.choice && boardSquares[i+6].choice == this.choice) {
          this.match = true;
          this.canvas.beginPath();
          this.canvas.moveTo(62+(i)*(122), 41);
          this.canvas.lineTo(62+(i)*(122), 329);
          this.canvas.stroke();
        }
      }

      if (boardSquares[0].choice == this.choice && boardSquares[4].choice == this.choice && boardSquares[8].choice == this.choice){
        this.match = true;
        this.canvas.beginPath();
        this.canvas.moveTo(41, 41);
        this.canvas.lineTo(329, 329);
        this.canvas.stroke();
      }
      else if (boardSquares[2].choice == this.choice && boardSquares[4].choice == this.choice && boardSquares[6].choice == this.choice){
        this.match = true;
        this.canvas.beginPath();
        this.canvas.moveTo(329, 41);
        this.canvas.lineTo(41, 329);
        this.canvas.stroke();
      }

      if (this.match) {
        document.getElementById("myCanvas").hidden = false;
        document.getElementById("winner").innerHTML = "Winner is: " + player.toUpperCase();
        document.getElementById("reset-button").disabled = false;
        running = false;
      }
    }
  }

  checkForDraw() {
    if (turn == 8 && this.match == false) {
      document.getElementById("winner").innerHTML = "The game ended in a draw";
      document.getElementById("reset-button").disabled = false;
      running = false;
    }
  }

  handleEvent(event) {
    switch (event.type) {
      case "click":
      if (running) {
        if (player == "x" && this.choice == null) {
          console.log(this.element.querySelector(".face-container").querySelector(".facedown"))
          this.element.querySelector(".face-container").querySelector(".facedown").innerHTML = '<p>X</p>'
          this.element.querySelector(".face-container").querySelector(".facedown").style.color = "#E93636"
          this.choice = "x";
          this.checkForWinner();
          this.checkForDraw();
          player = "o";
          turn ++;
        }
        else if (player == "o" && this.choice == null) {
          this.element.querySelector(".face-container").querySelector(".facedown").innerHTML = '<p>O</p>'
          this.element.querySelector(".face-container").querySelector(".facedown").style.color = "#4C4CEE"
          this.choice = "o";
          this.checkForWinner();
          this.checkForDraw();
          player = "x"
          turn ++;
        }
      }
    }
  }
}

resetButton.addEventListener('click', () => {
  resetGame();
  turn = 0;
});

function createCanvas() {
  var c = document.getElementById("myCanvas");
  c.width = 370;
  c.height = 370;
  return c
}

function setupGame(){
  generateHTMLBoardSquares();
  var c = createCanvas();


  const squareElements = document.getElementsByClassName("board-square");

  for (var i = 0; i<squareElements.length; i++) {
    const element = squareElements[i];
    const square = new BoardSquares(element,c);
    boardSquares.push(square);
  }

function GetElementInsideContainer(containerID, childID) {
  var elm = document.getElementById(childID);
  var parent = elm ? elm.parentNode : {};
  return (parent.id && parent.id === containerID) ? elm : {};
}

}

function resetGame() {
  boardSquares.forEach((square)=> {
    square.reset()
  });
}

setupGame();
