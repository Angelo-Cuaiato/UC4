import { Dog } from './dog.js';
import { Coruja } from './coruja.js';
import { Crocodile } from './crocodile.js';

// Função para criar instâncias de todos os animais disponíveis
function criarAnimais(): Array<{ eat: () => void; emitirSom: () => void }> {
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

// Novo trecho: exibe o som de cada animal
console.log('\nAgora cada animal vai emitir seu som:');
for (const animal of animais) {
    animal.emitirSom();
}

// Novo trecho: cada animal faz sua ação especial, se existir
console.log('\nAções especiais dos animais:');
for (const animal of animais) {
    if ('voar' in animal && typeof animal['voar'] === 'function') {
        // @ts-ignore
        animal.voar();
    }
    if ('nadar' in animal && typeof animal['nadar'] === 'function') {
        // @ts-ignore
        animal.nadar();
    }
}

// Novo trecho: apresenta todos os animais com uma mensagem personalizada
console.log('\nApresentação dos animais:');
for (const animal of animais) {
    if ('nome' in animal) {
        // @ts-ignore
        console.log(`Este é o(a) ${animal.nome}, um dos nossos incríveis animais!`);
    } else {
        console.log('Temos um animal incrível!');
    }
}

// NOVO: Escolha aleatória de um animal para ser o "Animal do Dia"
const animalDoDia = animais[Math.floor(Math.random() * animais.length)];
console.log('\n🐾 O Animal do Dia é:');
// @ts-ignore
if ('nome' in animalDoDia) {
    // @ts-ignore
    console.log(`${animalDoDia.nome}! Parabéns!`);
    animalDoDia.emitirSom();
    animalDoDia.eat();
    if ('voar' in animalDoDia && typeof animalDoDia['voar'] === 'function') {
        // @ts-ignore
        animalDoDia.voar();
    }
    if ('nadar' in animalDoDia && typeof animalDoDia['nadar'] === 'function') {
        // @ts-ignore
        animalDoDia.nadar();
    }
} else {
    console.log('Temos um animal incrível do dia!');
}