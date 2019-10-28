class Network {
    // STEP 1
    // Send GET request to retreive github users
    static searchUsers(query) {
      
    }

    // STEP 3
    // Send GET request to retreive single github user
    static getUser(username) {

    }

    // STEP 5
    // Send GET request to retreive single user repos
    static getUserRepos(username) {
      
    }

}

// After Data has been loaded, stop showing the loading animation
function hideLoading() {
    let loading = document.getElementsByClassName('loading')[0];
    loading.classList.add('hide-loading');
}
