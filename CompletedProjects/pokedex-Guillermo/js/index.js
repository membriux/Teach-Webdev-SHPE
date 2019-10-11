//Get array of Nodes with class 'row'
let row = document.getElementsByClassName('row')[0];

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

//
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

function createTypeLabels(types) {
    let labels = [];
    for (var i = 0; i < types.length; i++) {
        labels.push(
            `<span class="badge ${typeMappings[types[i]]} mr-1">${
                types[i]
            }</span>`
        );
    }
    return labels;
}

function loadJSON(callback) {
    
    var xobj = new XMLHttpRequest(); 
    xobj.overrideMimeType('application/json'); 

    xobj.open('GET', 'https://api.myjson.com/bins/6vdpy', true); // Replace 'my_data' with the path to your file

    xobj.onreadystatechange = function() {
        // readyState === 4, operation complete. https://stackoverflow.com/questions/30522565/what-is-meaning-of-xhr-readystate-4
        // status === 200, request has succeeded. https://httpstatuses.com/200
        if (xobj.readyState === 4 && xobj.status === 200) {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send();
}

function hideLoading() {
    //After Data has been loaded, stop showing the loading animation
    let loading = document.getElementsByClassName('loading')[0];
    loading.classList.add('hide-loading');
}

function loadPokemon() {
    console.log(Networks.fetchPokemon())
}

function init() {
    loadPokemon();
}

init();
