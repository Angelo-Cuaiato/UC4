class Monstro {
  private nome: string;
  private vida: number;
  private forca: number;
  private vidaMaxima: number;

  constructor(nome: string, vida: number, forca: number) {
    this.nome = nome;
    this.vida = vida;
    this.forca = forca;
    this.vidaMaxima = vida;
  }

  atacar(alvo: { dano: (valor: number) => void }) {
    alvo.dano(this.forca);
  }

  dano(valor: number) {
    this.vida -= valor;
    if (this.vida < 0) this.vida = 0;
  }

  curar(valor: number) {
    this.vida += valor;
    if (this.vida > this.vidaMaxima) this.vida = this.vidaMaxima;
  }

  status(): string {
    return `${this.nome} (Monstro) - Vida: ${this.vida}/${this.vidaMaxima}, Força: ${this.forca}`;
  }
}
export { Monstro };
