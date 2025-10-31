class Veiculo {
    
    public mover(): void {
        console.log("O veículo está se movendo");
    }
}

class Carro extends Veiculo {
    
    public mover(): void {
        console.log("O carro está dirigindo");
    }
}

class Bicicleta extends Veiculo {
    
    public mover(): void {
        console.log("A bicicleta está pedalando");
    }
}

const meuCarro: Carro = new Carro();
const minhaBicicleta: Bicicleta = new Bicicleta();

meuCarro.mover();
minhaBicicleta.mover();