import { Animal } from './animal.js';
// Classe Crocodile herda de Animal
class Crocodile extends Animal {
    constructor(nome) {
        super(nome);
    }
    emitirSom() {
        console.log(`${this.nome} faz: "GRRRR!"`);
    }
    nadar() {
        console.log(`${this.nome} está nadando.`);
    }
    eat() {
        console.log(`${this.nome} está comendo carne.`);
    }
}
export { Crocodile };
//# sourceMappingURL=crocodile.js.map