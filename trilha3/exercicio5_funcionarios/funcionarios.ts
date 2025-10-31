abstract class Funcionario {
    
    private nome: string;
    private salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    public getSalario(): number {
        return this.salario;
    }

    public getNome(): string {
        return this.nome;
    }
    
    public abstract calcularBonus(): number;
}

class Gerente extends Funcionario {
    
    constructor(nome: string, salario: number) {
        super(nome, salario);
    }
    
    public calcularBonus(): number {
        return this.getSalario() * 0.10;
    }
}

class Operario extends Funcionario {
    
    constructor(nome: string, salario: number) {
        super(nome, salario);
    }

    public calcularBonus(): number {
        return this.getSalario() * 0.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    console.log("\n--- Cálculo de Salário Final (com Bônus) ---");
    funcionarios.forEach(f => {
        const salarioBase = f.getSalario();
        const bonus = f.calcularBonus();
        const salarioFinal = salarioBase + bonus;
        
        console.log(`${f.getNome()}: Salário Final = R$ ${salarioFinal.toFixed(2)}`);
    });
}

const gerenteA = new Gerente("Carla", 8540.75);
const operarioX = new Operario("João", 3120.40);
const gerenteB = new Gerente("Rafael", 9210.50);
const operarioY = new Operario("Maria", 2890.35);

const equipe: Funcionario[] = [
    gerenteA,
    operarioX,
    gerenteB,
    operarioY
];

calcularSalarioComBonus(equipe);