const button = document.querySelector('#button');
const picture = document.querySelector('#imageDesplay');
const profile = document.querySelector('#profileDisplay');
const data = [
  {
     name: 'John Doe',
     age: 32,
     gender: 'Male',
     lookingfor: 'Female',
     location: 'Boston MA',
     image:'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
     name: 'Jen Smith',
     age: 26,
     gender: 'Female',
     lookingfor: 'Male',
     location: 'Miami FL',
     image:'https://randomuser.me/api/portraits/women/32.jpg'
  },
  {
     name: 'William Johnson',
     age: 38,
     gender: 'Male',
     lookingfor: 'Female',
     location: 'Lynn MA',
     image:'https://randomuser.me/api/portraits/men/33.jpg'
  },
  {
     name: 'Emma',
     age: 33,
     gender: 'Female',
     lookingfor: 'Male',
     location: 'Russian',
     image:'https://randomuser.me/api/portraits/women/33.jpg'
  },
  {
     name: 'Allan Turing',
     age: 27,
     gender: 'Male',
     lookingfor: 'Female',
     location: 'Amirica',
     image:'https://randomuser.me/api/portraits/men/34.jpg'
  },
  {
     name: 'Mia',
     age: 25,
     gender: 'Female',
     lookingfor: 'Male',
     location: 'Canada',
     image:'https://randomuser.me/api/portraits/women/34.jpg'
  },
  {
     name: 'Loe Moderatice',
     age: 25,
     gender: 'Male',
     lookingfor: 'Female',
     location: 'australian',
     image:'https://randomuser.me/api/portraits/men/35.jpg'
  }
];
let counter = 0;
button.addEventListener('click', ()=> {
  if(counter  < data.length) {
    picture.innerHTML = `
      <img src="${data[counter].image}">
    `
    profile.innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${data[counter].name} </li>
        <li class="list-group-item">Age: ${data[counter].age} </li>
        <li class="list-group-item">Location: ${data[counter].location} </li>
        <li class="list-group-item">Preference: ${data[counter].gender} looking for ${data[counter+1].gender}</li>
      </ul>
    `
  }

  console.log(data[counter].name);
  counter ++;

})
