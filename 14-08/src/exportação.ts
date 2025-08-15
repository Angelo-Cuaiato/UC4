export class Pessoa {
  // Propriedade privada para armazenar a idade
  private _idade: number;

  constructor(idade: number) {
    if (idade >= 0) {
      this._idade = idade;
    } else {
      throw new Error("A idade não pode ser negativa.");
    }
  }

  // Getter para a idade
  getIdade(): number {
    return this._idade;
  }

  // Setter para a idade com validação
  setIdade(novaIdade: number) {
    if (novaIdade >= 0) {
      this._idade = novaIdade;
    } else {
      throw new Error("A idade não pode ser negativa.");
    }
  }
}

// Exemplo de uso
const pessoa = new Pessoa(30);

try {
  pessoa.setIdade(-5); // Vai lançar erro
} catch (error) {
  console.error((error as Error).message);
}

// Verificando a idade atual
console.log(`Idade atual: ${pessoa.getIdade()}`); // Saída: