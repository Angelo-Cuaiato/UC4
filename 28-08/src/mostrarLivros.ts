import type { Livro } from "./livro";

function mostrarLivros(livros: Livro[]): void {
  livros.forEach((livro, index) => {
    console.log(`Livro ${index + 1}:`);
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
    if (livro.disponivel !== undefined) {
      console.log(`Disponível: ${livro.disponivel ? "Sim" : "Não"}`);
    }
    console.log("-------------------");
  });
}

export { mostrarLivros };
