

import { Dog } from './dog.js';
import { Coruja } from './coruja.js';
import { Crocodile } from './crocodile.js';

// Exercício 2: Generalização
const animais: Array<Dog | Coruja | Crocodile> = [
	new Dog('Rex'),
	new Coruja('Bubu'),
	new Crocodile('Dundee')
];

for (const animal of animais) {
	animal.eat();
}