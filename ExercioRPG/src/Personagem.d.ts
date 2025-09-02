declare class Personagem {
    private nome;
    private classe;
    private vida;
    getVida(): number;
    private forca;
    private vidaMaxima;
    constructor(nome: string, classe: string, vida: number, forca: number);
    atacar(alvo: {
        dano: (valor: number) => void;
    }): void;
    dano(valor: number): void;
    curar(valor: number): void;
    status(): string;
}
export { Personagem };
//# sourceMappingURL=Personagem.d.ts.map