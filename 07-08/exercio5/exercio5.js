var pokemons = ['Pikachu', 'Charmander', 'Bulbasaur', 'Mewtwo', 'Squirtle'];
var i = 0;
while (i < pokemons.length) {
    if (pokemons[i] === 'Mewtwo') {
        console.log('Pokémon lendário encontrado: Mewtwo!');
        break;
    }
    else {
        console.log("Capturando ".concat(pokemons[i]));
    }
    i++;
}
