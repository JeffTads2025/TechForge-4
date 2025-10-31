class Pagamento {
    
    public processar(): void {
        console.log("Processando pagamento genérico...");
    }
}

class PagamentoCartao extends Pagamento {
    
    private numeroCartao: string;
    private valor: number;

    constructor(numeroCartao: string, valor: number) {
        super();
        
       
        let cartaoFormatado = numeroCartao;
        while (cartaoFormatado.length < 16) {
            cartaoFormatado = '0' + cartaoFormatado;
        }
        this.numeroCartao = cartaoFormatado;
        
        this.valor = valor;
    }

    private validarCartao(): boolean {
        return this.numeroCartao.length === 16;
    }

    public processar(): void {
        if (this.validarCartao()) {
            const ultimosDigitos = this.numeroCartao.slice(-4);
            console.log(` Cartão ${ultimosDigitos} validado. Processando pagamento de R$ ${this.valor.toFixed(2)}.`);
        } else {
            console.log("Erro: Número de cartão inválido. Processamento negado.");
        }
    }
}

class PagamentoBoleto extends Pagamento {
    
    private valor: number;

    constructor(valor: number) {
        super();
        this.valor = valor;
    }
    
    private gerarCodigoBoleto(): string {
        const codigo = Math.random().toString().slice(2, 27);
        return codigo.replace(/(\d{5})/g, '$1.').slice(0, 29);
    }

    public processar(): void {
        const codigo = this.gerarCodigoBoleto();
        console.log(`⏳ Boleto de R$ ${this.valor.toFixed(2)} gerado. Código de barras: ${codigo}`);
    }
}

function executarProcessamento(pagamentos: Pagamento[]): void {
    console.log("\n- Executando Transações -");
    pagamentos.forEach(p => {
        p.processar();
    });
}

const pagamentoCartaoValido = new PagamentoCartao("9876543210987654", 550.99);
const pagamentoCartaoInvalido = new PagamentoCartao("12345", 100.00); 
const pagamentoBoleto = new PagamentoBoleto(135.45);

const transacoes: Pagamento[] = [
    pagamentoCartaoValido,
    pagamentoCartaoInvalido,
    pagamentoBoleto
];

executarProcessamento(transacoes);