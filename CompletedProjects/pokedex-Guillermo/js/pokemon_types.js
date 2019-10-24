

// EXPLAIN THE MAPPING BEHIND THE POKEMON
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

// Looks at types of pokemon and creates tags of each pokemon type
// i.e. Bulbasaur: Type; [Grass, Poison]
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
