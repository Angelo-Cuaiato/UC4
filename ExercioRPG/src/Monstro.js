// Classe que representa um monstro no jogo
// Classe base para monstros
class Monstro {
    getVida() {
        return this.vida;
    }
    // Construtor inicializa os atributos do monstro
    constructor(nome, vida, forca) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.vidaMaxima = vida;
    }
    // Permite acessar o nome do monstro
    getNome() {
        return this.nome;
    }
    // Método para atacar outro personagem ou monstro
    atacar(alvo) {
        alvo.dano(this.forca);
    }
    // Método chamado quando o monstro recebe dano
    dano(valor) {
        this.vida -= valor;
        if (this.vida < 0)
            this.vida = 0;
    }
    // Método para curar o monstro, sem ultrapassar a vida máxima
    curar(valor) {
        this.vida += valor;
        if (this.vida > this.vidaMaxima)
            this.vida = this.vidaMaxima;
    }
    // Retorna uma string com o status atual do monstro
    status() {
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
function criarMonstroAleatorio() {
    const tipos = [Goblin, Orc, Dragao];
    const Escolhido = tipos[Math.floor(Math.random() * tipos.length)];
    return new Escolhido();
}
export { Monstro, Goblin, Orc, Dragao, criarMonstroAleatorio };
//# sourceMappingURL=Monstro.js.map