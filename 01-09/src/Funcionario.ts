export abstract class Funcionario {
  constructor(public nome: string) {}

  abstract calcularSalario(): number;
}

