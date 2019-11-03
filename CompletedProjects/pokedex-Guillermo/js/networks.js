class Networks {


    // ––––––––– TODO:

    // ––––––––– TODO: Get JSON data from internet
    static getJSON(callback) {

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


    // ––––––––– TODO: Retrieve all pokemon data and add to HTML
    static fetchAllPokemon() {
        this.getJSON(function(response) {
            // Parse JSON string into object
            var actual_JSON = JSON.parse(response);
            hideLoading(); // Data has been loading, stop showing loading animation

            actual_JSON.map(pokemon => {
                //Create type labels for pokemon
                let pokemonLabels = createTypeLabels(pokemon.type)

                //Go through each pokemon, create a pokemon card, add card to html
                addPokemonHtml(
                    pokemon.name.english,
                    pokemon.id,
                    pokemonLabels
                );

            });
        });
    }

    // ––––––––– TODO: Fetch specific pokemon that was selected and display
    //                 it's information
    static fetchPokemonDetails(pokemonId) {
        console.log('fetching');
        this.getJSON(function(response) {
            // Parse JSON string into object
            var actual_JSON = JSON.parse(response);
            hideLoading();
            let pokemon = actual_JSON[pokemonId - 1]; // Arrays are 0 based, so we must subtract 1 from id.
            // console.log(pokemon)
            addPokemonHtml(
                pokemon.name.english,
                pokemon.id,
                createTypeLabels(pokemon.type),
                pokemon.base
            );
        });
    }
}


// After Data has been loaded, stop showing the loading animation
function hideLoading() {
    let loading = document.getElementsByClassName('loading')[0];
    loading.classList.add('hide-loading');
}
