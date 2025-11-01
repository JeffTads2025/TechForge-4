interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    private acervo: Livro[];

    constructor() {
        this.acervo = [
            { titulo: "Menino Mandela", autor: "Flores", disponivel: true },
            { titulo: "Caçadora de Árvores", autor: "Carvalho", disponivel: false },
            { titulo: "Caçadora de Livros", autor: "Leitora", disponivel: true },
            { titulo: "Orgulho e Preconceito", autor: "Jane Austen", disponivel: true },
        ];
    }

    buscarLivrosDisponiveis(): Livro[] {
        return this.acervo.filter(livro => livro.disponivel === true);
    }
}

const minhaBiblioteca = new Biblioteca();
const livrosDisponiveis = minhaBiblioteca.buscarLivrosDisponiveis();

console.log("Livros Disponíveis:");
livrosDisponiveis.forEach(livro => {
    console.log(`- ${livro.titulo} por ${livro.autor}`);
});