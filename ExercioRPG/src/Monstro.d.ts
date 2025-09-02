declare class Monstro {
    private nome;
    private vida;
    getVida(): number;
    private forca;
    private vidaMaxima;
    constructor(nome: string, vida: number, forca: number);
    getNome(): string;
    atacar(alvo: {
        dano: (valor: number) => void;
    }): void;
    dano(valor: number): void;
    curar(valor: number): void;
    status(): string;
}
declare class Goblin extends Monstro {
    constructor();
}
declare class Orc extends Monstro {
    constructor();
}
declare class Dragao extends Monstro {
    constructor();
}
declare function criarMonstroAleatorio(): Monstro;
export { Monstro, Goblin, Orc, Dragao, criarMonstroAleatorio };
//# sourceMappingURL=Monstro.d.ts.map