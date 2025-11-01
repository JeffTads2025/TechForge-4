var ItemLoja = /** @class */ (function () {
    function ItemLoja(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        console.log("Novo produto criado: ID ".concat(this.id, ", Nome: ").concat(this.nome, ", Pre\u00E7o: R$ ").concat(this.preco.toFixed(2)));
    }
    return ItemLoja;
}());
var meuProduto = new ItemLoja(101, "Smartphone X", 1999.99);
console.log("\nDetalhes do Produto:");
console.log("ID: ".concat(meuProduto.id));
console.log("Nome: ".concat(meuProduto.nome));
console.log("Pre\u00E7o: R$ ".concat(meuProduto.preco.toFixed(2)));
var produtoGenerico = meuProduto;
console.log("O produto pode ser tratado como o tipo 'Produto': ".concat(produtoGenerico.nome));
