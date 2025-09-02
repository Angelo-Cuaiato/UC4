import type { Forma } from "./Forma.js";
import { Retangulo } from "./Retangulo.js";
import { Triangulo } from "./Triangulo.js";

const formas: Forma[] = [
  new Retangulo(3, 4),
  new Triangulo(5, 2),
  new Retangulo(10, 2),
  new Triangulo(3, 8),
];

formas.forEach((f, i) => {
  console.log(`Forma ${i + 1} - Área: ${f.calcularArea()}`);
});
