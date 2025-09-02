export abstract class UsuarioSistema {
  constructor(public nome: string) {}

  abstract acessarPainel(): void;
}

