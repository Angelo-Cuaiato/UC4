const personagensNaruto = {
  Naruto: 'Uzumaki',
  Sasuke: 'Uchiha',
  Sakura: 'Haruno',
  Kakashi: 'Hatake'
};

for (const personagem in personagensNaruto) {
  const nome = personagem as keyof typeof personagensNaruto;
  console.log(`${nome} pertence ao clã ${personagensNaruto[nome]}`);
}