eventsFunction();

const inside_tv = document.querySelector('#inside_tv');
const select_tv = document.querySelector('#selected_tv');


select_tv.onchange = function (e) {
    let request = e.target.value;
    let new_url = makeUrl(url, `${request}`, api_key);
    console.log(new_url);
    defualtData(new_url)
}
let another_url = url + `/tv/top_rated` + api_key;
defualtData(another_url)
function defualtData(another_url) {
  let output = '';
    fetch(another_url)
    .then(response => response.json())
    .then(data => {
       let showes = data.results;
       showes.map(items => {
         conditionalDate(items);
         conditionalName(items);
         output += `
         <div class="col-lg-3 col-md-4 col-sm-6 mt-5">
           <div class="card single-item">
           <div class="img-container">
            <a href="#" onClick="tvSelectd(${items.id});"/>
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

       inside_tv.innerHTML = output
    })
    .catch(error => {
    })
}

function tvSelectd(id) {
  sessionStorage.setItem('movieId', id);
  window.location = 'showContent.html';
  return false;
}
function getShow() {
  let tv_show = sessionStorage.getItem('movieId');
  let recomend_show = `/tv/${tv_show}/recommendations`;
  let details_show = `/tv/${tv_show}`;
  let vedio_show = `/tv/${tv_show}/videos`

  let recomend_tv = makeUrl(url, recomend_show, api_key);
  let details_tv = makeUrl(url, details_show, api_key);
  let vedio_tv = makeUrl(url, vedio_show, api_key);
  FetchingShows(details_tv, vedio_tv);


}
function FetchingShows(details_tv, vedio_tv) {
    fetch(details_tv)
   .then(response => response.json())
   .then(data => {

     seasons(data.seasons, data.poster_path, data.id);
     let output = '';
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
       <h3 class="movie_title text-uppercase">${data.name}</h3>
       <div class="row" id="movie_info">
         <h5 class="release_date mt-3"> 2019</h5>
         <h5 class="gener mt-3"><i class="far fa-dot-circle"></i> ${data.genres[0].name}</h5>
         <h5 class="gener mt-3"><i class="far fa-star"></i> ${data.vote_average}</h5>
       </div>
     <p class="movie_review mt-3 pb-3">${data.overview}</p>
    <a href="https://www.youtube.com/" id="trailer" target="_blank" data-id="https://www.youtube.com/">Trailer</a>
     <a href="${data.homepage}" id="button" target="_blank" class="btn btn-light btn-block mt-5">
          Watch Now
       </a >
     </div>
     `
     movies_content.innerHTML = output;
   })
   .catch(error => {
     console.log(error);
   })
   fetch(vedio_tv)
   .then(response => response.json())
   .then(data => {
     var trailer = document.querySelector('#trailer');
     var key = data.results[0].key;
     trailer.href += `watch?v=${key}`;
   })
   .catch(error => {
     console.log(error);
   })
}
function pushId(id, target) {
  console.log(id, target);
  sessionStorage.setItem('saeson', id);
  window.location = 'seasons.html';
  return false;
}
function getSeasons() {
  let target = sessionStorage.getItem('movieId');
  let id = sessionStorage.getItem('saeson');

  let real_season = `/tv/${target}/season/${id}`;
  let url_seasons = makeUrl(url, real_season, api_key);
  fetchingSeasons(url_seasons)
}
function fetchingSeasons(season) {
  const inside_episode = document.querySelector('#inside_episode');
  let output = '';
   fetch(season)
  .then(response => response.json())
  .then(data => {
   let episodes = data.episodes;
   episodes.map(items => {
     output += `
     <div class="col-10 col-md-6 mx-auto align-self-center my-5 right">
       <div class="about-img-container-right">
       <img src="https://image.tmdb.org/t/p/w500${items.still_path}" alt="" id="img_episode">
       </div>
     </div>
    <div class="col-10 col-md-6 align-self-center mx-auto my-5">
     <h4 class="text-uppercase" id="name_episode"> <span>${items.episode_number}. </span>
     ${items.name}</h4>
       <p class="my-5" id="overview_episode">
         ${items.overview}
       </p>
       <h5 id="date_episode">${items.air_date}</h5>
       <hr class="mt-5 line">
     </div>
     `
   })
   inside_episode.innerHTML = output

  })
  .catch(error => {
    console.log(error);
  })
}
function seasons(season, poster, id) {
  let output = '';
  season.map((items, index) => {
    let season_number = items.name;
    let seasonName = season_number.substring(season_number.length - 1)
    let photo ;
    if(items.poster_path === null) {
      photo = poster;
    }
    else {
      photo = items.poster_path;
    }
      if(items.name !== 'Specials') {
     let realId = season_number.substring(season_number.length - 1);
      output += `
        <div class="col-lg-3 col-md-4 col-sm-6 mt-5">
         <div class="card single-item">
         <div class="img-container">
         <a href="#" onclick="pushId(${realId}, ${id})"/>
           <img src="https://image.tmdb.org/t/p/w500/${photo}"
            class="card-img-top store-img" alt="">
          </a>
          </div>
          <div class="card-body">
           <div class="cart-text text-capitalize">
             <h5 class="store-item-name" class="font-weight-blod"> <strong>${items.name}</strong> </h5>
          <h5 class="stror-item-value">${items.air_date}</h5>
           </div>
         </div>
         </div>
        </div>
         `
      }
    let seasons_container = document.querySelector('#seasons_container');
    seasons_container.innerHTML = output;
   })
}
getShow();
