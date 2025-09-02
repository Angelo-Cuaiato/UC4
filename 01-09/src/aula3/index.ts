import { Administrador } from "./Administrador.js";
import { Cliente } from "./Cliente.js";
import type { Autenticavel } from "./Autenticavel.js";
import { UsuarioSistema } from "./UsuarioSistema.js";

function tentarLogin(usuarioSistema: UsuarioSistema & Autenticavel, usuario: string, senha: string) {
  const ok = usuarioSistema.autenticar(usuario, senha);
  console.log(`Login de '${usuario}' ${ok ? "bem-sucedido" : "falhou"}.`);
  if (ok) usuarioSistema.acessarPainel();
}

console.log("=== Aula 3 — Autenticação ===");
const admin = new Administrador("Ana Admin", "admin", "admin123");
const cliente = new Cliente("Bruno Cliente", "cliente", "cliente123");
tentarLogin(admin, "admin", "admin123");
tentarLogin(cliente, "cliente", "errado");
tentarLogin(cliente, "cliente", "cliente123");

