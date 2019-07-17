const quote = new Quote;
const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const bodyBg = document.querySelector('body');
const text = document.querySelector('#text');
const quoteBtn = document.querySelector('#new-quote');
const author = document.querySelector('#author');
const tweet = document.querySelector('#tweet-quote');
const tumblr = document.querySelector('#tumblr-quote');
const icone = document.querySelector('#icone-quote');
const content = document.querySelector('.content');
tweet.addEventListener('click', ()=> {
   window.open("https://twitter.com/");
})
tumblr.addEventListener('click', ()=> {
   window.open("https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DAnne%2BFrank%26content%3DHow%2Bwonderful%2Bit%2Bis%2Bthat%2Bnobody%2Bneed%2Bwait%2Ba%2Bsingle%2Bmoment%2Bbefore%2Bstarting%2Bto%2Bimprove%2Bthe%2Bworld.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button");
})
function animation(style) {
  style.animate([{opacity:'0.2'}, {opacity:'1'}],
  {duration: 1000, fill:'forwards'});
}
quoteBtn.addEventListener('click', ()=> {
  let p = quote.getQuote()
  .then(data =>{
   let qoute = data.quotes ;
      loadQuote(qoute);
  })
})
function loadQuote(qoute) {
 let pickColor = '#';
 // Function to make random colores
for (var i = 0; i < 6; i++) {
  // Function to make random quotes
  let randome = Math.floor(Math.random()*hexNumbers.length);
  pickColor += hexNumbers[randome];
}

let random = Math.floor(Math.random()*qoute.length);
  animation(author);
  animation(icone);
  animation(bodyBg);
  animation(content);
  quoteBtn.style.backgroundColor = pickColor;
  bodyBg.style.background = pickColor;
  tweet.style.backgroundColor = pickColor;
  tumblr.style.backgroundColor = pickColor;
  author.style.color = pickColor;
  icone.style.color = pickColor;
  text.style.color = pickColor;
  text.innerHTML = qoute[random].quote;
  author.innerHTML = qoute[random].author;
  // console.log(qoute[random].quote);
  // console.log(qoute[random].author);
 }
