interface Produto {
    id: number;
    nome: string;
    preco: number;
}

class ItemLoja implements Produto {
    id: number;
    nome: string;
    preco: number;

    constructor(id: number, nome: string, preco: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        
        console.log(`Novo produto criado: ID ${this.id}, Nome: ${this.nome}, Preço: R$ ${this.preco.toFixed(2)}`);
    }
}

const meuProduto = new ItemLoja(101, "Smartphone X", 1999.99);

console.log(`\nDetalhes do Produto:`);
console.log(`ID: ${meuProduto.id}`);
console.log(`Nome: ${meuProduto.nome}`);
console.log(`Preço: R$ ${meuProduto.preco.toFixed(2)}`);

const produtoGenerico: Produto = meuProduto;
console.log(`O produto pode ser tratado como o tipo 'Produto': ${produtoGenerico.nome}`);