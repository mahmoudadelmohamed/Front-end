const contries = document.querySelector('#countries');
const toggle = document.querySelector('#toggle');
const filter = document.querySelector('#filter');
const regionFilter = document.querySelectorAll('li');
const search = document.querySelector('#search');
const modle = document.querySelector('#modle');
const closeBtn = document.querySelector('#close');

getCountries();
async function getCountries() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const countries = await res.json();
  displayCountries(countries)
  // console.log(countries);
}

function displayCountries(countries) {
  countries.map(item => {
    // console.log(item.name, item.flag, item.population);
    const countElment = document.createElement('div');
    countElment.classList.add('cart');
    countElment.innerHTML = `
      <div class="cart-header">
        <img src="${item.flag}" alt="Egypt">
      </div>
      <div class="cart-body">
        <h3 class="country-name">${item.name}</h3>
        <p><strong>Population:</strong> ${item.population}</p>
        <p class="country-region"><strong>Region:</strong> ${item.region} </p>
        <p><strong>Capital:</strong> ${item.capital} </p>
      </div>
    `;
    countElment.addEventListener('click', ()=> {
       showCountryDetails(item);
        modle.style.display = 'flex';
    })
    contries.appendChild(countElment);
  })
}

function showCountryDetails(country) {
 const modleBody = document.querySelector('.modle-body');
 const modleImg = document.querySelector('#img');
 modleImg.src = country.flag;

   modleBody.innerHTML = `

     <h2>${country.name}</h2>
     <p><strong>Native Name:</strong> ${country.nativeName}</p>
     <p><strong>Population:</strong> ${country.population}</p>
     <p><strong>Region:</strong> ${country.region}</p>
     <p><strong>Sub Region:</strong> ${country.subregion}</p>
     <p><strong>Top Level Domain:</strong> ${country.topLevelDomain[0]}</p>
     <p><strong>Currencies:</strong> ${country.topLevelDomain[0]}</p>
     <p><strong>Capital:</strong> ${country.capital} </p>
   `

  console.log(country);
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
})
filter.addEventListener('click', () => {
    filter.classList.toggle('open');
})
closeBtn.addEventListener('click', () => {
    modle.style.display = 'none';
})
search.addEventListener('input', e => {
  const { value } = e.target;
  const countryName = document.querySelectorAll('.country-name');
  countryName.forEach(name => {
    if(name.innerText.toLowerCase().includes(value.toLowerCase())) {
      name.parentElement.parentElement.style.display = 'block';
    }
    else {
      name.parentElement.parentElement.style.display = 'none';
    }
  })
 })
 regionFilter.forEach(filter => {
   filter.addEventListener('click', e => {
     let value = filter.innerText;
     const countryRegion = document.querySelectorAll('.country-region');

     countryRegion.forEach(region => {
       console.log(value);
       if(region.innerText.includes(value) || value === 'All') {
         region.parentElement.parentElement.style.display = 'block';
       }
       else {
         region.parentElement.parentElement.style.display = 'none';
       }
   })
 })
 });
