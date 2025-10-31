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
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario.prototype.getSalario = function () {
        return this.salario;
    };
    Funcionario.prototype.getNome = function () {
        return this.nome;
    };
    return Funcionario;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, salario) {
        return _super.call(this, nome, salario) || this;
    }
    Gerente.prototype.calcularBonus = function () {
        return this.getSalario() * 0.10;
    };
    return Gerente;
}(Funcionario));
var Operario = /** @class */ (function (_super) {
    __extends(Operario, _super);
    function Operario(nome, salario) {
        return _super.call(this, nome, salario) || this;
    }
    Operario.prototype.calcularBonus = function () {
        return this.getSalario() * 0.05;
    };
    return Operario;
}(Funcionario));
function calcularSalarioComBonus(funcionarios) {
    console.log("\n--- Cálculo de Salário Final (com Bônus) ---");
    funcionarios.forEach(function (f) {
        var salarioBase = f.getSalario();
        var bonus = f.calcularBonus();
        var salarioFinal = salarioBase + bonus;
        console.log("".concat(f.getNome(), ": Sal\u00E1rio Final = R$ ").concat(salarioFinal.toFixed(2)));
    });
}
var gerenteA = new Gerente("Carla", 8540.75);
var operarioX = new Operario("João", 3120.40);
var gerenteB = new Gerente("Rafael", 9210.50);
var operarioY = new Operario("Maria", 2890.35);
var equipe = [
    gerenteA,
    operarioX,
    gerenteB,
    operarioY
];
calcularSalarioComBonus(equipe);
