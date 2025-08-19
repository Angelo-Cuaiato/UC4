import { Animal } from './animal.js';

// Classe Crocodile herda de Animal
class Crocodile extends Animal {
  constructor(nome: string) {
    super(nome);
  }

  emitirSom(): void {
    console.log(`${this.nome} faz: "GRRRR!"`);
  }

  nadar(): void {
    console.log(`${this.nome} está nadando.`);
  }

  eat(): void {
    console.log(`${this.nome} está comendo carne.`);
  }
}

export { Crocodile };
