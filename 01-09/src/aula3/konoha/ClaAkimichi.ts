import { Cla } from "./Cla.js";

export class ClaAkimichi extends Cla {
  constructor() {
    super("Akimichi", "Chouza");
  }

  habilidadeEspecial(): void {
    console.log("Ampliação corporal com conversão de calorias em chakra.");
  }

  ataqueEspecial(): void {
    console.log("Ataque Especial: Tamanho Parcial — soco gigante concentrado.");
  }
}

