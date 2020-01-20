const choices = document.querySelectorAll(".choice");
const score = document.querySelector(".score");
const restart = document.querySelector("#restart");
const modal = document.querySelector(".modal");
const result = document.querySelector('#result');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');


const scorebord = {
  player: 0,
  compuer: 0
};
function play(e) {
  const playerChoise = e.target.id;
  const computerChoise = getComputerChoise();
  const winnner = getWinner(playerChoise, computerChoise);
  showWinner(winnner, computerChoise);
  console.log(playerChoise, computerChoise, winnner);
}
// computer choices
function getComputerChoise() {
  const rand = Math.random();
  if(rand < 0.34) {
    return 'rock';
  }
  else if(rand <= 0.67) {
    return 'paper';
  }
  else {
    return 'scissors';
  }
}
// Game winner
function getWinner(player, comp) {
  // console.log(player, comp);
  if(player === comp) {
    return 'Drow'
  }
  else if(player === 'rock') {
    if(comp === 'paper') {
      return 'computer'
    }
    else {
      return 'player'
    }
  }
  else if(player === 'paper') {
    if(comp === 'scissors') {
      return 'compuer';
    }
    else {
      return 'player';
    }
  }
  else if(player === 'scissors') {
    if(comp === 'rock') {
      return 'computer';
    }
    else {
      return 'player';
    }
  }
}
function showWinner(winner, computerChoise) {
  if(winner === 'player') {
    // Inc player score
    scorebord.player ++;
    // Show modal resualt
    result.innerHTML = `
    <h1 class="text-win">You Win</h1>
     <i class="fas fa-hand-${computerChoise} fa-10x"></i>
     <p>Computer choice <strong>${computerChoise}</strong> </p>
    `;
  }
  else if(winner === 'compuer'){
    // Inc computer score
    scorebord.compuer ++;
    // Show modal resualt
    result.innerHTML = `
    <h1 class="text-lose">You Lose</h1>
     <i class="fas fa-hand-${computerChoise} fa-10x"></i>
     <p>Computer choice <strong>${computerChoise}</strong> </p>
    `;
  }
  else {
    result.innerHTML = `
    <h1>It's A Draw</h1>
     <i class="fas fa-hand-${computerChoise} fa-10x"></i>
     <p>Computer choice <strong>${computerChoise}</strong> </p>
    `;
  }
  // show score
  score.innerHTML = `
  <span id="player-score">${scorebord.player}</span>:<span id="computer-score">${scorebord.compuer}</span>
  `
  modal.style.display = 'block';
}
function clearModal(e) {
    if(e.target.className === 'modal') {
      modal.style.display = 'none';
    }
}
choices.forEach(items => {
  items.addEventListener('click', play)
})
window.addEventListener('click', clearModal)
