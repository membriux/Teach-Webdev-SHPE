//Get array of Nodes with class 'row'
let row = document.getElementsByClassName('row')[0];

// Add html data to main page fetched from JSON file
// ––––––––– EXPLAIN: how to use variables in strings for auto-generated
//                    html data 
function addPokemonHtml(name, id, types) {

    row.innerHTML +=
        `<div class="col-md-4 col-sm-6 col-xs-12 bottom"> \
            <a href="./pokemon.html?id=${id}"> \
            <div class="jumbotron pokemon"> \
                <img \
                    src="./Database/thumbnails/${id}.png" \
                    class="card-img rounded" \
                    alt="..." \
                /> \
                <div class=""> \
                    <p>#${id}</p>
                    <p class="">${name}</p> \
                    <hr>` +
                    types.join('') + // Need to join this html together as a string, since its an array.
                '</div> \
                </a> \
            </div> \
        </div>';
}

// Get all pokemon data from JSON file
function loadPokemon() {
    Networks.fetchAllPokemon();
}

function init() {
    loadPokemon();
}

init();
