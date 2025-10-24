// Exercício 1: Classe ContaBancaria
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(titular, saldoInicial) {
        if (saldoInicial === void 0) { saldoInicial = 0; }
        this.titular = titular;
        this.saldo = saldoInicial;
    }
    ContaBancaria.prototype.depositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
        }
    };
    ContaBancaria.prototype.sacar = function (valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
        }
    };
    return ContaBancaria;
}());
// Exercício 2: Classe Livro
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false;
    }
    Livro.prototype.marcarComoLido = function () {
        this.lido = true;
    };
    return Livro;
}());
// Exercício 3: Classe Produto
var Produto = /** @class */ (function () {
    function Produto(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    Produto.prototype.valorTotalEmEstoque = function () {
        return this.preco * this.quantidade;
    };
    return Produto;
}());
// Exercício 4: Classe Temperatura
var Temperatura = /** @class */ (function () {
    function Temperatura(valor) {
        this.valor = valor;
    }
    Temperatura.prototype.paraFahrenheit = function () {
        return this.valor * 1.8 + 32;
    };
    Temperatura.prototype.paraKelvin = function () {
        return this.valor + 273.15;
    };
    return Temperatura;
}());
// Exercício 5: Classe Agenda
var Agenda = /** @class */ (function () {
    function Agenda() {
        this.compromissos = [];
    }
    Agenda.prototype.adicionarCompromisso = function (compromisso) {
        this.compromissos.push(compromisso);
    };
    Agenda.prototype.listarCompromissos = function () {
        return this.compromissos;
    };
    return Agenda;
}());
