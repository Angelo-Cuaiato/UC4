import { Forma } from "./Forma.js";

export class Triangulo extends Forma {
  constructor(public base: number, public altura: number) {
    super();
  }

  calcularArea(): number {
    return (this.base * this.altura) / 2;
  }
}
