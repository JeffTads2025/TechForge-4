class Animal {
    
    protected nome: string;
    private energia: number;

    constructor(nome: string, energiaInicial: number) {
        this.nome = nome;
        this.energia = energiaInicial;
    }

    public comer(quantidade: number): void {
        this.energia += quantidade;
        console.log(`${this.nome} comeu e recuperou ${quantidade.toFixed(1)} de energia.`);
    }

    public statusEnergia(): void {
        console.log(`[${this.nome}] Nível de energia: ${this.energia.toFixed(1)}`);
    }

    protected getEnergia(): number {
        return this.energia;
    }
    
    protected setEnergia(novaEnergia: number): void {
        this.energia = novaEnergia;
    }
}

class Leao extends Animal {
    
    constructor(nome: string) {
        super(nome, 60.5); 
    }

    public comer(gasto: number): void {
        const energiaAtual = this.getEnergia();
        
        this.setEnergia(energiaAtual - gasto);
        console.log(`O ${this.nome} caçou, gastando ${gasto.toFixed(1)} de energia.`);
        
        const recuperacao = gasto * 2.5; 
        this.setEnergia(this.getEnergia() + recuperacao);
        console.log(`O ${this.nome} se alimentou e recuperou ${recuperacao.toFixed(1)}.`);
    }
}

class Passaro extends Animal {
    
    constructor(nome: string) {
        super(nome, 30.2); 
    }

    public comer(quantidade: number): void {
        this.setEnergia(this.getEnergia() + quantidade);
        console.log(`O ${this.nome} se alimentou e recuperou ${quantidade.toFixed(1)} de energia.`);
    }
}

function alimentarAnimais(animais: Animal[]): void {
    console.log("\n--- Simulação de Alimentação ---");
    animais.forEach(animal => {
        animal.statusEnergia();
        
        if (animal instanceof Leao) {
            animal.comer(10.7); 
        } else if (animal instanceof Passaro) {
            animal.comer(5.3);
        }
        
        animal.statusEnergia();
        console.log("---------------------------------");
    });
}

const leaoGenerico = new Leao("Leão");
const passaroGenerico = new Passaro("Pássaro");

const fauna: Animal[] = [leaoGenerico, passaroGenerico];

alimentarAnimais(fauna);