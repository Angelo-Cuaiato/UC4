const personagens = [
  { nome: 'Luke Skywalker', jedi: true },
  { nome: 'Leia Organa', jedi: false },
  { nome: 'Yoda', jedi: true },
  { nome: 'Darth Vader', jedi: false },
];

for (const personagem of personagens) {
  if (personagem.jedi) {
    console.log(`Jedi encontrado: ${personagem.nome}`);
  }
}
