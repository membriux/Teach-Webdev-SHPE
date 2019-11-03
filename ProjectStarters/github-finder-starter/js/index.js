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
    let html = document.getElementById('decks');
    $('#decks').empty();
  
    for (var i = 0; i < users.length; i = i + 3) {
      var deck = document.createElement("div");
      deck.setAttribute("class", "card-columns");      

        for (var x = i; x < i + 3; x++) {
          if (x < users.length - i) {
            let { login, avatar_url } = users[x];
            deck.innerHTML += `
                    <div class="card text-center">
                        <div class="card-body">
                            <img
                                src="${avatar_url}"
                                class="rounded-circle"
                                alt="..."
                                height="60px"
                                width="60px"
                            />
                            <br />
                              <h5 class="card-title">
                                  ${login}
                              </h5>
                              <a href='./pages/user.html?user=${login}'>
                              <button type="button" class="btn btn-dark">
                                  More
                              </button>
                              </a>
                        </div>
                    </div>`;
          }
        }
        console.log(deck)
        html.appendChild(deck)

        
    }
}
