class Loja {
    constructor() {
        this.produtos = [
            { codigo: 10, nome: "Notebook Pro" },
            { codigo: 20, nome: "Mouse Óptico" },
            { codigo: 30, nome: "Teclado Mecânico" },
        ];
    }
    buscarProdutoPorCodigo(codigo) {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}
const minhaLoja = new Loja();
const produtoTeste = minhaLoja.buscarProdutoPorCodigo(20);
if (produtoTeste) {
    console.log(`Busca bem-sucedida: ${produtoTeste.nome}`);
}
else {
    console.log("Busca falhou.");
}
