const CarroMain = require('./Carro');
const BicicletaMain = require('./Bicicleta');

// Demonstração de polimorfismo:
// A lista de Veiculo pode conter Carro e Bicicleta, e cada um executa seu próprio mover()
const veiculos = [new CarroMain(), new BicicletaMain()];
veiculos.forEach(v => v.mover());
