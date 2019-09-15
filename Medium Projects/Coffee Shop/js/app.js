$(document).ready(function ($) {
  $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
    enabled: true
    }
    // other options
  });
});

const toggle = document.querySelector('.toggle');
const body = document.querySelector('.body');
const textContent = document.querySelector('.text-content');
const work = document.querySelector('.work');
const customer = document.querySelector('.customers');
const footerContent = document.querySelector('.footer-content');
const preloader = document.querySelector('.preloader');

function loading() {
  preloader.style.display = 'none';
}
window.addEventListener('load', () => {
  loading();
})
toggle.addEventListener('click', (e)=> {
  toggle.classList.toggle('active');
  body.classList.toggle('night');
  textContent.classList.toggle('night-font');
  if(work.classList.contains('sun')) {
    work.classList.remove('sun');
    work.classList.add('night');
  }
  else {
    work.classList.add('sun');
    work.classList.remove('night');
  }
  if(customer.classList.contains('sun')) {
    customer.classList.remove('sun');
    customer.classList.add('night');
  }
  else {
    customer.classList.add('sun');
    customer.classList.remove('night');
  }
  if(footerContent.classList.contains('sun')) {
    footerContent.classList.remove('sun');
    footerContent.classList.add('night');
  }
  else {
    footerContent.classList.add('sun');
    footerContent.classList.remove('night');
  }
})
function smoothScroll() {
 window.onscroll = function () {
   if(window.pageYOffset >= 1000) {
      upButton.style.display = 'block';
   }
   else {
     upButton.style.display = 'none';
   }
 }
 upButton.onclick = function () {
      window.scrollTo(0, 0);
 }
}
smoothScroll();
