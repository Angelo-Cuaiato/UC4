// Classe que representa um personagem jogável
class Personagem {
  // Nome do personagem (privado)
  private nome: string;
  // Classe do personagem (ex: guerreiro, mago, etc) (privado)
  private classe: string;
  // Vida atual do personagem (privado)
  private vida: number;
  // Força do personagem (privado)
  private forca: number;
  // Vida máxima do personagem (privado)
  private vidaMaxima: number;

  // Construtor inicializa os atributos do personagem
  constructor(nome: string, classe: string, vida: number, forca: number) {
    this.nome = nome;
    this.classe = classe;
    this.vida = vida;
    this.forca = forca;
    this.vidaMaxima = vida;
  }

  // Método para atacar outro personagem ou monstro
  atacar(alvo: { dano: (valor: number) => void }) {
    alvo.dano(this.forca);
  }

  // Método chamado quando o personagem recebe dano
  dano(valor: number) {
    this.vida -= valor;
    if (this.vida < 0) this.vida = 0;
  }

  // Método para curar o personagem, sem ultrapassar a vida máxima
  curar(valor: number) {
    this.vida += valor;
    if (this.vida > this.vidaMaxima) this.vida = this.vidaMaxima;
  }

  // Retorna uma string com o status atual do personagem
  status(): string {
    return `${this.nome} (${this.classe}) - Vida: ${this.vida}/${this.vidaMaxima}, Força: ${this.forca}`;
  }
}
export { Personagem };
