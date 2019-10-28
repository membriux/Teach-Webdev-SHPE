class Network {
    // STEP 1
    // Send GET request to retreive github users
    static searchUsers(query) {
        $.get(`https://api.github.com/search/users?q=${query}`, function(data) {
            //If success, populate html
            displayUsers(data.items);
        });
    }

    // STEP 3
    // Send GET request to retreive single github user
    static getUser(username) {
        $.get(`https://api.github.com/users/${username}`, function(data) {
            // if success, populate user html
            displaySingleUser(data);
        });
    }

    // STEP 5
    // Send GET request to retreive single user repos
    static getUserRepos(username) {
        $.get(
            `https://api.github.com/users/${username}/repos?per_page=5`,
            function(data) {
                displayUserRepos(data);
            }
        );
    }
}

// After Data has been loaded, stop showing the loading animation
function hideLoading() {
    let loading = document.getElementsByClassName('loading')[0];
    loading.classList.add('hide-loading');
}
