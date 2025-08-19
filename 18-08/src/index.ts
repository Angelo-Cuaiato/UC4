


import { Dog } from './dog.js';
import { Coruja } from './coruja.js';
import { Crocodile } from './crocodile.js';

// Função para criar instâncias de todos os animais disponíveis
function criarAnimais(): Array<{ eat: () => void }> {
	return [
		new Dog('Rex'),
		new Coruja('Bubu'),
		new Crocodile('Dundee')
	];
}

// Exercício 2: Generalização
const animais = criarAnimais();
for (const animal of animais) {
	animal.eat();
}