// bind form to submit action
$('#search').submit(function(event) {
    event.preventDefault();
    Network.searchUsers(event.target.children[0].value);
});

// Populate html with users
function displayUsers(users) {
    for (var i = 0; i < users.length; i++) {
        let { login, avatar_url } = users[i];
        $('.accounts').append(
            `<div class="col-md-5 col-lg-4 col-sm-6">
                <div class="card" style="width: 18rem;">
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
                            <button type="button" class="btn btn-dark">
                                Dark
                            </button>
                        </div>
                    </div>
                </div>
            </div>`
        );
    }
}
