const memoryCard = document.querySelectorAll('.memory-card');
const playAgain = document.querySelector('.play');
playAgain.addEventListener('click', ()=> {
  location.reload();

})
let firstCard, secendCard;
let hasFlipped = false;
let lockBord = false;
function flipCard(e) {
  if(lockBord) return;
   this.classList.add('flip');
   if(!hasFlipped) {
     hasFlipped = true;
     firstCard = this;
   }
   else {
     hasFlipped = false;
     secendCard = this;
    displayFlip();
   }
}
function displayFlip() {
  let matching = firstCard.dataset.animal === secendCard.dataset.animal;
  matching ? endFlip() : removeFlip();

}
function removeFlip() {
  lockBord = true;
  setTimeout(()=> {
    firstCard.classList.remove('flip');
    secendCard.classList.remove('flip');
    ressteBord();
  }, 1500)
}
function endFlip() {
  firstCard.removeEventListener('click', flipCard);
  secendCard.removeEventListener('click', flipCard);
  ressteBord();
}
function ressteBord() {
  [hasFlipped, lockBord] = [false, false];
  [firstCard, secendCard] = [null, null];
}
memoryCard.forEach(items => {
  let random = Math.floor(Math.random() * 12);
   items.style.order = random;
})
memoryCard.forEach(items => {
  items.addEventListener('click', flipCard);
})
