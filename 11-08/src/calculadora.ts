/**
 * Sistema de Calculadora Interativa
 * @author Professional TypeScript Developer
 * @version 1.0.0
 * @description Sistema de calculadora com menu interativo utilizando TypeScript
 */

const readline = require('readline-sync'); // Use require ao invés de import

// ==================== TIPOS E INTERFACES ====================

/**
 * Enum para as opções do menu
 * Melhora a legibilidade e manutenibilidade do código
 */
enum MenuOption {
    SOMAR = 1,
    SUBTRAIR = 2,
    MULTIPLICAR = 3,
    DIVIDIR = 4,
    SAIR = 5
}

/**
 * Interface para o resultado das operações
 */
interface CalculationResult {
    success: boolean;
    value?: number;
    error?: string;
}

/**
 * Tipo para as funções de operação matemática
 */
type MathOperation = (a: number, b: number) => number;

// ==================== CONSTANTES ====================

const MENU_HEADER = '\n=== CALCULADORA ===';
const MENU_OPTIONS = `
1 - Somar
2 - Subtrair
3 - Multiplicar
4 - Dividir
5 - Sair
`;
const DIVIDER = '='.repeat(20);

// ==================== FUNÇÕES MATEMÁTICAS ====================

/**
 * Realiza a operação de soma
 * @param a - Primeiro operando
 * @param b - Segundo operando
 * @returns Resultado da soma
 */
function somar(a: number, b: number): number {
    return a + b;
}

/**
 * Realiza a operação de subtração
 * @param a - Primeiro operando
 * @param b - Segundo operando
 * @returns Resultado da subtração
 */
function subtrair(a: number, b: number): number {
    return a - b;
}

/**
 * Realiza a operação de multiplicação
 * @param a - Primeiro operando
 * @param b - Segundo operando
 * @returns Resultado da multiplicação
 */
function multiplicar(a: number, b: number): number {
    return a * b;
}

/**
 * Realiza a operação de divisão com tratamento de erro
 * @param a - Dividendo
 * @param b - Divisor
 * @returns Resultado da divisão
 * @throws Error se o divisor for zero
 */
function dividir(a: number, b: number): number {
    if (b === 0) {
        throw new Error('Divisão por zero não é permitida');
    }
    return a / b;
}

// ==================== FUNÇÕES AUXILIARES ====================

/**
 * Limpa o console (funciona em diferentes sistemas operacionais)
 */
function limparTela(): void {
    console.clear();
}

/**
 * Exibe o menu principal
 */
function exibirMenu(): void {
    console.log(MENU_HEADER);
    console.log(MENU_OPTIONS);
    console.log(DIVIDER);
}

/**
 * Lê e valida a opção do menu escolhida pelo usuário
 * @returns Opção válida do menu ou null se inválida
 */
function lerOpcaoMenu(): MenuOption | null {
    const input = readline.question('Escolha uma opção: ');
    const opcao = Number(input);
    
    if (isNaN(opcao) || opcao < 1 || opcao > 5) {
        return null;
    }
    
    return opcao as MenuOption;
}

/**
 * Lê e valida um número do usuário
 * @param mensagem - Mensagem a ser exibida ao usuário
 * @returns Número válido ou null se inválido
 */
function lerNumero(mensagem: string): number | null {
    const input = readline.question(mensagem);
    const numero = Number(input);
    
    if (isNaN(numero)) {
        return null;
    }
    
    return numero;
}

/**
 * Coleta os dois operandos necessários para a operação
 * @returns Tupla com os dois números ou null se algum for inválido
 */
function coletarOperandos(): [number, number] | null {
    const num1 = lerNumero('Digite o primeiro número: ');
    if (num1 === null) {
        console.log('\n❌ Erro: Primeiro número inválido!');
        return null;
    }
    
    const num2 = lerNumero('Digite o segundo número: ');
    if (num2 === null) {
        console.log('\n❌ Erro: Segundo número inválido!');
        return null;
    }
    
    return [num1, num2];
}

/**
 * Executa uma operação matemática de forma segura
 * @param operation - Função de operação a ser executada
 * @param operationName - Nome da operação para exibição
 */
function executarOperacao(operation: MathOperation, operationName: string): void {
    console.log(`\n${DIVIDER}`);
    console.log(`📊 ${operationName.toUpperCase()}`);
    console.log(DIVIDER);
    
    const operandos = coletarOperandos();
    if (!operandos) {
        return;
    }
    
    const [num1, num2] = operandos;
    
    try {
        const resultado = operation(num1, num2);
        exibirResultado(num1, num2, resultado, operationName);
    } catch (error) {
        if (error instanceof Error) {
            console.log(`\n❌ Erro: ${error.message}`);
        }
    }
}

/**
 * Formata e exibe o resultado de uma operação
 * @param a - Primeiro operando
 * @param b - Segundo operando
 * @param resultado - Resultado da operação
 * @param operacao - Nome da operação
 */
function exibirResultado(a: number, b: number, resultado: number, operacao: string): void {
    const simboloOperacao = obterSimboloOperacao(operacao);
    console.log('\n✅ Resultado:');
    console.log(`   ${a} ${simboloOperacao} ${b} = ${resultado}`);
    
    // Formata números grandes com separadores de milhares
    if (Math.abs(resultado) >= 1000) {
        console.log(`   Formatado: ${resultado.toLocaleString('pt-BR')}`);
    }
}

/**
 * Retorna o símbolo matemático correspondente à operação
 * @param operacao - Nome da operação
 * @returns Símbolo matemático
 */
function obterSimboloOperacao(operacao: string): string {
    const simbolos: Record<string, string> = {
        'soma': '+',
        'subtração': '-',
        'multiplicação': '×',
        'divisão': '÷'
    };
    return simbolos[operacao] || '?';
}

/**
 * Pausa a execução até o usuário pressionar Enter
 */
function pausar(): void {
    console.log(`\n${DIVIDER}`);
    readline.question('Pressione ENTER para continuar...');
}

/**
 * Exibe mensagem de despedida
 */
function exibirMensagemSaida(): void {
    limparTela();
    console.log('\n' + '='.repeat(30));
    console.log('  👋 Obrigado por usar a');
    console.log('     CALCULADORA v1.0.0');
    console.log('='.repeat(30));
    console.log('\nAté logo!\n');
}

// ==================== FUNÇÃO PRINCIPAL ====================

/**
 * Função principal que controla o fluxo do programa
 */
function main(): void {
    let continuar = true;
    
    console.log('\n🔢 Bem-vindo à Calculadora Profissional!\n');
    
    while (continuar) {
        limparTela();
        exibirMenu();
        
        const opcao = lerOpcaoMenu();
        
        if (opcao === null) {
            console.log('\n❌ Opção inválida! Por favor, escolha uma opção entre 1 e 5.');
            pausar();
            continue;
        }
        
        switch (opcao) {
            case MenuOption.SOMAR:
                executarOperacao(somar, 'soma');
                pausar();
                break;
                
            case MenuOption.SUBTRAIR:
                executarOperacao(subtrair, 'subtração');
                pausar();
                break;
                
            case MenuOption.MULTIPLICAR:
                executarOperacao(multiplicar, 'multiplicação');
                pausar();
                break;
                
            case MenuOption.DIVIDIR:
                executarOperacao(dividir, 'divisão');
                pausar();
                break;
                
            case MenuOption.SAIR:
                continuar = false;
                exibirMensagemSaida();
                break;
                
            default:
                console.log('\n❌ Opção não implementada.');
                pausar();
                break;
        }
    }
}

// ==================== TRATAMENTO DE ERROS GLOBAL ====================

/**
 * Captura erros não tratados para evitar crash da aplicação
 */
process.on('uncaughtException', (error: Error) => {
    console.error('\n❌ Erro inesperado:', error.message);
    console.log('\nO programa será encerrado por segurança.');
    process.exit(1);
});

/**
 * Captura interrupção do usuário (Ctrl+C)
 */
process.on('SIGINT', () => {
    console.log('\n\n⚠️  Programa interrompido pelo usuário.');
    exibirMensagemSaida();
    process.exit(0);
});

// ==================== INICIALIZAÇÃO ====================

// Inicia o programa
main();