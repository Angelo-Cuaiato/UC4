class Pagamento {
    processar() {
        console.log("Processando pagamento genérico.");
    }
}

class CartaoCredito extends Pagamento {
    processar() {
        console.log("Pagamento realizado com cartão de crédito.");
    }
}

class Boleto extends Pagamento {
    processar() {
        console.log("Pagamento realizado com boleto bancário.");
    }
}

// Demonstração de polimorfismo
const pagamentos = [new CartaoCredito(), new Boleto()];
pagamentos.forEach(p => p.processar());
