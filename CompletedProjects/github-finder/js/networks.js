class Network {
    // STEP 1
    // Send GET request to retreive github users
    static searchUsers(username) {
        let result = null;
        $.get(`https://api.github.com/search/users?q=${username}`, function(
            data
        ) {
            //If success, populate html
            displayUsers(data.items);
        });
    }
}
