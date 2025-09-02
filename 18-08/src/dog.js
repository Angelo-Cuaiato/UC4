import { Animal } from './animal.js';
// Classe intermediária PaiDog
class PaiDog extends Animal {
    constructor(nome) {
        super(nome);
    }
    emitirSom() {
        console.log(`${this.nome} (PaiDog) faz um som grave.`);
    }
}
// Classe Dog herda de PaiDog
class Dog extends PaiDog {
    constructor(nome) {
        super(nome);
    }
    emitirSom() {
        console.log(`${this.nome} barks.`);
    }
    eat() {
        console.log(`${this.nome} está comendo ração de cachorro.`);
    }
}
export { Dog, PaiDog };
//# sourceMappingURL=dog.js.map