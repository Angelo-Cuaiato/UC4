import { Forma } from "./Forma.js";

export class Retangulo extends Forma {
  constructor(public largura: number, public altura: number) {
    super();
  }

  calcularArea(): number {
    return this.largura * this.altura;
  }
}
