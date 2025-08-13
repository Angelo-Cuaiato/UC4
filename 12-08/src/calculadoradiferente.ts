const readline = require('readline-sync');

class Calculadora {
  private continuar: boolean;

  constructor() {
    this.continuar = true;
  }

  public iniciar(): void {
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

  private exibirMenu(): void {
    console.log('\n=== CALCULADORA ===');
    console.log('1 - Somar');
    console.log('2 - Subtrair');
    console.log('3 - Multiplicar');
    console.log('4 - Dividir');
    console.log('5 - Sair');
  }

  private calcular(opcao: number, num1: number, num2: number): number | string {
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

  private somar(a: number, b: number): number {
    return a + b;
  }

  private subtrair(a: number, b: number): number {
    return a - b;
  }

  private multiplicar(a: number, b: number): number {
    return a * b;
  }

  private dividir(a: number, b: number): number | string {
    if (b === 0) {
      return 'Erro: divisão por zero!';
    }
    return a / b;
  }
}

// Instancia e inicia a calculadora
const calculadora = new Calculadora();
calculadora.iniciar();