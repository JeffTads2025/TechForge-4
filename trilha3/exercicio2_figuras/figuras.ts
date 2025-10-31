abstract class FiguraGeometrica {
    
    public abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
    
    private raio: number;

    constructor(raio: number) {
        super();
        this.raio = raio;
    }

    public calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }
}

class Quadrado extends FiguraGeometrica {
    
    private lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    public calcularArea(): number {
        return this.lado * this.lado;
    }
}

class Triangulo extends FiguraGeometrica {
    
    private base: number;
    private altura: number;

    constructor(base: number, altura: number) {
        super();
        this.base = base;
        this.altura = altura;
    }

    public calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

function imprimirAreas(figuras: FiguraGeometrica[]): void {
    console.log("\n Áreas Calculadas ");
    figuras.forEach((figura, index) => {
        const area = figura.calcularArea();
        console.log(`Figura ${index + 1} (${figura.constructor.name}): Área = ${area.toFixed(2)}`);
    });
}

const meuCirculo = new Circulo(5);
const meuQuadrado = new Quadrado(4);
const meuTriangulo = new Triangulo(6, 8);

const formas: FiguraGeometrica[] = [
    meuCirculo,
    meuQuadrado,
    meuTriangulo
];

imprimirAreas(formas);