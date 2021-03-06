/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let player;
let playerTurn;
let playerMoveCount;
let cpuOn;
let enemy;
let win;
let player2;
let humanOn;
let enemyTurn;
let enemyMoveCount;

/*------------------------ Cached Element References ------------------------*/

let startScreen = document.getElementById('start-screen');
let pickScreen = document.getElementById('pick-screen');
let enemyPick = document.getElementById('enemy-pick');
let gameBoard = document.getElementById('play-board');
let winScreen = document.getElementById('win-screen');
let startBtn = document.getElementById('start-btn');

let cell1= document.getElementById('cell1');
let cell2= document.getElementById('cell2');
let cell3= document.getElementById('cell3');
let cell4= document.getElementById('cell4');
let cell5= document.getElementById('cell5');
let cell6= document.getElementById('cell6');
let cell7= document.getElementById('cell7');
let cell8= document.getElementById('cell8');
let cell9= document.getElementById('cell9');

let playAgain = document.getElementById('playAgain');

let pickX = document.getElementById("pick-x");
let pickO = document.getElementById("pick-o");
let robot = document.getElementById("robot");
let human = document.getElementById("human");

/*----------------------------- Event Listeners -----------------------------*/

startBtn.addEventListener('click', function() { 
    startScreen.style.display = 'none';
    pickScreen.style.display = 'block';
});

pickX.addEventListener('click', function() {
    player = "X";
    enemy = "O";
    displayPick = pickScreen.style.display = "none";
    displayEnemyPick = enemyPick.style.display = "block";
});

pickO.addEventListener('click', function() {
  player = "O";
  enemy = "X";
  displayPick = pickScreen.style.display = "none";
  displayEnemyPick = enemyPick.style.display = "block";
});

robot.addEventListener('click', function() {
  cpuOn = true;
  humanOn= false;
  displayEnemyPick = enemyPick.style.display = "none";
  displayGame = gameBoard.style.display = "block";
});

human.addEventListener('click', function() {
  cpuOn = false;
  humanOn= true;
  displayEnemyPick = enemyPick.style.display = "none";
  displayGame = gameBoard.style.display = "block";
});



  
/*-------------------------------- Functions --------------------------------*/

let displayStart = (startScreen.style.display = "block");
let displayPick = (pickScreen.style.display = "none");
let displayEnemyPick = (enemyPick.style.display = "none");
let displayGameBoard = (gameBoard.style.display = "none");
let displayWin = (winScreen.style.display = "none");

function CheckWin() {
  if (win === 1) {
    displayWin = (winScreen.style.display = "block");
    displayGameBoard = (gameBoard.style.display = "none");
  } else if (win === 2) {
    displayWin = (winScreen.style.display = "block");
    displayGameBoard = (gameBoard.style.display = "none");
  }
}

function horizontalWin() {
    if (
    cell1.innerHTML === player && cell4.innerHTML === player && cell7.innerHTML === player) {
    win = 1;
  } else if (
    cell2.innerHTML === player && cell4.innerHTML === player && cell7.innerHTML === player) {
    win = 1;
  } else if (
    cell3.innerHTML === player && cell6.innerHTML === player && cell9.innerHTML === player) {
    win = 1;
  }
}

function verticalWin() {
  if (
    cell1.innerHTML === player && cell4.innerHTML === player && cell7.innerHTML === player) {
    win = 1;
  } else if (
    cell2.innerHTML === player && cell4.innerHTML === player && cell7.innerHTML === player) {
    win = 1;
  } else if (
    cell3.innerHTML === player && cell6.innerHTML === player && cell9.innerHTML === player) {
    win = 1;
  }
}

function horizontalLost() {
  if (
    cell1.innerHTML === player2 || enemy && cell2.innerHTML === player2 || enemy && cell3.innerHTML === player2) {
    win = 2;
  } else if (
    cell4.innerHTML === player2 || enemy && cell5.innerHTML === player2 || enemy && cell6.innerHTML === player2) {
    win = 2;
  } else if (
    cell7.innerHTML === player2 || enemy && cell8.innerHTML === player2 || enemy && cell9.innerHTML === player2) {
    win = 2;
  }
}

function verticalLost() {
    if (
    cell1.innerHTML === player2 || enemy && cell4.innerHTML === player2 || enemy && cell7.innerHTML === player2 || enemy) {
    win = 2;
  } else if (
    cell2.innerHTML === player2 || enemy && cell4.innerHTML === player2 || enemy && cell7.innerHTML === player2 || enemy) {
    win = 2;
  } else if (
    cell3.innerHTML === player2 || enemy && cell6.innerHTML === player2 || enemy && cell9.innerHTML === player2 || enemy) {
    win = 2;
  }
}