var personagensNaruto = {
    Naruto: 'Uzumaki',
    Sasuke: 'Uchiha',
    Sakura: 'Haruno',
    Kakashi: 'Hatake'
};
for (var personagem in personagensNaruto) {
    console.log("".concat(personagem, " pertence ao cl\u00E3 ").concat(personagensNaruto[personagem]));
}
