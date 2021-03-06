class GitHub {
  constructor() {
      this.client_id = 'd9308aacf8b204d361fd';
      this.client_secret = '62551cc02cee983fff0bac41baf170eb5a312c1c';
      this.repos_count = 5;
      this.repos_sort = 'created: asc';
  }

 async getUser(user) {
 const profileResponse = await fetch(`https://api.github.com/users/${user}
   ?client_id=${this.client_id}&client_secret=${this.client_secret}`);

   const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?
     per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}
     &client_secret=${this.client_secret}`);

   const profileData = await profileResponse.json();
    const reposeData = await repoResponse.json();
   return {
    profileData, reposeData
   };
 }
}
