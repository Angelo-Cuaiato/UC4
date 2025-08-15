class Pacote {
  destino: string;
  peso: number;

  constructor(destino: string, peso: number) {
    this.destino = destino;
    this.peso = peso;
  }

  trocarDestino(novoDestino: string) {
    this.destino = novoDestino;
    console.log(`O destino do pacote foi alterado para: ${this.destino}`);
  }
}

module.exports = { Pacote };