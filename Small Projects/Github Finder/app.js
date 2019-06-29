// intio GitHub
const github = new GitHub;
// intio ui
const ui = new UI;
// Search input
const searchUser = document.querySelector('#searchUser');
const profile = document.querySelector('#profile');
// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;
  if(userText !== '') {
      github.getUser(userText)
      .then(data  => {
        if(data.profileData.message === 'Not Found') {
          ui.showAlert('User Not Found!', 'alert alert-danger');
        }
        else {
        // Show Profile
        ui.showprofile(data.profileData);
        ui.showrepos(data.reposeData);
        }
      });
  }
  else {
    ui.clearinterface();
    // Clear Profile
  }
})
