const personagensDragonBall = [
  { nome: 'Goku', poder: 15000 },
  { nome: 'Vegeta', poder: 14999 },
  { nome: 'Krillin', poder: 7500 },
  { nome: 'Freeza', poder: 20000 },
];

personagensDragonBall.forEach(personagem => {
  if (personagem.poder > 8000) {
    console.log(`O poder de ${personagem.nome} é de mais de 8000!`);
  }
});