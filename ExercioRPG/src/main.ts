// Script interativo para rodar no terminal (cmd)
import readline from 'readline';
import { Personagem } from './Personagem.js';
import { Monstro } from './Monstro.js';
import { criarMonstroAleatorio } from './monstros.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function perguntar(pergunta: string): Promise<string> {
  return new Promise(resolve => rl.question(pergunta, resolve));
}

async function main() {
  console.log('Bem-vindo ao RPG!');
  const nome = await perguntar('Digite o nome do seu personagem: ');
  const classe = await perguntar('Escolha a classe (Guerreiro, Mago, Arqueiro): ');
  const heroi = new Personagem(nome, classe, 100, 20);
  let monstro = criarMonstroAleatorio();

  while (heroi.getVida() > 0) {
    console.log('\nStatus:');
    console.log(heroi.status());
    console.log(monstro.status());
    const acao = await perguntar('O que deseja fazer? (atacar/curar/sair): ');
    if (acao.toLowerCase() === 'atacar') {
      heroi.atacar(monstro);
      console.log('Você atacou o monstro!');
    } else if (acao.toLowerCase() === 'curar') {
      heroi.curar(10);
      console.log('Você se curou!');
    } else if (acao.toLowerCase() === 'sair') {
      break;
    } else {
      console.log('Ação inválida.');
      continue;
    }
    if (monstro.getVida() > 0) {
      monstro.atacar(heroi);
      console.log(`O ${monstro.status().split(' ')[0]} atacou você!`);
    } else {
      console.log(`Você derrotou o ${monstro.status().split(' ')[0]}!`);
      // Novo monstro aparece
      monstro = criarMonstroAleatorio();
      console.log(`\nUm novo monstro apareceu: ${monstro.status()}`);
    }
    if (heroi.getVida() <= 0) {
      break;
    }
  }
  console.log('\nFim de jogo!');
  console.log(heroi.status());
  console.log(monstro.status());
  rl.close();
}

main();
