class Network {
    // STEP 1
    // Send GET request to retreive github users
    static searchUsers(query) {
        $.get(`https://api.github.com/search/users?q=${query}`, function(data) {
            //If success, populate html
            displayUsers(data.items);
        });
    }

    static getUser(username) {
        $.get(`https://api.github.com/users/${username}`, function(data) {
            // if success, populate user html
            displaySingleUser(data.items);
        });
    }
}
