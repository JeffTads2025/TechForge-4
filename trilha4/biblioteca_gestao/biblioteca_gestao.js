var BibliotecaGestao = /** @class */ (function () {
    function BibliotecaGestao() {
        this.acervo = [
            { titulo: "Menino Mandela", autor: "Flores", genero: "Biografia", disponivel: true },
            { titulo: "Caçadora de Árvores", autor: "Carvalho", genero: "Aventura", disponivel: false },
            { titulo: "Caçadora de Livros", autor: "Leitora", genero: "Mistério", disponivel: true },
            { titulo: "Orgulho e Preconceito", autor: "Jane Austen", genero: "Romance", disponivel: true },
        ];
    }
    BibliotecaGestao.prototype.filtrarPorGenero = function (genero) {
        return this.acervo.filter(function (livro) { return livro.genero === genero; });
    };
    BibliotecaGestao.prototype.buscarPorAutor = function (autor) {
        return this.acervo.filter(function (livro) { return livro.autor === autor; });
    };
    BibliotecaGestao.prototype.obterLivrosDisponiveisOrdenados = function () {
        var disponiveis = this.acervo.filter(function (livro) { return livro.disponivel === true; });
        return disponiveis.sort(function (a, b) {
            if (a.titulo < b.titulo)
                return -1;
            if (a.titulo > b.titulo)
                return 1;
            return 0;
        });
    };
    return BibliotecaGestao;
}());
var gestao = new BibliotecaGestao();
console.log("1. Livros Disponíveis Ordenados por Título ");
gestao.obterLivrosDisponiveisOrdenados().forEach(function (livro) {
    console.log("- ".concat(livro.titulo));
});
console.log("\n 2. Filtrar por Gênero: Romance ");
gestao.filtrarPorGenero("Romance").forEach(function (livro) {
    console.log("- ".concat(livro.titulo, " (G\u00EAnero: ").concat(livro.genero, ")"));
});
console.log("\n 3. Buscar por Autor: Flores ");
gestao.buscarPorAutor("Flores").forEach(function (livro) {
    console.log("- ".concat(livro.titulo, " (Dispon\u00EDvel: ").concat(livro.disponivel, ")"));
});
