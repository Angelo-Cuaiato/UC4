// Classe que representa um monstro no jogo
class Monstro {
  // Nome do monstro (privado)
  private nome: string;
  // Vida atual do monstro (privado)
  private vida: number;
  // Força do monstro (privado)
  private forca: number;
  // Vida máxima do monstro (privado)
  private vidaMaxima: number;

  // Construtor inicializa os atributos do monstro
  constructor(nome: string, vida: number, forca: number) {
    this.nome = nome;
    this.vida = vida;
    this.forca = forca;
    this.vidaMaxima = vida;
  }

  // Método para atacar outro personagem ou monstro
  atacar(alvo: { dano: (valor: number) => void }) {
    alvo.dano(this.forca);
  }

  // Método chamado quando o monstro recebe dano
  dano(valor: number) {
    this.vida -= valor;
    if (this.vida < 0) this.vida = 0;
  }

  // Método para curar o monstro, sem ultrapassar a vida máxima
  curar(valor: number) {
    this.vida += valor;
    if (this.vida > this.vidaMaxima) this.vida = this.vidaMaxima;
  }

  // Retorna uma string com o status atual do monstro
  status(): string {
    return `${this.nome} (Monstro) - Vida: ${this.vida}/${this.vidaMaxima}, Força: ${this.forca}`;
  }
}
export { Monstro };
