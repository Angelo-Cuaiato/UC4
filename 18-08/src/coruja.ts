import { Animal } from './animal.js';

class Coruja extends Animal {
  constructor(nome: string) {
    super(nome);
  }

  emitirSom(): void {
    console.log(`${this.nome} faz: "huuu huuu!"`);
  }

  voar(): void {
    console.log(`${this.nome} está voando silenciosamente.`);
  }

  eat(): void {
    console.log(`${this.nome} está comendo um rato.`);
  }
}

export { Coruja };