let imageInner = [];
let output = '', data = '';
const feateur = document.querySelector('.featured-info');
const featured = document.querySelector('.featured');
const closeIcon = document.querySelector('.fa-window-close');
const featuredImg = document.querySelector('.featured-img');


class UI {
  constructor() {
    this.featuredImg = document.querySelector('.featured-img');
    this.workItem = document.querySelector('.work-modle-item');
    this.workModle = document.querySelector('.work-modle');
  }
  makeOreder(path, e, random) {
    let orderName = e.target.children[1].innerHTML;
    let imagePath = `${path}${random + 1}.jpg`;
    let target_image = imageInner[0] = path + random;

     data += `
     <div class="img-container">
       <img src="${imagePath}" alt="" class="img-fluid featured-photo">
       <a href="#" class="featured-link">
         <i class="fas fa-search"  data-id="${target_image}"></i>
       </a>
     </div>
     `
   this.featuredImg.innerHTML = data;
   data = '';
  }
  displayImage(e) {
    if(e.target.classList[1] === 'fa-search') {
      console.log(e.target);
      let image = e.target.parentElement.parentElement.children[0].src;
      let cutImage = image.slice(22, image.length);
      this.workItem.style.backgroundImage = `url(${cutImage})`;
      this.workModle.classList.add('work-model-show');
    }
  }
  closeImage(e) {
      e.target.parentElement.parentElement.classList.remove('work-model-show');
  }
  loading() {
    preloader.style.display = 'none';
  }
}

// getting the products
class Products {
  async getProducts(url) {
    const product = await fetch('js/products.json');
    const responseProducts = product.json();
    return responseProducts;
  }
}
// display productsDOM
document.addEventListener('DOMContentLoaded', ()=> {
  const http = new Products;
  http.getProducts('products.json')
  .then(data => data.forEach(item => {
    output += `
    <div class="feateur-item my-3 d-flex py-2 text-capitalize align-item-baseline flex-wrap">
    <span class="featured-icon mr-2">
    <img src="${item.image_url}" alt="">
    </span>
    <h5 class="font-weight-bold mx-1">${item.title}</h5>
    </div>
    `
    feateur.innerHTML = output;
  }));
})
const ui = new UI;
function Events() {
  feateur.addEventListener('click', (e)=> {
  let random = Math.floor(Math.random() * 20);
  if(e.target.children[1].textContent === 'coffee') {
    let path =` imgCoffee/coffee-`;
        ui.makeOreder(path, e, random);
    }
    else if( e.target.children[1].textContent === 'cup of tea') {
    let path =` imgTea/tea-`;
        ui.makeOreder(path, e, random);
    }
    else if( e.target.children[1].textContent === 'ice cream') {
    let path =` imgIce/ice-`;
        ui.makeOreder(path, e, random);
    }
    else if( e.target.children[1].textContent === 'sandwich') {
    let path =` imgSandwich/sandwich-`;
        ui.makeOreder(path, e, random);
    }
  })
  featuredImg.addEventListener('click', (e)=> {
    ui.displayImage(e);
    e.preventDefault();
  })
  closeIcon.addEventListener('click', (e)=> {
    ui.closeImage(e);
  })
  window.addEventListener('load', () => {
    ui.loading();
  })
}


Events();
