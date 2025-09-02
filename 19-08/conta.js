class ContaBancaria {
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }
    atualizarSaldo(valor) {
        this.saldo += valor;
    }
}
class ContaPoupanca extends ContaBancaria {
    aplicarJuros(taxa) {
        const juros = this.saldo * taxa;
        this.atualizarSaldo(juros);
        console.log(`Juros aplicados: ${juros}. Saldo atual: ${this.saldo}`);
    }
}
export { ContaBancaria, ContaPoupanca };
//# sourceMappingURL=conta.js.map