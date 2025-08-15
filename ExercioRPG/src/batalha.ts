// Importa as classes Personagem e Monstro
import { Personagem } from "./Personagem.js";
import { Monstro } from "./Monstro.js";

// Cria um personagem do tipo guerreiro e um monstro
const heroi = new Personagem("Arthas", "Guerreiro", 100, 20);
const monstro = new Monstro("Orc", 80, 15);

// Exibe o status inicial dos personagens
console.log("Status inicial:");
console.log(heroi.status());
console.log(monstro.status());

// Turno 1: herói ataca
// O método atacar chama o método dano do alvo, reduzindo sua vida conforme a força do atacante
heroi.atacar(monstro);
console.log("\nApós ataque do herói:");
console.log(heroi.status());
console.log(monstro.status());

// Turno 2: monstro ataca
monstro.atacar(heroi);
console.log("\nApós ataque do monstro:");
console.log(heroi.status());
console.log(monstro.status());

// Herói se cura
// O método curar aumenta a vida do personagem, mas nunca ultrapassa o valor máximo
heroi.curar(10);
console.log("\nHerói se cura:");
console.log(heroi.status());
console.log(monstro.status());
