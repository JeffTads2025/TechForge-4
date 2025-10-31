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
var Animal = /** @class */ (function () {
    function Animal(nome, energiaInicial) {
        this.nome = nome;
        this.energia = energiaInicial;
    }
    Animal.prototype.comer = function (quantidade) {
        this.energia += quantidade;
        console.log("".concat(this.nome, " comeu e recuperou ").concat(quantidade.toFixed(1), " de energia."));
    };
    Animal.prototype.statusEnergia = function () {
        console.log("[".concat(this.nome, "] N\u00EDvel de energia: ").concat(this.energia.toFixed(1)));
    };
    Animal.prototype.getEnergia = function () {
        return this.energia;
    };
    Animal.prototype.setEnergia = function (novaEnergia) {
        this.energia = novaEnergia;
    };
    return Animal;
}());
var Leao = /** @class */ (function (_super) {
    __extends(Leao, _super);
    function Leao(nome) {
        return _super.call(this, nome, 60.5) || this;
    }
    Leao.prototype.comer = function (gasto) {
        var energiaAtual = this.getEnergia();
        this.setEnergia(energiaAtual - gasto);
        console.log("O ".concat(this.nome, " ca\u00E7ou, gastando ").concat(gasto.toFixed(1), " de energia."));
        var recuperacao = gasto * 2.5;
        this.setEnergia(this.getEnergia() + recuperacao);
        console.log("O ".concat(this.nome, " se alimentou e recuperou ").concat(recuperacao.toFixed(1), "."));
    };
    return Leao;
}(Animal));
var Passaro = /** @class */ (function (_super) {
    __extends(Passaro, _super);
    function Passaro(nome) {
        return _super.call(this, nome, 30.2) || this;
    }
    Passaro.prototype.comer = function (quantidade) {
        this.setEnergia(this.getEnergia() + quantidade);
        console.log("O ".concat(this.nome, " se alimentou e recuperou ").concat(quantidade.toFixed(1), " de energia."));
    };
    return Passaro;
}(Animal));
function alimentarAnimais(animais) {
    console.log("\n--- Simulação de Alimentação ---");
    animais.forEach(function (animal) {
        animal.statusEnergia();
        if (animal instanceof Leao) {
            animal.comer(10.7);
        }
        else if (animal instanceof Passaro) {
            animal.comer(5.3);
        }
        animal.statusEnergia();
        console.log("---------------------------------");
    });
}
var leaoGenerico = new Leao("Leão");
var passaroGenerico = new Passaro("Pássaro");
var fauna = [leaoGenerico, passaroGenerico];
alimentarAnimais(fauna);
