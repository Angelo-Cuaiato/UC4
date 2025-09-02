declare class ContaBancaria {
    protected saldo: number;
    constructor(saldoInicial: number);
    protected atualizarSaldo(valor: number): void;
}
declare class ContaPoupanca extends ContaBancaria {
    aplicarJuros(taxa: number): void;
}
export { ContaBancaria, ContaPoupanca };
//# sourceMappingURL=conta.d.ts.map