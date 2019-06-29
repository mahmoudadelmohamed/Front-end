let player1 = 'x',  player2 = 'o', stopGame = true, counter = 0;
var winner = [
  // Check Row
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // Check Column
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // Check Diagonals
  [0, 4, 8],
  [2, 4, 6]
];
// UI Elements
const square = document.querySelectorAll('.square');
const message = document.querySelector('.text');
message.innerText = 'My Tic Tac Toe Game !'


function startGame() {
 document.querySelector('.endgame').style.display = 'none';
 for(var i = 0; i < square.length; i ++) {
    square[i].addEventListener('click', loading);
    square[i].innerText = '';
    stopGame = true;
    counter = 0;
   }
}
// This Function To Switch Between X and O
function Switch() {
  if(player1 ===  'x') {
    player1 = 'o';
  }
  else {
    player1 = 'x';
  }
}

function loading(e) {
  if(stopGame) {
    if(!e.target.innerText) {
      document.getElementById(e.target.id).innerText = player1;
      getBox(parseInt(e.target.id));
      Winner(player1);
      if(Winner(player1)) {
          stopGame = false;
          message.innerText =  `${player1} is Winner` ;
          document.querySelector('.endgame').style.display = 'inline-block';
      }
      Switch();
      counter ++;
      console.log(counter, stopGame);
      if(counter === 9 && stopGame === true) {
        message.innerText =  `o and x is Drowing`;
        document.querySelector('.endgame').style.display = 'inline-block';
      }
     }
  }
}

function getBox(n) {
  return document.getElementById(n).innerText;
}

function rowAndColumn(a, b, c, move) {
    return getBox(a) === move &&  getBox(b) === move && getBox(c) === move;
}
function Winner(move) {
return rowAndColumn(0, 1, 2, move) ||
       rowAndColumn(3, 4, 5, move) ||
       rowAndColumn(6, 7, 8, move) ||

       rowAndColumn(0, 3, 6, move) ||
       rowAndColumn(1, 4, 7, move) ||
       rowAndColumn(2, 5, 8, move) ||

       rowAndColumn(0, 4, 8, move) ||
       rowAndColumn(2, 4, 6, move);
}
// for(var i = 0; i < 8; i ++) {
//   let x = 0, y = 0, z = 0;
//   for(var j = 0; j < 3; j ++) {
//     if(j === 0) {
//       x = winner[i][j];
//     }
//     else if(j === 1) {
//       y = winner[i][j];
//     }
//     else {
//       z = winner[i][j];
//     }
//
//   }
//   console.log(x,y,z);
//
//   console.log('--');
// }






/**/
