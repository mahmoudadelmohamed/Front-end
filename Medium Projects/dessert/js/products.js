const searchItem = document.querySelector('.form-control');
const storeItem = document.querySelectorAll('.cart-text');
const cartInfo = document.querySelector('.cart-info');
const cartSum = document.querySelector('#cart-total');
const cartPrice = document.querySelectorAll('#store-item-price');
const itemCount = document.querySelector('#item-count');
const itemTotal = document.querySelector('.item-total');
const cartContent = document.querySelector('#cart');
const clearCart = document.querySelector('#clear-cart');
const closeCart = document.querySelector('#close-cart');
const notFound = document.querySelector('.not-found');
const buttons = [...document.querySelectorAll('.store-item-icon')];
let buttonsDOM = buttons;
let cartArr = [], accumulator = [], cartRemoveArr = [];

class UI {
  constructor() {
    this.storeItems = document.querySelector('.store-items');
    this.cart = document.querySelector('.cart');
  }
  smoothScroll() {
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
searchCake(e) {
  let cnt = 0;
    const text = e.target.value.toUpperCase();
    storeItem.forEach(item => {
      let task = item.children[0].textContent;
      if (task.toUpperCase().indexOf(text) != -1) {
        item.parentElement.parentElement.style.display = 'block';
      }
      else {
        item.parentElement.parentElement.style.display = 'none';
        cnt++;
      }
    })
    if (cnt === 9) {
      notFound.style.display = 'block';
    }
    else {
      notFound.style.display = 'none';
    }
    cnt = 0;
    }
    showCart() {
      cart.classList.toggle('show-cart');
    }
  addInCart(btns, e) {
    const objItem = {}
    let id = btns.dataset.id;
        let imagePath = e.target.parentElement.parentElement.parentElement.children[0].src;
        let titlePath = e.target.parentElement.parentElement.parentElement.
        nextElementSibling.children[0].children[0];
        let pricePath = e.target.parentElement.parentElement.parentElement.
        nextElementSibling.children[0].children[1];
        let price = pricePath.textContent.slice(2).trim(),
        title = titlePath.textContent,
        image = imagePath.slice(22, imagePath.length);
        objItem.image_url = image ;
        objItem.title = title;
        objItem.id = id;
        objItem.price = price;
        cartArr = [...cartArr, objItem];
        this.innerCart(objItem);
        this.pickTotal(cartArr);
        btns.disabled = true;
        let chil = btns.children[0];
        chil.innerHTML = '<i class="fas fa-thumbs-up"></i>';
  }
  pickTotal(cartArr) {
    let tempTotal = 0;
    cartArr.map(item => {
        tempTotal += parseFloat(item.price);
    })
      itemCount.textContent = cartArr.length;
      itemTotal.textContent = tempTotal.toFixed(2);
      cartSum.textContent = tempTotal.toFixed(2);
  }
  showAlert() {
    swal( {
      title:'Nice!',
      text:'The item added to the cart!',
      icon: 'success',
      buttons: false,
      timer: 1000
    });
  }
  innerCart(objItem) {
    const cartItem = document.createElement('div');
       cartItem.classList.add('cart-item', 'd-flex', 'justify-content-between', 'text-capitalize', 'my-3');
       cartItem.innerHTML = `
       <img src="${objItem.image_url}" class="img-fluid rounded-circle" id="item-img">
       <div class="item-text">
         <p id="cart-item-title" class="font-weight-bold mb-0">
           ${objItem.title}
           </p>
           <span>$</span>
           <span class="cart-item-price" class="cart-item-price mb-0">${objItem.price}</span>
       </div>
       <a href="#" id="cart-item-remove" class="cart-item-remove" data-id=${objItem.id}>
         <i class="fas fa-trash"  data-id=${objItem.id}></i>
       </a>
       `;
      const cart = document.querySelector('#cart');
      const cartTotal = document.querySelector('.cart-total-container');
      cart.insertBefore(cartItem, cartTotal);
      this.showAlert();
    }
    removeFromCart(e) {
       if(e.target.classList[1] === 'fa-trash' ) {
         cartContent.removeChild(e.target.parentElement.parentElement);
         let id = e.target.dataset.id;
         cartArr =  cartArr.filter(item => item.id !== id);
        this.pickTotal(cartArr);
        let button = this.singleButton(id);
        button.disabled = false;
        let child = button.children[0];
        child.innerHTML = `
           <i class="fas fa-shopping-cart" data-id="${id}"></i>
        `
       }
    }
    singleButton(id) {
      return buttonsDOM.find(item => item.dataset.id === id);
    }
    clearFromCart(item) {
      let id = item.id;
      cartArr =  cartArr.filter(item => item.id !== id);
      this.pickTotal(cartArr);
      let button = this.singleButton(id);
      button.disabled = false;
      let child = button.children[0];
      child.innerHTML = `
      <i class="fas fa-shopping-cart" data-id="${id}"></i>
      `
    }
    clearCart(e) {
      while (cartContent.children.length - 2 > 0) {
        cartContent.removeChild(cartContent.children[0]);
      }
       let cartId = cartArr.map(item => {
         this.clearFromCart(item)
       })
    }
  }

const ui = new UI;
function Events() {
  searchItem.addEventListener('keyup', function (e) {
      ui.searchCake(e);
  })
  ui.smoothScroll();
  cartInfo.addEventListener('click', function () {
     ui.showCart();
  })
  buttons.forEach(btns => {
     btns.addEventListener('click', function (e) {
       ui.addInCart(btns, e);
      })
    })
    cartContent.addEventListener('click', (e)=> {
        ui.removeFromCart(e);
    })
    clearCart.addEventListener('click', (e)=> {
        ui.clearCart(e);
    })
    closeCart.addEventListener('click', ()=> {
      ui.showCart();
    })
}


Events();
