const icons = document.querySelectorAll('.store-item-icon');
const closeIcon = document.querySelector('.fa-window-close');
const upButton = document.querySelector('#upButton');
const cartInfo = document.querySelector('.cart-info');

class UI {
  constructor() {
    this.workModle = document.querySelector('.work-modle');
    this.workItem = document.querySelector('.work-modle-item');
    this.preloader = document.querySelector('.preloader');
    this.cart = document.querySelector('.cart');
  }
  displayImage(e) {
    if (e.target.parentElement.className === 'store-item-icon') {

      let image = e.target.parentElement.parentElement.children[0].src;
      let cutSlice = image.slice(21, image.length);
      console.log(image, image.length, cutSlice);

      this.workItem.style.backgroundImage = `url(${cutSlice})`;
      this.workModle.classList.add('work-model-show');
    }
  }
  closeImage(e) {
    e.target.parentElement.parentElement.classList.remove('work-model-show');
  }
  smoothScroll() {
    window.onscroll = function() {
      if (window.pageYOffset >= 1200) {
        upButton.style.display = 'block';
      } else {
        upButton.style.display = 'none';
      }
    }
    upButton.onclick = function() {
      window.scrollTo(0, 0);
    }
    }
  loading() {
    this.preloader.style.display = 'none';
  }
  showCart() {
    cart.classList.toggle('show-cart');
  }
}
const ui = new UI;
function Events() {
  icons.forEach(item => {
     item.addEventListener('click', (e) => {
       ui.displayImage(e)
     })
  })
  closeIcon.addEventListener('click', (e) => {
      ui.closeImage(e)
  })
  ui.smoothScroll();
  window.addEventListener('load', () => {
   ui.loading();
  })

}

Events();
