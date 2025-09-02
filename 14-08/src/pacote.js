class Pacote {
    constructor(destino, peso) {
        this.destino = destino;
        this.peso = peso;
    }
    trocarDestino(novoDestino) {
        this.destino = novoDestino;
        console.log(`O destino do pacote foi alterado para: ${this.destino}`);
    }
}
module.exports = { Pacote };
export {};
//# sourceMappingURL=pacote.js.map