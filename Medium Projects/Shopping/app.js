 // UI Elements
let store = [];
let cart = [];
let buttonsDOM = [];
let output = '';

const cardBtn = document.querySelector('.cart-btn');
const colseCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.card-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.products-center');



// getting the products
class Products {
  async getProducts() {
    const product = await fetch('products.json');
    const responseProducts = product.json();
    return responseProducts;
  }
}
// display productsDOM
class UI {
  displayProducts(products) {
    output += `
      <!-- Start single product -->
       <article class="product">
         <div class="img-container">
           <img src="${products.image_url}" alt="" class="product-img">
         <button class="bag-btn" data-id="${products.id}">
            <i class="fas fa-shopping-cart"></i>
            add to bag
          </button>
       </div>
        <h3>${products.title}</h3>
        <h4>$${products.price}</h4>
      </article>
      <!-- End single product -->
    `
  }
getButtons() {
  const buttons = [...document.querySelectorAll('.bag-btn')];
  buttonsDOM = buttons;
   buttons.forEach(btns => {
      let id = btns.dataset.id;
      btns.addEventListener('click', (e) => {
          e.target.innerText = 'IN CART';
          e.target.disabled = true;

          let cartItem =  {...Storage.getProductsFromLocal(id), amount:1};
         cart = [...cart, cartItem];

         // Save in LS
         Storage.saveCart(cart);
         // Set CartValues
        this.setCartValue(cart);
        console.log(cart);
        this.setCartItem(cartItem);
        // Show cart
        cardBtn.addEventListener('click', ()=> {
          this.showCart();
        })
          // Close cart
  colseCartBtn.addEventListener('click', ()=> {
        this.closeCart();
    })

      })
   });
}
showCart() {
    cartOverlay.classList.add('transparentBcg');
    cartDOM.classList.add('showCart');
}
closeCart() {
    cartOverlay.classList.remove('transparentBcg');
    cartDOM.classList.remove('showCart');
}
setCartValue(cart) {
  let tempTotal = 0;
  let itemsTotal = 0;
  cart.map(item => {
    tempTotal += item.price * item.amount;
    itemsTotal += 1;
  })
  cartTotal.innerHTML = parseFloat(tempTotal.toFixed(2));
  cartItems.innerHTML = itemsTotal;
    // console.log(cartTotal, cartItems);
}
  setCartItem(items) {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${items.image_url}" alt="">
      <div>
        <h4>${items.title}</h4>
        <h5>$${items.price}</h5>
        <span class="remove-item" data-id="${items.id}">remove</span>
      </div>
      <div>
        <i class="fas fa-chevron-up"data-id="${items.id}"></i>
        <p>${items.amount}</p>
        <i class="fas fa-chevron-down"data-id="${items.id}"></i>
     </div>
    `
    cartContent.appendChild(div);
     // console.log(cartContent);
  }
cartLogic() {
  clearCartBtn.addEventListener('click', () => {
    this.clearCart();
  });
  cartContent.addEventListener('click', (event) => {
    if(event.target.className === 'remove-item') {
       let removeItem = event.target;
       let id = removeItem.dataset.id;
      cartContent.removeChild(removeItem.parentElement.parentElement);
       this.removeItems(id);
    }
    else if(event.target.className === 'fas fa-chevron-up') {
       let addAmount = event.target;
       let id = addAmount.dataset.id;
       let tempItem = cart.find(item => item.id === id);
       tempItem.amount += 1;
      this.setCartValue(cart);
      addAmount.nextElementSibling.innerText = tempItem.amount;
    }
    else if(event.target.className === 'fas fa-chevron-down') {
        let minAmount = event.target;
        let id = minAmount.dataset.id;
         let tempItem = cart.find(item => item.id === id);
         tempItem.amount -= 1;
         if(tempItem.amount > 0) {
            minAmount.previousElementSibling.innerText = tempItem.amount;
            this.setCartValue(cart);
         }
         else {
           cartContent.removeChild(minAmount.parentElement.parentElement);
           this.removeItems(id);
         }
    }
  });
}
  clearCart() {
   let cartIds = cart.map(item => item.id);
   cartIds.forEach(ids => {this.removeItems(ids);})
   console.log(cartContent);
   while (cartContent.children.length > 0) {
     cartContent.removeChild(cartContent.children[0]);
   }
     this.closeCart();
  }
  removeItems(id) {
    cart =  cart.filter(item => item.id !== id) ;
    this.setCartValue(cart);
    let button = this.getSingleButton(id);
    button.disabled = false;
    button.innerHTML = `<i class="fas fa-shopping-cart"></i>Add to Bag`
  }
  // closeCart();
  getSingleButton(id) {
      return buttonsDOM.find(button => button.dataset.id === id);
  }

}
// local storage
class Storage {
  static saveproduct(product) {
    localStorage.setItem("products", JSON.stringify(product));
  }
  static getProductsFromLocal(id) {
    let p = JSON.parse(localStorage.getItem('products'));
    return p.find(p => p.id === id);
  }
  static saveCart(cart) {
    localStorage.setItem("Cart", JSON.stringify(cart));
  }

}
document.addEventListener('DOMContentLoaded', () => {
    // initialat Products
    const product = new Products;
    // initialat UI
    const ui = new UI;
    product.getProducts()
      .then(products => {
        products.forEach(items => {
          ui.displayProducts(items);
          store.push(items);
          Storage.saveproduct(store)
        })
        productsDOM.innerHTML = output;
      })
      .then(() => {
        ui.getButtons();
          ui.cartLogic();
      })

  })
