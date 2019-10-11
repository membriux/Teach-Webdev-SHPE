let row = document.getElementsByClassName('row')[0];

let urlParams = new URLSearchParams(window.location.search);
let pokemonId = urlParams.get('id');


function addPokemonHtml(name, id, types, stats) {
    row.innerHTML +=
        `<div class="col-md-4 col-sm-6 col-xs-12"> \
            <div class="jumbotron pokemon-details"> \
                <img \
                    src="./Database/thumbnails/${id}.png" \
                    class="card-img rounded" \
                    alt="..." \
                /> \
                <div class=""> \
                    <p>#${id}</p>
                    <p class="">${name}</p> \
                    <hr>` +
                    types.join('') +
                '</div> \
            </div> \
        </div>';

    //Add HP Bar
    row.innerHTML += `<div class="col-md-8 col-sm-6 col-xs-12"> \
                        <div class="jumbotron"> \
                            <h3>Stats</h3>
                            <hr> \
                            <p>HP</p>
                            <div class="progress">
                                <div class="progress-bar bg-success" style="width: ${
                                    stats.HP
                                }%" role="progressbar" aria-valuenow="${stats.HP}"
                                aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                            <p>Attack</p>

                            <div class="progress">
                                <div class="progress-bar bg-success" style="width: ${
                                    stats.Attack
                                }%" role="progressbar" aria-valuenow="${stats.Attack}"
                                aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p>Defense</p>
                            <div class="progress">
                                <div class="progress-bar bg-success" style="width: ${
                                    stats.Defense
                                }%" role="progressbar" aria-valuenow="${
        stats.Defense
    }" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p>Sp. Attack</p>
                            <div class="progress">
                                <div class="progress-bar bg-success" style="width: ${
                                    stats['Sp. Attack']
                                }%" role="progressbar" aria-valuenow="${
        stats['Sp. Attack']
    }" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p>Sp. Defense</p>
                            <div class="progress">
                                <div class="progress-bar bg-success" style="width: ${
                                    stats['Sp. Defense']
                                }%" role="progressbar" aria-valuenow="${
        stats['Sp. Defense']
    }" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p>Speed</p>
                            <div class="progress">
                                <div class="progress-bar bg-success" style="width: ${
                                    stats.Speed
                                }%" role="progressbar" aria-valuenow="${
        stats.Speed
    }" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div> \
                      </div>`;
}

function createTypeLabels(types) {
    let result = [];
    for (var i = 0; i < types.length; i++) {
        result.push(
            `<span class="badge ${typeMappings[types[i]]} mr-1">${
                types[i]
            }</span>`
        );
    }
    return result;
}

// Get all pokemon data from JSON file
function loadPokemon() {
    Networks.fetchPokemonDetails(pokemonId);
}

function init() {
    loadPokemon();
}

init();
