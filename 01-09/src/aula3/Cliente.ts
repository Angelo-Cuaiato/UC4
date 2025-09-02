import { UsuarioSistema } from "./UsuarioSistema.js";
import type { Autenticavel } from "./Autenticavel.js";

export class Cliente extends UsuarioSistema implements Autenticavel {
  constructor(
    nome: string,
    private usuario: string,
    private senha: string
  ) {
    super(nome);
  }

  autenticar(usuario: string, senha: string): boolean {
    return usuario === this.usuario && senha === this.senha;
  }

  acessarPainel(): void {
    console.log(`Painel do Cliente — Olá, ${this.nome}!`);
  }
}

