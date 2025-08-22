
class ContaBancaria {
	protected saldo: number;
	constructor(saldoInicial: number) {
		this.saldo = saldoInicial;
	}
	protected atualizarSaldo(valor: number): void {
		this.saldo += valor;
	}
}

class ContaPoupanca extends ContaBancaria {
	public aplicarJuros(taxa: number): void {
		const juros = this.saldo * taxa;
		this.atualizarSaldo(juros);
		console.log(`Juros aplicados: ${juros}. Saldo atual: ${this.saldo}`);
	}
}

export { ContaBancaria, ContaPoupanca };
