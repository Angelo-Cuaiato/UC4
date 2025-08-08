var personagens = [
    { nome: 'Luke Skywalker', jedi: true },
    { nome: 'Leia Organa', jedi: false },
    { nome: 'Yoda', jedi: true },
    { nome: 'Darth Vader', jedi: false },
];
for (var _i = 0, personagens_1 = personagens; _i < personagens_1.length; _i++) {
    var personagem = personagens_1[_i];
    if (personagem.jedi) {
        console.log("Jedi encontrado: ".concat(personagem.nome));
    }
}
