const { pessoa } = require('./index');
const { Pacote } = require('./pacote');

class Entregador {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  entregar(pacote: typeof Pacote.prototype) {
    console.log(`${this.nome} está entregando um pacote de ${pacote.peso} kg para ${pacote.destino}.`);
  }
}

// Uso tentador
const pacote = new Pacote(pessoa.nome, pessoa.pesoPacote);
const entregador = new Entregador("João");

entregador.entregar(pacote);

// Trocar o endereço do pacote
pacote.trocarDestino("Rua das Flores, 123");