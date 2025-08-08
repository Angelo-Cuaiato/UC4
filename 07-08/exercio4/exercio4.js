var personagensDragonBall = [
    { nome: 'Goku', poder: 15000 },
    { nome: 'Vegeta', poder: 14999 },
    { nome: 'Krillin', poder: 7500 },
    { nome: 'Freeza', poder: 20000 },
];
personagensDragonBall.forEach(function (personagem) {
    if (personagem.poder > 8000) {
        console.log("O poder de ".concat(personagem.nome, " \u00E9 de mais de 8000!"));
    }
});
