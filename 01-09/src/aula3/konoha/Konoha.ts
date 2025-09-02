import { ClaUchiha } from "./ClaUchiha.js";
import { ClaHyuuga } from "./ClaHyuuga.js";
import { ClaNara } from "./ClaNara.js";
import { ClaAkimichi } from "./ClaAkimichi.js";

console.log("=== Konoha — Clãs ===");

const clas = [new ClaUchiha(), new ClaHyuuga(), new ClaNara(), new ClaAkimichi()];

for (const c of clas) {
  c.exibirDetalhes();
  c.habilidadeEspecial();
  c.ataqueEspecial();
  console.log("---");
}

