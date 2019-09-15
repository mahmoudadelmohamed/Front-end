const filterBtn = document.querySelectorAll('.filter-btn');
const singleItem = document.querySelectorAll('.single-item');

function loading() {
  preloader.style.display = 'none';
}
window.addEventListener('load', () => {
  loading();
})
filterBtn.forEach(btn => {
  btn.addEventListener('click', (e)=> {
    let filter = e.target.dataset.filter;
     let active = document.querySelectorAll('.active-button');
     btn.className += ' active-button';
      active[0].className = active[0].className.replace('active-button', '');

  singleItem.forEach(item => {
    if(filter === 'all') {
      item.style.display = 'block';
    }
    else {
      (!item.classList.contains(filter)) ? item.style.display = 'none': item.style.display = 'block';
    }
  })
    e.preventDefault();
  })
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
