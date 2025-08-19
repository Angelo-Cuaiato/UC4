// Classe Veiculo
class Veiculo {
    protected velocidade: number;

    constructor() {
        this.velocidade = 0;
    }
}

// Subclasse Carro
class Carro extends Veiculo {
    public acelerar(valor: number): void {
        this.velocidade += valor;
        console.log(`Velocidade atual: ${this.velocidade} km/h`);
    }
}

// Instanciando e testando Carro
const meuCarro = new Carro();
meuCarro.acelerar(30); // Deve mostrar: Velocidade atual: 30 km/h
