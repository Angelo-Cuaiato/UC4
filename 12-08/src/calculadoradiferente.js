const readline = require('readline-sync');
class Calculadora {
    constructor() {
        this.continuar = true;
    }
    iniciar() {
        while (this.continuar) {
            this.exibirMenu();
            const opcao = Number(readline.question('Escolha uma opção: '));
            if (opcao === 5) {
                console.log('Saindo da calculadora...');
                this.continuar = false;
                break;
            }
            if (opcao < 1 || opcao > 5 || isNaN(opcao)) {
                console.log('Opção inválida! Tente novamente.');
                continue;
            }
            const num1 = Number(readline.question('Digite o primeiro número: '));
            const num2 = Number(readline.question('Digite o segundo número: '));
            const resultado = this.calcular(opcao, num1, num2);
            console.log(`Resultado: ${resultado}`);
        }
    }
    exibirMenu() {
        console.log('\n=== CALCULADORA ===');
        console.log('1 - Somar');
        console.log('2 - Subtrair');
        console.log('3 - Multiplicar');
        console.log('4 - Dividir');
        console.log('5 - Sair');
    }
    calcular(opcao, num1, num2) {
        switch (opcao) {
            case 1:
                return this.somar(num1, num2);
            case 2:
                return this.subtrair(num1, num2);
            case 3:
                return this.multiplicar(num1, num2);
            case 4:
                return this.dividir(num1, num2);
            default:
                return 'Opção inválida!';
        }
    }
    somar(a, b) {
        return a + b;
    }
    subtrair(a, b) {
        return a - b;
    }
    multiplicar(a, b) {
        return a * b;
    }
    dividir(a, b) {
        if (b === 0) {
            return 'Erro: divisão por zero!';
        }
        return a / b;
    }
}
// Instancia e inicia a calculadora
const calculadora = new Calculadora();
calculadora.iniciar();
export {};
//# sourceMappingURL=calculadoradiferente.js.map