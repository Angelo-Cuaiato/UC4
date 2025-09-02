import { Funcionario } from "./Funcionario.js";

export class FuncionarioPJ extends Funcionario {
  constructor(
    nome: string,
    private horasTrabalhadas: number,
    private valorHora: number
  ) {
    super(nome);
  }

  calcularSalario(): number {
    return this.horasTrabalhadas * this.valorHora;
  }
}
