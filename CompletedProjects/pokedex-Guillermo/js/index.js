//Get array of Nodes with class 'row'
let row = document.getElementsByClassName('row')[0];

function loadPokemon(name, id, types) {
    row.innerHTML +=
        `<div class="col-md-3 col-sm-6 col-xs-12 bottom"> \
        <div class="card"> \
            <img \
                src="./Database/thumbnails/${id}.png" \
                class="card-img" \
                width="50"
                height"50"
                alt="..." \
            /> \
            <div class="card-body"> \
                <p># ${id}</p>
                <p class="card-title">${name}</p> \
                <hr>` +
        types.map(type => type).join('') +
        '</div> \
                </div> \
                </div>';
}

function createTypeLabels(types) {
    let result = [];
    for (var i = 0; i < types.length; i++) {
        result.push(
            `<span class="badge badge-primary pr-2">${types[i]}</span>`
        );
    }
    return result;
}

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();

    xobj.overrideMimeType('application/json');

    xobj.open('GET', './Database/pokedex.json', true); // Replace 'my_data' with the path to your file

    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == '200') {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function init() {
    loadJSON(function(response) {
        // Parse JSON string into object
        var actual_JSON = JSON.parse(response);
        actual_JSON.map(pokemon => {
            loadPokemon(
                pokemon.name.english,
                pokemon.id,
                createTypeLabels(pokemon.type)
            );
        });
    });
}

init();
