export abstract class Cla {
  constructor(public nomeDoCla: string, public lider: string) {}

  abstract habilidadeEspecial(): void;

  exibirDetalhes(): void {
    console.log(`Clã: ${this.nomeDoCla} | Líder: ${this.lider}`);
  }

  abstract ataqueEspecial(): void;
}

