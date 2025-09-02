import { Funcionario } from "./Funcionario.js";

export class FuncionarioCLT extends Funcionario {
  constructor(nome: string, private salarioFixo: number) {
    super(nome);
  }

  calcularSalario(): number {
    return this.salarioFixo;
  }
}
