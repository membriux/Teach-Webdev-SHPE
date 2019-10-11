let row = document.getElementsByClassName('row')[0];

let urlParams = new URLSearchParams(window.location.search);
let pokemonId = urlParams.get('id');

//Javascript object to for pokemon types
let typeMappings = {
    Normal: 'type-normal',
    Fire: 'type-fire',
    Water: 'type-water',
    Electric: 'type-electric',
    Grass: 'type-grass',
    Ice: 'type-ice',
    Fighting: 'type-fighting',
    Poison: 'type-poison',
    Ground: 'type-ground',
    Flying: 'type-flying',
    Psychic: 'type-psychic',
    Bug: 'type-bug',
    Rock: 'type-rock',
    Ghost: 'type-ghost',
    Fairy: 'type-fairy',
    Dragon: 'type-dragon',
    Dark: 'type-dark',
    Steel: 'type-steel'
};

function loadPokemon(name, id, types, stats) {
    row.innerHTML +=
        `<div class="col-md-4 col-sm-6 col-xs-12"> \
            <div class="jumbotron"> \
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
                                }%" role="progressbar" aria-valuenow="${
        stats.Attack
    }" aria-valuemin="0" aria-valuemax="100"></div>
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

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();

    xobj.overrideMimeType('application/json');

    xobj.open('GET', './Database/pokedex.json', true); // Replace 'my_data' with the path to your file

    xobj.onreadystatechange = function() {
        if (xobj.readyState === 4 && xobj.status === 200) {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function hideLoading() {
    let loading = document.getElementsByClassName('loading')[0];
    loading.classList.add('hide-loading');
}

function init() {
    loadJSON(function(response) {
        // Parse JSON string into object
        var actual_JSON = JSON.parse(response);
        hideLoading();
        let pokemon = actual_JSON[pokemonId - 1]; // Arrays are 0 based, so we must subtract 1 from id.
        loadPokemon(
            pokemon.name.english,
            pokemon.id,
            createTypeLabels(pokemon.type),
            pokemon.base
        );
    });
}

init();
