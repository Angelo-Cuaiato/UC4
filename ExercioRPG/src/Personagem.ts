class Personagem {
  private nome: string;
  private classe: string;
  private vida: number;
  private forca: number;
  private vidaMaxima: number;

  constructor(nome: string, classe: string, vida: number, forca: number) {
    this.nome = nome;
    this.classe = classe;
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
    return `${this.nome} (${this.classe}) - Vida: ${this.vida}/${this.vidaMaxima}, Força: ${this.forca}`;
  }
}
export { Personagem };
