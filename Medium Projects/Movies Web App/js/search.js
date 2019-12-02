// API elements
let movie_url = `https://api.themoviedb.org/3`;
let movie_target = `/search/movie`;
let movie_api_key = `?api_key=ea9e6ac8643082244c38fae131ea1769`;
let movie_query_request = `&query=`;
const movie_img_request = `https://image.tmdb.org/t/p/w500`;

// Ui elements
const search_field = document.querySelector('#search_field');
const form_group = document.querySelector('.form-group');
const search_content = document.querySelector('#search_content');
form_group.addEventListener('submit', (e)=> {
  let movie_name = search_field.value;
   let push_url = movie_url + movie_target + movie_api_key + movie_query_request;
   getmovieName(push_url, movie_name);
  search_field.value = '';
  e.preventDefault();
})
function getmovieName(query, name) {
   fetch(query + name)
   .then(res => res.json())
   .then(data => {
     let movies_name = data.results;
     pushContent(movies_name);
   })
   .catch(error => {
     console.log(error);
   })
}

function pushContent(movies_name) {
  let output = '';
  movies_name.map(items => {
    conditionalDate(items);
    conditionalName(items);
    if(items.poster_path !== null) {
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
  }
    search_content.innerHTML = output;
  })
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
