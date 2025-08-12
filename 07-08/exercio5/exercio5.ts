const pokemons = ['Pikachu', 'Charmander', 'Bulbasaur', 'Mewtwo', 'Squirtle'];

let i = 0;
while (true) {
  if (pokemons[i] === 'Mewtwo') {
    console.log('Pokémon lendário encontrado: Mewtwo!');
    break;
  } else {
    console.log(`Capturando ${pokemons[i]}`);
  }
  i++;
  if (i >= pokemons.length) {
    break;
  }
}