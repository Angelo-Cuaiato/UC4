type Pessoa = {
  nome: string;
  idade: number;
  email: string;
  pesoPacote: number;
};

const pessoa: Pessoa = {
  nome: "Izabel",
  idade: 25,
  email: "izabel@email.com",
  pesoPacote: 2.5
};

module.exports = { pessoa };