var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.acervo = [
            { titulo: "Menino Mandela", autor: "Flores", disponivel: true },
            { titulo: "Caçadora de Árvores", autor: "Carvalho", disponivel: false },
            { titulo: "Caçadora de Livros", autor: "Leitora", disponivel: true },
            { titulo: "Orgulho e Preconceito", autor: "Jane Austen", disponivel: true },
        ];
    }
    Biblioteca.prototype.buscarLivrosDisponiveis = function () {
        return this.acervo.filter(function (livro) { return livro.disponivel === true; });
    };
    return Biblioteca;
}());
var minhaBiblioteca = new Biblioteca();
var livrosDisponiveis = minhaBiblioteca.buscarLivrosDisponiveis();
console.log("Livros Disponíveis:");
livrosDisponiveis.forEach(function (livro) {
    console.log("- ".concat(livro.titulo, " por ").concat(livro.autor));
});
