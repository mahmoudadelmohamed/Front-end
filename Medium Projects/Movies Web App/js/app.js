const url = `https://api.themoviedb.org/3`
let target = `/search/movie`;
let api_key = `?api_key=ea9e6ac8643082244c38fae131ea1769`;
let query_request = `&query=`;
const img_request = `https://image.tmdb.org/t/p/w500`;
const discover = `https://api.themoviedb.org/3/discover/movie?api_key=ea9e6ac8643082244c38fae131ea1769`

const cartOverlay = document.querySelector('.cart-overlay');
const cartDOM = document.querySelector('.cart');
const burger_btn = document.querySelector('.burger-btn');
const colseCartBtn = document.querySelector('.close-cart');
const select = document.querySelector('#selected');
const inside_row = document.querySelector('#inside_row');
const movies_content = document.querySelector('#movies_container');
const cover_movie = document.querySelector('.max-height');
const inside_similar = document.querySelector('#inside_similar');
const inside_recomended = document.querySelector('#inside_recomended');

function makeUrl(url, target, api_key) {
  return url + target + api_key ;
}
function FetchingData(url) {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    let output = '';
    let remote_data = data.results;
    remote_data.map(items => {
      conditionalDate(items);
      conditionalName(items);
   output += `
     <div class="col-lg-3 col-md-4 col-sm-6 mt-5">
      <div class="card single-item">
      <div class="img-container">
      <a href="movie.html" onClick="movieSelectd(${items.id});"/>
        <img src="https://image.tmdb.org/t/p/w500/${items.poster_path}"
         class="card-img-top store-img" alt="">
       </a>
       </div>
       <div class="card-body">
        <div class="cart-text text-capitalize">
          <h5 class="store-item-name" class="font-weight-blod"> <strong>${name}</strong> </h5>
       <h5 class="stror-item-value">${newDate}</h5>
        </div>
      </div>
      </div>
     </div>
    `
    })
    // console.log(inside_row);
    inside_row.innerHTML = output;
  })
  .catch(error => {
    console.log(error);
  })
}

function movieSelectd(id) {
  sessionStorage.setItem('movieId', id);
  window.location = 'movie.html';
  return false;
}
function getMovie() {

  let movies = sessionStorage.getItem('movieId');
  let new_url = makeUrl(url, `${target}`, api_key);
  let recomended = `/movie/${movies}/recommendations`;
  let similer = `/movie/${movies}/similar`;
  let details = `/movie/${movies}`;
  let vedio = `/movie/${movies}/videos`

  let recommendation_movies = makeUrl(url, `${recomended}`, api_key);
  let similar_movies = makeUrl(url, `${similer}`, api_key);
  let details_movies = makeUrl(url, `${details}`, api_key);
  let trailer = makeUrl(url, `${vedio}`, api_key);

  FetchingMovies(details_movies, trailer, similar_movies, recommendation_movies);
}

function FetchingMovies(details_movies, trailer, similar_movies, recommendation_movies) {
  let output = '';

  fetch(details_movies)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let date = data.release_date;
    let new_date = date.substring(0,4);
    cover_movie.style.background =`
      linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),
      url(https://image.tmdb.org/t/p/w500${data.backdrop_path})
      center/cover no-repeat
    `;
    output += `
    <div class="col-md-4" class="cover">
      <img src="https://image.tmdb.org/t/p/w300${data.poster_path}" class="thumbnail">
    </div>
    <div class="col-md-6">
      <h3 class="movie_title text-uppercase">${data.title}</h3>
      <div class="row" id="movie_info">
        <h5 class="release_date mt-3"> ${new_date}</h5>
        <h5 class="gener mt-3"><i class="far fa-clock"></i> ${data.runtime} min</h5>
        <h5 class="gener mt-3"><i class="far fa-star"></i> ${data.vote_average}</h5>
      </div>
      <div class="row" id="">
      <h5 class="categorie mt-3"><i class="far fa-dot-circle"></i> ${data.genres[0].name}</h5>
         <h5 class="categorie mt-3"><i class="far fa-dot-circle"></i> ${data.genres[1].name}</h5>
      </div>
    <p class="movie_review mt-3 pb-3">${data.overview}</p>
    <a href="https://www.youtube.com/" id="trailer" target="_blank"
    data-id="https://www.youtube.com/">Trailer</a>
    <button type="button" id="button" class="btn btn-light btn-block mt-5">
         Watch Now
    </button>
    </div>
      `
  movies_content.innerHTML = output;
  })
  .catch(error => {
    console.log(error);
  })
  fetch(trailer)
  .then(res => res.json())
  .then(data_res => {
    var trailer = document.querySelector('#trailer');
    var key = data_res.results[0].key;
    trailer.href += `watch?v=${key}`;
  })
  .catch(error => {
    console.log(error);
  })
  fetch(similar_movies)
  .then(res_similar => res_similar.json())
  .then(data_similar => {
    let similar = data_similar.results;
    pushContent(similar, inside_similar);
  })
  .catch(error => {
    console.log(error);
  })
  fetch(recommendation_movies)
  .then(res_recomended => res_recomended.json())
  .then(data => {
    let recomended = data.results;
    pushContent(recomended, inside_recomended);
  })
  .catch(error => {
    console.log(error);
  })
}
function pushContent(items, inside_contetnt) {

  let output = '';
  if(items.length >= 20) {
    items.length = 8;
  }
   items.map(items => {
     conditionalDate(items);
     conditionalName(items);
     output += `
     <div class="col-lg-3 col-md-4 col-sm-6 mt-5">
       <div class="card single-item">
       <div class="img-container">
        <a href="#" onClick="movieSelectd(${items.id});"/>
         <img src="https://image.tmdb.org/t/p/w500/${items.poster_path}"
          class="card-img-top store-img" alt="">
        </a>
        </div>
        <div class="card-body">
         <div class="cart-text text-capitalize">
         <h5 class="store-item-name" class="font-weight-blod"> <strong>${name}</strong> </h5>
      <h5 class="stror-item-value">${newDate}</h5>
         </div>
       </div>
       </div>
     </div>
     `
   })
   inside_contetnt.innerHTML = output;
}
function conditionalDate(items) {
  let date =  items.release_date;
  if(date !== undefined) {
    newDate = date.substring(0, 4);
  }
  return newDate;
}
function conditionalName(items) {
  if(items.name !== undefined) {
    name = items.name;
  }
  else if(items.title !== undefined) {
    name = items.title;
  }
  return name;
}
FetchingData(discover);
select.onchange = function (e) {
  let request = e.target.value;
  let new_url = makeUrl(url, `${request}`, api_key);
  FetchingData(new_url);
}
function closeCart(e){
  if(e.target.className === 'fas fa-window-close' ||
    e.target.className === 'cart-overlay transparentBcg') {
      cartOverlay.classList.remove('transparentBcg');
      cartDOM.classList.remove('showCart');
  }
}
function showCart() {
  cartOverlay.classList.add('transparentBcg');
  cartDOM.classList.add('showCart');
}
function eventsFunction() {
  document.addEventListener('click', (e)=> {
      closeCart(e)
  })
  burger_btn.addEventListener('click', (e)=> {
       showCart();
  })
}
eventsFunction();
