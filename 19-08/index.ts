
import './veiculo';
import { ContaBancaria, ContaPoupanca } from './conta';

// Testando ContaPoupanca
const minhaConta = new ContaPoupanca(1000);
// Tenta acessar o método protegido (deve dar erro se descomentar)
// minhaConta.atualizarSaldo(100); // Erro: método protegido

// Tenta acessar o saldo diretamente (deve dar erro se descomentar)
// console.log(minhaConta.saldo); // Erro: propriedade protegida

// Usa o método público
minhaConta.aplicarJuros(0.05); // Aplica 5% de juros
