// Classe base Animal
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    emitirSom() {
        console.log(`${this.nome} faz um som.`);
    }
    eat() {
        console.log(`${this.nome} está comendo.`);
    }
}
export { Animal };
//# sourceMappingURL=animal.js.map