import { FuncionarioCLT } from "./FuncionarioCLT.js";
import { FuncionarioPJ } from "./FuncionarioPJ.js";

const clt = new FuncionarioCLT("Ana", 5500);
const pj = new FuncionarioPJ("Bruno", 160, 80);

console.log(`${clt.nome} - Salário: ${clt.calcularSalario()}`);
console.log(`${pj.nome} - Salário: ${pj.calcularSalario()}`);
