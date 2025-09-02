import { Cla } from "./Cla.js";

export class ClaHyuuga extends Cla {
  constructor() {
    super("Hyuuga", "Hiashi");
  }

  habilidadeEspecial(): void {
    console.log("Byakugan: visão 360° e tenketsu.");
  }

  ataqueEspecial(): void {
    console.log("Ataque Especial: Punho Suave — bloqueio de chakra.");
  }
}

