const { pessoa } = require('./index');
const { Pacote } = require('./pacote');
class Entregador {
    constructor(nome) {
        this.nome = nome;
    }
    entregar(pacote) {
        console.log(`${this.nome} está entregando um pacote de ${pacote.peso} kg para ${pacote.destino}.`);
    }
}
// Uso tentador
const pacote = new Pacote(pessoa.nome, pessoa.pesoPacote);
const entregador = new Entregador("João");
entregador.entregar(pacote);
// Trocar o endereço do pacote
pacote.trocarDestino("Rua das Flores, 123");
export {};
//# sourceMappingURL=entregar.js.map