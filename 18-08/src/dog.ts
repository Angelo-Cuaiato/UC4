import { Animal } from './animal.js';

// Classe intermediária PaiDog
class PaiDog extends Animal {
  constructor(nome: string) {
    super(nome);
  }

  emitirSom(): void {
    console.log(`${this.nome} (PaiDog) faz um som grave.`);
  }
}

// Classe Dog herda de PaiDog
class Dog extends PaiDog {
  constructor(nome: string) {
    super(nome);
  }

  emitirSom(): void {
    console.log(`${this.nome} barks.`);
  }

  eat(): void {
    console.log(`${this.nome} está comendo ração de cachorro.`);
  }
}

export { Dog, PaiDog };
