let min = 1, max = 10, winningNum = 3, guessLeft = 3;
var random = Math.random();
winningNum = Math.floor(random * (max - min + 1) + min);
// UI Elements
const game = document.querySelector('#game'),
      minNumber = document.querySelector('.min-num'),
      maxNumber = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');

// Update min and max Dynamic
minNumber.textContent = min;
maxNumber.textContent = max;

// Function To Retrn Message Alarm
function setMessage(msg, color) {
   message.textContent = msg;
   message.style.color = color;
}
// Function For Game Over
function GameOver(won) {
  let color;
  won === true ? color = 'green' : color = 'red';
  guessInput.style.borderColor = color;
  guessInput.disabled = true;
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}
// Event
game.addEventListener('mousedown', function(e) {
  if(e.target.className === 'play-again') {
      window.location.reload();
  }
})
guessBtn.addEventListener('click', function () {
  // The Limites User Should Use
  let guessNumber = parseInt(guessInput.value);
  if(guessNumber < min || guessNumber > max || isNaN(guessNumber)) {
    setMessage(`Please Enter Number Between ${min} And ${max}`, 'red');
  }
else {
  if(guessNumber === winningNum) {
    // In Case You Win
    GameOver(true);
    setMessage(`${winningNum} is Correct, YOU WIN!`, 'green');
  }
  else {
    guessLeft -= 1;
    // Her I Give User Chance To Try Again
    guessInput.style.borderColor = 'red';
    setMessage(`${guessNumber} is Not Correct, ${guessLeft} Guess Left`, 'red');
    guessInput.value = '';
  }
if(guessLeft === 0) {
  // Game Over
  GameOver(false);
  setMessage(`Game Over You Lose, The Correct Answer is ${winningNum}`, 'red');
  }
}
});










/*let min = 1, max = 10, winningNum = 2, guessLeft = 3;
// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign min and max
minNum.textContent = min;
maxNum.textContent = max;

// Message Of Check
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent =  msg;
}
function GameOver(won) {
    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.style.borderColor = color;
    guessInput.disabled = true;
}

// Event
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);
  if(guess < min || guess > max || isNaN(guess)) {
      setMessage(`Please Enter Number Between ${min} and ${max}`, 'green');
  }
  else {
      // Check for Won
      if(guess === winningNum) {
          // Game Over -> Won
         GameOver(true);
        setMessage(`${winningNum} is Correct, YOU WIN!` , 'green');
      }
      else {
        guessLeft -= 1;
       if(guessLeft === 0) {
          // Game Over -> Lose
            GameOver(false);
             setMessage(`Game Over You Lose The Correct Answer is ${winningNum} ` , 'red');
            guessInput.value = '';
       }
       else {
          // Game Contenuies -> answer wrong
          guessInput.style.borderColor = 'red';
          setMessage(`${guess} is Not Correct, ${guessLeft} Guesses Left`, 'red');
          guessInput.value = '';
       }
      }
  }
});
/**/
//console.log(minNum, maxNum, guessBtn, guessInput, message);
