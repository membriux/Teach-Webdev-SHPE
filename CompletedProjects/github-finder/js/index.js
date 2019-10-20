// bind form to submit action
$('#search').submit(function(event) {
    event.preventDefault();
    Network.searchUsers(event.target.children[0].value);
    //clear form
    $('#search-text').val('');
});

// STEP 2
// Populate html with users
function displayUsers(users) {
    let html = document.getElementsByClassName('accounts')[0];
    $('.accounts').empty();
    for (var i = 0; i < users.length; i++) {
        let { login, avatar_url } = users[i];
        html.innerHTML += `
                <div class="col-md-4 col-sm-6 col-xs-12 pb-4 ">
                    <div class="card " style="width: 18rem;">
                        <div class="card-body">
                            <div class="text-center">
                                <img
                                    src="${avatar_url}"
                                    class="rounded-circle"
                                    alt="..."
                                    height="60px"
                                    width="60px"
                                />
                            </div>
                            <br />
                            <div class="text-center">
                                <h5 class="card-title text-center">
                                    ${login}
                                </h5>
                                <a href='./pages/user.html?user=${login}'>
                                <button type="button" class="btn btn-dark">
                                    More
                                </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>`;
    }
}
