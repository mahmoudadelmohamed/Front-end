class UI {
  constructor()  {
      this.profile = document.querySelector('#profile');
  }
showprofile(user) {
// Show user informations
this.profile.innerHTML = `
 <div class="card card-body mb-3">
     <div class="row">
         <div class="col-3">
           <img class="img-fluid mb-2" src="${user.avatar_url}"
             <button class="mb-4">
             <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">
               View Profile
             </a>
             </button>
         </div>
         <div class="col-9">
         <span class="badge badge-primary">Public Repos: ${user.public_repos} </span>
         <span class="badge badge-secendary">Public Gists: ${user.public_gists} </span>
         <span class="badge badge-success">Followers: ${user.followers} </span>
         <span class="badge badge-info">Following: ${user.following} </span>
         <ul class="list-group mt-4">
           <li class="list-group-item">Company: ${user.company} </li>
           <li class="list-group-item">Wbsite/Blog: ${user.blog} </li>
           <li class="list-group-item">Location: ${user.location} </li>
           <li class="list-group-item">Member since: ${user.created} </li>
         </ul>
         </div>
     </div>
 </div>
 <h3 class="page-heading mb-3">Latest Repos</h3>
 <div id="repos"> </div> `
}
// Show user repos
showrepos(repos) {
  let output = '', rep_len = repos.length;
  if(rep_len > 5) {
    rep_len = 5
  }

  for (var i = 0; i < rep_len; i++) {
    output += `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-6">
            <a href="${repos[i].html_url}" target="_blank"> ${repos[i].name} </a>
          </div>
          <div class="col-md-6">
          <span class="badge badge-primary">Stars: ${repos[i].stargazer_count} </span>
          <span class="badge badge-secendary">Watchers: ${repos[i].watchers} </span>
          <span class="badge badge-success">Forks: ${repos[i].forms_count} </span>
          </div>
        </div>
       </div> `
     }
     document.getElementById('repos').innerHTML = output;
}


  // Show Alert Message
  showAlert(message, classname) {
      this.clearAlert();
    // Creat div
      const div = document.createElement('div');
      // Add classname
      div.className = classname;
      // add message
      div.appendChild(document.createTextNode(message));
      // Get Parent
      const container = document.querySelector('.searchContainer');
      // Get SearchBox
      const search = document.querySelector('.search');
      // Insert Alert
      container.insertBefore(div, search);

      // Timeout after 3 sec
      setTimeout(() => {
           this.clearAlert();
      }, 3000);
  }
// Clear Alert
clearAlert() {
  const currentAlert = document.querySelector('.alert');
   if(currentAlert) {
     currentAlert.remove();
   }
}
  // Clear profile
  clearinterface() {
     this.profile.innerHTML = '';
  }
}
