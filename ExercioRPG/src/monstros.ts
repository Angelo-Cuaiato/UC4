// Lista de tipos de monstros disponíveis no jogo
export const tiposDeMonstros = [
  { nome: 'Goblin', vida: 40, forca: 8 },
  { nome: 'Orc', vida: 80, forca: 15 },
  { nome: 'Dragão', vida: 150, forca: 30 }
];

// Função utilitária para criar um monstro aleatório
import { Monstro } from './Monstro.js';
export function criarMonstroAleatorio(): Monstro {
  const escolhido = tiposDeMonstros[Math.floor(Math.random() * tiposDeMonstros.length)];
  return new Monstro(escolhido.nome, escolhido.vida, escolhido.forca);
}
