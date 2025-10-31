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
var Veiculo = /** @class */ (function () {
    function Veiculo() {
    }
    Veiculo.prototype.mover = function () {
        console.log("O veículo está se movendo");
    };
    return Veiculo;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Carro.prototype.mover = function () {
        console.log("O carro está dirigindo");
    };
    return Carro;
}(Veiculo));
var Bicicleta = /** @class */ (function (_super) {
    __extends(Bicicleta, _super);
    function Bicicleta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bicicleta.prototype.mover = function () {
        console.log("A bicicleta está pedalando");
    };
    return Bicicleta;
}(Veiculo));
var meuCarro = new Carro();
var minhaBicicleta = new Bicicleta();
meuCarro.mover();
minhaBicicleta.mover();
