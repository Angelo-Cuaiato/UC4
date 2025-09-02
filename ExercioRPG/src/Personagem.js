// Classe que representa um personagem jogável
class Personagem {
    getVida() {
        return this.vida;
    }
    // Construtor inicializa os atributos do personagem
    constructor(nome, classe, vida, forca) {
        this.nome = nome;
        this.classe = classe;
        this.vida = vida;
        this.forca = forca;
        this.vidaMaxima = vida;
    }
    // Método para atacar outro personagem ou monstro
    atacar(alvo) {
        alvo.dano(this.forca);
    }
    // Método chamado quando o personagem recebe dano
    dano(valor) {
        this.vida -= valor;
        if (this.vida < 0)
            this.vida = 0;
    }
    // Método para curar o personagem, sem ultrapassar a vida máxima
    curar(valor) {
        this.vida += valor;
        if (this.vida > this.vidaMaxima)
            this.vida = this.vidaMaxima;
    }
    // Retorna uma string com o status atual do personagem
    status() {
        return `${this.nome} (${this.classe}) - Vida: ${this.vida}/${this.vidaMaxima}, Força: ${this.forca}`;
    }
}
export { Personagem };
//# sourceMappingURL=Personagem.js.map