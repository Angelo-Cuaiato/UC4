import { Cla } from "./Cla.js";

export class ClaNara extends Cla {
  constructor() {
    super("Nara", "Shikamaru");
  }

  habilidadeEspecial(): void {
    console.log("Manipulação de sombras para imobilização.");
  }

  ataqueEspecial(): void {
    console.log("Ataque Especial: Técnica da Prisão das Sombras.");
  }
}

