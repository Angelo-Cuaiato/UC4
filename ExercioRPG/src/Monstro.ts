// Classe que representa um monstro no jogo
// Classe base para monstros
class Monstro {
  // Nome do monstro (privado)
  private nome: string;
  // Vida atual do monstro (privado, mas com getter público)
  private vida: number;
  public getVida() {
    return this.vida;
  }
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
  
  // Permite acessar o nome do monstro
  public getNome() {
    return this.nome;
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
// Subclasse para Goblin
class Goblin extends Monstro {
  constructor() {
    super('Goblin', 40, 8);
  }
}

// Subclasse para Orc
class Orc extends Monstro {
  constructor() {
    super('Orc', 80, 15);
  }
}

// Subclasse para Dragão
class Dragao extends Monstro {
  constructor() {
    super('Dragão', 150, 30);
  }
}

// Função utilitária para criar um monstro aleatório
function criarMonstroAleatorio(): Monstro {
  const tipos = [Goblin, Orc, Dragao];
  const Escolhido = tipos[Math.floor(Math.random() * tipos.length)];
  return new Escolhido();
}

export { Monstro, Goblin, Orc, Dragao, criarMonstroAleatorio };
