let urlParams = new URLSearchParams(window.location.search);
let user = urlParams.get('user');

// STEP 4
function displaySingleUser(user) {
    let {
        avatar_url,
        location,
        bio,
        blog,
        company,
        name,
        followers,
        following,
        public_gists,
        public_repos,
        html_url,
        login
    } = user;

    // setting up user info as html
    $('img').attr('src', avatar_url);
    $('#name').html(name);
    $('#location').html('location: ' + location);
    $('#desc').html(bio);
    $('.github-profile').attr('href', html_url);
    $('#username').html(login);
    $('#company').html(company);
    $('#web').html(blog);
    $('#followers').html('Followers: ' + followers);
    $('#following').html('Following: ' + following);
    $('#repos').html('Public Repos: ' + public_repos);
    $('#gists').html('Public Gists: ' + public_gists);
}

// STEP 6
// Display all the repos as html
function displayUserRepos(repos) {
    console.log(repos);
}

// A $( document ).ready() block.
// jQuery detects this state of readiness for you
$(document).ready(function() {
    Network.getUser(user);
    Network.getUserRepos(user);
});
