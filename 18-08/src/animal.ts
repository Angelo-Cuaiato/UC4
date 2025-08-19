// Classe base Animal
class Animal {
  protected nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  emitirSom(): void {
    console.log(`${this.nome} faz um som.`);
  }

  eat(): void {
    console.log(`${this.nome} está comendo.`);
  }
}

export { Animal };