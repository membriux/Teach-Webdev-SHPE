class Networks {
    static fetchPokemon() {
        loadJSON(function(response) {
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
}