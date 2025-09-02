function mostrarLivros(livros) {
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
//# sourceMappingURL=mostrarLivros.js.map