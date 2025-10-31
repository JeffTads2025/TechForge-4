var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pagamento = /** @class */ (function () {
    function Pagamento() {
    }
    Pagamento.prototype.processar = function () {
        console.log("Processando pagamento genérico...");
    };
    return Pagamento;
}());
var PagamentoCartao = /** @class */ (function (_super) {
    __extends(PagamentoCartao, _super);
    function PagamentoCartao(numeroCartao, valor) {
        var _this = _super.call(this) || this;
        var cartaoFormatado = numeroCartao;
        while (cartaoFormatado.length < 16) {
            cartaoFormatado = '0' + cartaoFormatado;
        }
        _this.numeroCartao = cartaoFormatado;
        _this.valor = valor;
        return _this;
    }
    PagamentoCartao.prototype.validarCartao = function () {
        return this.numeroCartao.length === 16;
    };
    PagamentoCartao.prototype.processar = function () {
        if (this.validarCartao()) {
            var ultimosDigitos = this.numeroCartao.slice(-4);
            console.log(" Cart\u00E3o ".concat(ultimosDigitos, " validado. Processando pagamento de R$ ").concat(this.valor.toFixed(2), "."));
        }
        else {
            console.log("Erro: Número de cartão inválido. Processamento negado.");
        }
    };
    return PagamentoCartao;
}(Pagamento));
var PagamentoBoleto = /** @class */ (function (_super) {
    __extends(PagamentoBoleto, _super);
    function PagamentoBoleto(valor) {
        var _this = _super.call(this) || this;
        _this.valor = valor;
        return _this;
    }
    PagamentoBoleto.prototype.gerarCodigoBoleto = function () {
        var codigo = Math.random().toString().slice(2, 27);
        return codigo.replace(/(\d{5})/g, '$1.').slice(0, 29);
    };
    PagamentoBoleto.prototype.processar = function () {
        var codigo = this.gerarCodigoBoleto();
        console.log("\u23F3 Boleto de R$ ".concat(this.valor.toFixed(2), " gerado. C\u00F3digo de barras: ").concat(codigo));
    };
    return PagamentoBoleto;
}(Pagamento));
function executarProcessamento(pagamentos) {
    console.log("\n- Executando Transações -");
    pagamentos.forEach(function (p) {
        p.processar();
    });
}
var pagamentoCartaoValido = new PagamentoCartao("9876543210987654", 550.99);
var pagamentoCartaoInvalido = new PagamentoCartao("12345", 100.00);
var pagamentoBoleto = new PagamentoBoleto(135.45);
var transacoes = [
    pagamentoCartaoValido,
    pagamentoCartaoInvalido,
    pagamentoBoleto
];
executarProcessamento(transacoes);
