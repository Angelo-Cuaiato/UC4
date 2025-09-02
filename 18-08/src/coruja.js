import { Animal } from './animal.js';
class Coruja extends Animal {
    constructor(nome) {
        super(nome);
    }
    emitirSom() {
        console.log(`${this.nome} faz: "huuu huuu!"`);
    }
    voar() {
        console.log(`${this.nome} está voando silenciosamente.`);
    }
    eat() {
        console.log(`${this.nome} está comendo um rato.`);
    }
}
export { Coruja };
//# sourceMappingURL=coruja.js.map