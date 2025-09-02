import { Cla } from "./Cla.js";

export class ClaUchiha extends Cla {
  constructor() {
    super("Uchiha", "Sasuke");
  }

  habilidadeEspecial(): void {
    console.log("Sharingan: percepção e cópia de técnicas.");
  }

  ataqueEspecial(): void {
    console.log("Ataque Especial: Amaterasu — chamas negras inextinguíveis.");
  }
}

