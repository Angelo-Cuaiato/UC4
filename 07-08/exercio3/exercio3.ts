const personagensNaruto = {
  Naruto: 'Uzumaki',
  Sasuke: 'Uchiha',
  Sakura: 'Haruno',
  Kakashi: 'Hatake'
};

for (const personagem in personagensNaruto) {
  console.log(`${personagem} pertence ao clã ${personagensNaruto[personagem]}`);
}