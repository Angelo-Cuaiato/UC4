import { Animal } from './animal.js';
declare class PaiDog extends Animal {
    constructor(nome: string);
    emitirSom(): void;
}
declare class Dog extends PaiDog {
    constructor(nome: string);
    emitirSom(): void;
    eat(): void;
}
export { Dog, PaiDog };
//# sourceMappingURL=dog.d.ts.map